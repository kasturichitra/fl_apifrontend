"";

import React, { useState } from "react";
import NormalField from "./NormalField";
import AddKeyValues from "./AddKeyValues";
import ArrOfObjBdyPar from "./ArrOfObjBdyPar";

export default function BodyAccordian({ field }) {
  const { title, type, subType, subTitle, required } = field;

  return (
    <div>
      <div className="flex-1 border-t border-gray-200/20 p-3 ">
        <div className="flex items-center gap-1.5 ">
          {title && <span className="text-sm font-semibold">{title}</span>}

          {subType && (
            <span className="text-xs text-gray-200/50">{subType}</span>
          )}

          {required && <span className="text-red-400 text-xs">required</span>}
        </div>
        <p className="text-[13px] mt-0.5 text-gray-200/50">{subTitle}</p>
      </div>
      <div className="p-2 pt-0 mx-3 ">
        <Accordion obj={field} />
      </div>
    </div>
  );
}

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

const Accordion = ({ obj }) => {

  const contentOne = obj?.objectDetails[0]?.field;
  const contentTwo = obj?.objectDetails[1];

  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="not-last:border-b border-gray-200/20">
      <div className="mt-2 rounded-xl border overflow-hidden border-gray-200/20 bg-[#0E1524]">
        <AccordionItem
          id="object"
          title="OBJECT"
          isOpen={openItemId === "object"}
          onClick={handleToggle}
        >
          <div className="p-3">
            <div className=" border  overflow-hidden border-gray-200/20    rounded-md">
              <div className="">{<AddKeyValues field={contentOne} />}</div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          id="array1"
          title="ARRAY"
          isOpen={openItemId === "array1"}
          onClick={handleToggle}
        >
          {/* <div>
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
          </div> */}
          <div className="">
            <ArrOfObjBdyPar field={contentTwo} />
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

function ToggleOpen() {
  return;
  {
    <div className="border rounded bg-gray-800 mb-3 px-3 border-gray-200/20">
      <p
        className={`${
          openFields ? "border-b border-gray-200/20" : ""
        }  py-1 -mx-3  px-3 flex justify-between items-center`}
      >
        <span className="text-sm font-medium">OBJECT</span>{" "}
        <span className="flex gap-1.5 items-center">
          <span
            className="text-red-400 px-0.5 cursor-pointer text-sm hover:bg-gray-900"
            onClick={() => HandleDelete(id)}
          >
            D
          </span>
          {openFields ? (
            <span
              className="font-medium px-0.5 hover:bg-gray-900 cursor-pointer  "
              onClick={() => setOpenFields(false)}
            >
              -
            </span>
          ) : (
            <span
              className="font-medium px-0.5 hover:bg-gray-900 cursor-pointer "
              onClick={() => setOpenFields(true)}
            >
              +
            </span>
          )}
        </span>
      </p>

      {/* <div className={`${openFields ? "h-fit" : "h-0 overflow-hidden"}`}>
              {objectFields?.map((f, idx) => {
                return (
                  <React.Fragment key={idx}>
                    {getBodyParComponent(f, idx)}
                  </React.Fragment>
                );
              })}
            </div> */}
    </div>;
  }
}
