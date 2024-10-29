"use client";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Table from "@/components/Table";
import Image from "next/image";
import { fetchPurchaseInvoice } from "@/app/actions/fetchPurchaseInvoice";
import { useAuth } from "@/hook/useAuth";

export default function InvoicePage() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isRowPrinting, setIsRowPrinting] = useState(false); 
  const invoiceContentRef = useRef(null);
  const selectedRowRef = useRef(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchPurchaseInvoice();
        setData(data);
      } catch (err) {
        throw new Error(err);
      }
    }
    getData();
  }, []);

  const totalAmount = data?.reduce((total, item) => total + parseFloat(item.amount), 0) || 0;

  const handlePrintAll = useReactToPrint({
    content: () => invoiceContentRef.current, 
    documentTitle: "invoice",
  });

  const handlePrintRow = useReactToPrint({
    content: () => selectedRowRef.current,
    documentTitle: "invoice-row",
    onAfterPrint: () => setIsRowPrinting(false), 
  });

  const handleRowPrint = (rowData) => {
    setSelectedRowData(rowData);
    setIsRowPrinting(true); 
    setTimeout(() => handlePrintRow(), 0); 
  };

  return (
    <div className="bg-glass-color glassBlur rounded-2xl my-5 pb-5">
      <div ref={invoiceContentRef} className="print-black">
        <div className="flex justify-between sm:gap-5 gap-2 items-center p-5">
          <Image
            src="/DFM Logo Dark Mode.png"
            alt="Logo"
            height={500}
            width={800}
            priority
            className="md:h-16 object-contain md:w-48 sm:h-12 sm:w-40 h-10 w-32 "
          />
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-semibold text-blue-500">INVOICE</h1>
        </div>
        <div className="pl-5 md:pl-8 py-5 pr-20">
          <div className="pdf-content">
            <p className="sm:text-2xl text-xl font-semibold mb-0.5">Invoice To</p>
            <h2 className="sm:text-5xl text-4xl font-bold mb-px">{user?.name || "Full Name"}</h2>
          </div>
        </div>

        <Table
          title="Invoices"
          className="bg-blue-500 px-5 py-3 rounded-ss-2xl rounded-se-2xl"
        >
          <div className="grid grid-cols-4 p-3 border-b border-b-gray-500 lg:w-full w-[1000px] relative print:border-b print:border-b-black">
            <p className="text-lg font-semibold">Serial</p>
            <p className="pl-4 text-lg font-semibold">Amount</p>
            <p className="pl-7 text-lg font-semibold">Package Name</p>
            <p className="pl-10 text-lg font-semibold">Duration</p>
            <p className="hide absolute top-3 right-7 text-lg font-semibold">Action</p>
          </div>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((deta, index) => (
              <div
                key={deta.id}
                className="grid grid-cols-4 p-3 border-b border-b-gray-500 lg:w-full w-[1000px] relative print-border"
              >
                <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
                <p className="pl-5">${deta.amount}</p>
                <p className="pl-8">{deta.package_name}</p>
                <p className="pl-12">{deta.duration}</p>
                <button className="hide absolute top-3 right-10" onClick={() => handleRowPrint(deta)}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M11 14.59V3a1 1 0 012 0v11.59l3.3-3.3a1 1 0 011.4 1.42l-5 5a1 1 0 01-1.4 0l-5-5a1 1 0 011.4-1.42l3.3 3.3zM3 17a1 1 0 012 0v3h14v-3a1 1 0 012 0v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3z" />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className="text-center font-medium text-lg mt-2">
              No data available
            </p>
          )}
        </Table>
        <div className="flex items-center justify-center sm:gap-5 gap-3">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white sm:text-lg font-bold sm:py-2.5 sm:px-5 px-3 py-2 rounded hide"
            onClick={handlePrintAll}
          >
            Download
          </button>
          <div className="sm:px-5 sm:py-2.5 px-3 py-2 sm:text-lg font-bold bg-blue-500 hover:bg-blue-600 rounded-md">
            Total: {totalAmount}
          </div>
        </div>
      </div>

      {isRowPrinting && selectedRowData && (
        <div ref={selectedRowRef} className="print-black">
          <div className="flex justify-between items-center p-5">
            <Image
              src="/DFM Logo Dark Mode.png"
              alt="Logo"
              height={500}
              width={800}
              priority
              className="h-16 object-contain w-48"
            />
            <h1 className="md:text-5xl text-4xl font-semibold text-blue-500">INVOICE</h1>
          </div>
          <div className="flex justify-between items-center pl-8 py-5 pr-20">
            <div className="pdf-content">
              <p className="text-2xl font-semibold mb-0.5">INVOICE TO</p>
              <h2 className="text-5xl font-bold mb-px">{user?.name}</h2>
              <p className="text-xl font-semibold">Bangladesh</p>
            </div>
            <div className="pdf-content">
              <p className="text-lg font-medium">Invoice# : {selectedRowData?.id}</p>
              <p className="text-lg font-medium">
                {selectedRowData?.date}
              </p>
            </div>
          </div>
          <Table
            title="Invoice"
            className="bg-blue-500 px-5 py-3 rounded-ss-2xl rounded-se-2xl"
          >
            <div className="grid grid-cols-4 p-3 border-b border-b-gray-500 lg:w-full w-[1000px] print:border-b-black print:border-b">
              <p className="text-lg font-semibold">Serial</p>
              <p className="ml-5 text-lg font-semibold">Amount</p>
              <p className="text-center text-lg font-semibold">Package Name</p>
              <p className="text-end text-lg font-semibold">Duration</p>
            </div>
            <div className="grid grid-cols-4 p-3 border-b border-b-gray-500 lg:w-full w-[1000px] ">
              <p>{selectedRowData.id}</p>
              <p className="ml-5">{selectedRowData.amount}</p>
              <p className="text-center">{selectedRowData.package_name}</p>
              <p className="text-end">{selectedRowData.duration}</p>
            </div>
          </Table>
        </div>
      )}
    </div>
  );
}
