"";

import React from "react";
import { useState } from "react";
import NormalField from "./NormalField";
import { getBodyParComponent } from "./Bodypar";

export default function ArrTypeBdyPrms({ field }) {
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
    <div className="border-t   border-gray-200/20">
      <NormalField field={field} />
      {noOfFields.map((id) => {
        return (
          <GenerateFields
            key={id}
            id={id}
            objectFields={objectDetails}
            HandleDelete={HandleDelete}
          />
        );
      })}
      <div className="pb-3 px-3">
        <button
          className="flex px-2 rounded-lg py-1   w-full border border-gray-200/20   cursor-pointer justify-between items-center"
          onClick={HandleAddObject}
        >
          <span className="uppercase text-xs  font-medium">ADD</span>
          <span className="pr-1.5 font-bold">+</span>
        </button>
      </div>
    </div>
  );
}

function GenerateFields({ objectFields, id, HandleDelete }) {
  const [openFields, setOpenFields] = useState(true);

  return (
    <div className="border rounded-xl bg-gray-800 mb-3 px-3 mx-3  border-gray-200/20">
      <p
        className={`${
          openFields ? " border-gray-200/20" : ""
        }  py-1   px-3 flex justify-between items-center`}
      >
        <span className="text-sm font-medium"></span>{" "}
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

      <div
        className={`${openFields ? "h-fit" : "h-0 overflow-hidden "} space-y-3`}
      >
        {objectFields.map((f) => {
          return getComponent(f);
        })}
      </div>
    </div>
  );
}

function getComponent(field) {
  console.log(field);
  let Component = null;
  let type = field?.type;
  switch (type) {
    case "string":
      Component = Stringkind;
      break;
    case "arraykind":
      Component = Arraykind;
      break;
    default:
      Component = null;
  }

  return Component ? <Component field={field} /> : null;
}

function Arraykind({ field }) {
  const [openField, setOpenField] = useState(false);
  return (
    <div className="bg-gray-700 border not-first:border-t-0  border-gray-200/20  rounded-lg ">
      <button
        className="px-3 items-center  cursor-pointer border-b border-gray-200/20 py-1.5 flex justify-between w-full"
        onClick={() => setOpenField((prev) => !prev)}
      >
        <span className="text-sm font-medium uppercase">{field?.title}</span>
        {/* <img src={ICONS?. }alt=""/> */}
        <span>{">"}</span>
      </button>
      <div
        className={`${openField ? " h-fit py-2 " : " h-0 overflow-hidden  "}`}
      >
        <p className="px-3 py-2  text-sm">{field?.subTitle}</p>
        <div className="m-2 px-3  py-2 rounded-lg bg-gray-800">
          {field?.fields.map((f) => {
            return getBodyParComponent(f);
          })}
        </div>
      </div>
    </div>
  );
}

function Stringkind() {
  const [openField, setOpenField] = useState(false);
  return (
    <div className="bg-gray-700 border not-first:border-t-0 overflow-hidden border-gray-200/20  rounded-lg ">
      <button
        className="px-3 items-center  cursor-pointer border-b border-gray-200/20 py-1.5 flex justify-between w-full"
        onClick={() => setOpenField((prev) => !prev)}
      >
        <span className="text-sm font-medium">STRING</span>
        {/* <img src={ICONS?. }alt=""/> */}
        <span>{">"}</span>
      </button>
      <div className={`${openField ? "p-3 h-fit " : " h-0 overflow-hidden  "}`}>
        <div className="bg-gray-800 p-3 rounded-lg">
          <input
            type="text"
            className="w-full p-1 rounded border  border-gray-200/20"
          />
        </div>
      </div>
    </div>
  );
}
