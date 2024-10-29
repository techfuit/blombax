"use client";
import { fetchBinaryList } from "@/app/actions/fetchBinaryList";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TreeStructurePage = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const searchParams = useSearchParams()
  const username = searchParams.get("query")

  const findUserNode = ((tree, username) => {
    if (!tree) return null;
    if (tree.username === username) return tree;

    let foundNode = findUserNode(tree.left, username);
    if (foundNode) return foundNode;

    foundNode = findUserNode(tree.right, username);
    return foundNode;
  });

  useEffect(() => {
    const loadBinaryList = async () => {
      try {
        const { status, userData, teamDetails } = await fetchBinaryList();
        console.log(teamDetails)
        if (status) {
          if (userData && teamDetails) {
            const treeData = buildTree(userData, teamDetails);
            if(username){
              const userNode = findUserNode(treeData, username);
              if(userNode){
                setSelectedNode(userNode);
              } else{
                setSelectedNode(treeData)
              }
            } else{
              setSelectedNode(treeData)
            }
          } else {
            toast.error("Data is missing or empty.");
          }
        } else {
          toast.error("Failed to load binary list data.");
        }
      } catch (error) {
        toast.error("Error loading binary list.");
      }
    };

    loadBinaryList();
  }, [username]);

    const buildTree = (userData, teamDetails) => {
        const rootNode = {
          id: userData.id,
          username: userData.username,
          un_id: userData.un_id,
          placement_id: userData.placement_id,
          name: userData.name,
          active: userData.active,
          side: userData.side,
          total_package_amount_left: userData.total_package_amount_left,
          total_package_amount_right: userData.total_package_amount_right,
          total_this_month_package_amount_left: userData.total_this_month_package_amount_left,
          total_this_month_package_amount_right: userData.total_this_month_package_amount_right,
          left: null,
          right: null,
        };
      
      
        const addChildren = (parentNode, details) => {
          details.forEach((detail) => {
            const childNode = {
              id: detail.id,
              username: detail.username,
              un_id: detail.un_id,
              placement_id: detail.placement_id,
              name: detail.name,
              active: detail.active,
              side: detail.side,
              total_package_amount_left: detail.total_package_amount_left,
              total_package_amount_right: detail.total_package_amount_right,
              total_this_month_package_amount_left: detail.total_this_month_package_amount_left,
              total_this_month_package_amount_right: detail.total_this_month_package_amount_right,
              left: null,
              right: null,
            };
      
            // Set left or right child based on the 'side' attribute
            if (detail.side === "left") {
              console.log("Left-side user:", childNode );
              parentNode.left = childNode;
            } else if (detail.side === "right") {
              parentNode.right = childNode;
            }
      
            // Recursively add children if they exist
            if (detail.details && detail.details.length > 0) {
              addChildren(childNode, detail.details);
            }
          });
        };
      
        // Function to find children based on the 'refered_by' attribute
        const findChildren = (un_id, teamDetails) => {
          // return teamDetails.filter(member => member.refered_by === un_id);
          return teamDetails.filter(member => member. placement_id === un_id);
        };
      
        // Find the initial children for the root node
        const initialChildren = findChildren(userData.un_id, teamDetails);
      
        if (initialChildren.length > 0) {
          addChildren(rootNode, initialChildren);
        }
      
        return rootNode;
      };   

  const handleNodeClick = (node) => {
    if (node.isDummy) return;
    setSelectedNode(node);
  };

  const generateNodeName = (node) => node.username;

  const addDummyNodes = (nodes, maxNodes) => {
    const result = [...nodes];
    while (result.length < maxNodes) {
      const dummyId = `dummy-${result.length + 1}`;
      result.push({
        id: dummyId,
        username: "N / A",
        active: null,
        side: null,
        left: null,
        right: null,
        isDummy: true,
      });
    }
    return result;
  };

  // const renderTooltip = (node) => {
  //   if (node.isDummy) return null;

  //   return (
  //     <div className="group-hover:block group-focus:block hidden z-10 fixed left-1/2 top-[10rem] bg-white text-black shadow-lg rounded sm:w-72 w-64 -translate-x-1/2 mt-1">
  //       <table className="table-auto w-full text-left border-[2px] border-black">
  //         <thead>
  //           <tr className="border-[2px] border-black">
  //             <th className="px-2 py-1 border-[2px] border-black">Description</th>
  //             <th className="px-2 py-1 border-[2px] border-black">Left</th>
  //             <th className="px-2 py-1 border-[2px] border-black">Right</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr className="border-[2px] border-black">
  //             <td className="px-2 py-1 border-[2px] border-black">Business Volume </td>
  //             <td className="px-2 py-1 border-[2px] border-black">${node.total_package_amount_left || "0.00"}</td>
  //             <td className="px-2 py-1 border-[2px] border-black">${node.total_package_amount_right || "0.00"}</td>
  //           </tr>
  //           <tr className="border-[2px] border-black">
  //             <td className="px-2 py-1 border-[2px] border-black">This Month </td>
  //             <td className="px-2 py-1 border-[2px] border-black">
  //             ${node.total_this_month_package_amount_left || "0.00"}
  //             </td>
  //             <td className="px-2 py-1 border-[2px] border-black">
  //             ${node.total_this_month_package_amount_right || "0.00"}
  //              </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // };

  const renderNode = (node, depth = 1) => {
    if (!node) return null;

    const leftChildren = addDummyNodes(node.left ? [node.left] : [], 2);
    const rightChildren = addDummyNodes(node.right ? [node.right] : [], 2);

    let svgColor;
    if (node.isDummy) {
      svgColor = "black"; // Null user
    } else if (node.active === "0") {
      svgColor = "#de2134"; // Inactive billing status 
    } else {
      svgColor = "#2317cf"; // Active billing status 
    }

    return (
        <li key={node.id} className="inline-block  md:px-1 py-1 md:py-2 transition-all duration-500 ease-custom-bezier text-center relative before:absolute before:top-0 before:right-[49.5%] before:border-t before:border-gray-300 before:w-[60%] before:h-[5px] after:absolute after:top-0 after:right-[49.5%] after:border-t after:border-gray-300 after:w-[60%] after:h-[5px] after:left-1/2 after:border-l only:before:hidden only:after:hidden only:pt-0" >
        <a href="#" className={`group inline-grid md:size-32 size-28 p-1.5 rounded-lg transition-all duration-500 ease-custom-bezier ${node.isDummy ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => handleNodeClick(node)}>
          {/* {renderTooltip(node)} */}
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            className="size-16 mx-auto mt-2 mb-1 bg-blue-500 rounded-full p-1 shadow-shadow-bg"
            style={{ backgroundColor: svgColor }}
          >
            <path
              d="M256,508C117.04,508,4,394.96,4,256S117.04,4,256,4s252,113.04,252,252S394.96,508,256,508z"
              fill="#FFFFFF"
            />
            <path
              d="M256,8c136.752,0,248,111.248,248,248S392.752,504,256,504S8,392.752,8,256S119.248,8,256,8 M256,0 C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0L256,0z"
              fill="#D6D6D6"
            />
            <ellipse cx="256" cy="175.648" rx="61.712" ry="60.48" fill={svgColor} />
            <path
              d="M362.592,360.624c0-57.696-47.728-104.464-106.592-104.464s-106.592,46.768-106.592,104.464H362.592z"
              fill={svgColor}
            />
          </svg>
          <span className="text-nowrap font-semibold text-lg">
            {generateNodeName(node)}
          </span>
        </a>

        {(leftChildren.length > 0 || rightChildren.length > 0) && depth < 3 &&  (
         <ul className="pt-2.5 relative duration-500 before:absolute before:top-0 before:left-1/2 before:border-l before:border-gray-300 before:w-0 before:h-[10px]">        
           <li className="inline-block px-0.5 md:px-1 py-1 md:pb-2 transition-all duration-500 ease-custom-bezier text-center relative before:absolute before:top-0 before:border-t before:border-gray-300 before:w-[60%] before:h-[5px] after:absolute after:top-0 after:right-[49.5%] after:border-t after:border-gray-300 after:w-[60%] after:h-[5px] after:left-1/2 after:border-l first:before:border-hidden first:before:border-0  last:after:border-hidden last:after:border-0  first:after:rounded-tl-md " >
           <ul className="pt-2.5 relative duration-500 before:absolute before:top-0 before:left-1/2 before:border-l before:border-gray-300 before:w-0 before:h-[10px]">
              {leftChildren.length > 0 && renderNode(leftChildren[0], depth + 1)}
              </ul>
            </li>
            <li className="inline-block px-0.5 md:px-1 py-1 md:pb-2 transition-all duration-500 ease-custom-bezier text-cnter relative before:absolute before:top-0 before:right-[49.5%] before:border-t before:border-gray-300 before:w-[60%] before:h-[5px] after:absolute after:top-0 after:right-[49.5%] after:border-t after:border-gray-300 after:w-[60%] after:h-[5px] after:left-1/2 after:border-l first:before:border-hidden first:before:border-0 last:after:border-hidden last:after:border-0  first:after:rounded-tl-md last:before:border-r last:before:rounded-tr-md ">
            <ul className="pt-2.5 relative duration-500 before:absolute before:top-0 before:left-1/2 before:border-l before:border-gray-300 before:w-0 before:h-[10px]">
            {rightChildren.length > 0 && renderNode(rightChildren[0], depth + 1)}
            </ul>
             
            </li>
          </ul>
        )}
      </li> 
    );
  };

  return (
    <div className="w-full">
    <h1 className="sm:text-4xl text-3xl font-bold absolute top-3 sm:left-5 sm:translate-x-0 left-1/2 -translate-x-1/2 mt-2 gradient-text2 text-nowrap">Binary Tree</h1>
    <div className="tree text-center sm:mt-[100px] mt-[130px] mb-10 sm:mx-auto w-[620px]">
      <ul className="pt-2.5 relative duration-500 ">
        {selectedNode ? renderNode(selectedNode) : <p>Loading...</p> }
      </ul>
    </div>
  </div>
  );
};
 
export default function TreeStructure() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TreeStructurePage />
    </Suspense>
  );
}
