import { useEffect, useRef } from "react";

function useClickOutside(handler) {
  let domNode = useRef();

  useEffect(() => {
    let outSideClickHandler = event => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("click", outSideClickHandler);

    return () => {
      document.removeEventListener("click", outSideClickHandler);
    };
  }, []);

  return domNode;
}

export default useClickOutside;
