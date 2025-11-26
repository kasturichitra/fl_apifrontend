""

import React, { useState } from "react";

const AccordionItem = ({ id, title, isOpen, onClick, children }) => {
  return (
    <>
      <div
        className="not-last:border-b  text-sm border-gray-200/20 px-3 py-3 font-medium text-gray-200/50  cursor-pointer   "
        onClick={() => onClick(id)}
      >
        {title}
      </div>
      {isOpen && (
        <div className="text-gray-200 border-b border-gray-200/20   text-sm ">
          {children}
        </div>
      )}
    </>
  );
};

const ResAccordion = ({ obj }) => {
  const { title, required,subTitle } = obj;

  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="px-3 py-3 not-last:border-b border-gray-200/20">
      <div className="flex items-center gap-1.5 ">
        {title && <span className="text-sm font-semibold">{title}</span>}
        {/* <span className="text-xs text-gray-200/50">{type}</span> */}
{/* 
        {subType && <span className="text-xs text-gray-200/50">{subType}</span>} */}

        {required && <span className="text-red-400 text-xs">required</span>}
      </div>
      <p className="text-[13px] mt-0.5 text-gray-200/50">{subTitle}</p>
      <div className="mt-2 rounded-xl border overflow-hidden border-gray-200/20 bg-[#0E1524]">
        <AccordionItem
          id="object"
          title="OBJECT"
          isOpen={openItemId === "object"}
          onClick={handleToggle}
        >
          <div className="p-3">
            <div className=" border border-gray-200/20    rounded-md">
              <p className="text-sm mb-3 p-2 border-b border-gray-200/20">
                object
              </p>
              <div className="p-2">
                <div className="m-2">
                  <button className="bg-[#444] mx-auto block hover:bg-[#555] text-white text-sm px-4 py-2 rounded">
                    VIEW ADDITIONAL PROPERTIES +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          id="array1"
          title="ARRAY"
          isOpen={openItemId === "array1"}
          onClick={handleToggle}
        >
          <div>
            <p className="p-2  border-b text-gray-200/50 border-gray-200/20">
              array of objects
            </p>
            <div className="p-3">
              <div className="  border border-gray-200/20    rounded-md">
                <p className="text-sm mb-3 p-2 border-b border-gray-200/20">
                  object
                </p>
                <div className="p-2">
                  <div className="m-2">
                    <button className="bg-[#444] mx-auto block hover:bg-[#555] text-white text-sm px-4 py-2 rounded">
                      VIEW ADDITIONAL PROPERTIES +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          id="array2"
          title="ARRAY"
          isOpen={openItemId === "array2"}
          onClick={handleToggle}
        >
          <div className=" p-3 border border-[#555] rounded-md">
            Array 2 content goes here
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default ResAccordion;
