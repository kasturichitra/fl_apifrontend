"";

import React, { useState } from "react";
import NormalField from "./NormalField";
import { getBodyParComponent } from "./Bodypar";

export default function ArrOfStrings({ field }) {
  //   console.log(field);

  const [noOfFields, setNoOfFields] = useState([]);

  const { objectDetails } = field;

  const HandleAddObject = () => {
    const randomID = crypto.randomUUID();
    setNoOfFields((prev) => [...prev, randomID]);
  };

  const HandleDelete = (id) => {
    setNoOfFields((prev) => {
      return prev.filter((idx) => idx !== id);
    });
  };

  return (
    <div className=" -mx-3 px-3  border-gray-200/20">
      <NormalField field={field} />
      {noOfFields.map((id) => {
        return (
          <GenerateFields
            key={id}
            id={id}
            objectFields={objectDetails?.fields}
            HandleDelete={HandleDelete}
          />
        );
      })}
      <div className="pb-3 px-3">
        <button
          className="flex px-2 rounded-lg py-1   w-full border border-gray-200/20   cursor-pointer justify-between items-center"
          onClick={HandleAddObject}
        >
          <span className="uppercase text-xs  font-medium">ADD STRING</span>
          <span className="pr-1.5 font-bold">+</span>
        </button>
      </div>
    </div>
  );
}

function GenerateFields({ objectFields, id, HandleDelete }) {
  const [openFields, setOpenFields] = useState(true);

  const field = objectFields[0];
  console.log(field);

  return (
    <div className="border rounded bg-gray-800 mb-3 mx-3 border-gray-200/20">
      <p
        className={`${
          openFields ? "border-b border-gray-200/20" : ""
        }  py-1  px-3 flex justify-between items-center`}
      >
        <span className="text-sm font-medium">STRING</span>{" "}
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

      <div className={`${openFields ? "h-fit" : "h-0 overflow-hidden"}`}>
        <div className="py-3 px-3 w-full">
          <input
            type="text"
            className="border py-0.5 px-2 rounded border-gray-300 w-full"
            placeholder={field?.example}
          />
        </div>
      </div>
    </div>
  );
}
