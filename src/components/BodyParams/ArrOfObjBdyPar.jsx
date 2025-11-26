import React, { useState } from "react";
import NormalField from "./NormalField";
import { getBodyParComponent } from "./Bodypar";
import { images } from "../../utils/constant";

export default function ArrOfObjBdyPar({ field }) {
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
    <div className="border-t  px-3  border-gray-200/20">
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
      <div className="arr_of_objs">
        <button
          className="flex px-2 rounded-lg py-1   w-full border border-gray-200/20   cursor-pointer justify-between items-center"
          onClick={HandleAddObject}
        >
          <span className="uppercase text-xs  font-medium">ADD OBJECT</span>
          <span className="pr-1.5 font-bold">+</span>
        </button>
      </div>
    </div>
  );
}

function GenerateFields({ objectFields, id, HandleDelete }) {
  const [openFields, setOpenFields] = useState(true);

  return (
    <div className="generated_obj">
      <p
        className={`${
          openFields ? "border-b border-gray-200/20" : ""
        }  py-1   px-3 flex justify-between items-center`}
      >
        <span className="text-sm font-medium">OBJECT</span>{" "}
        <span className="flex gap-1.5 items-center">
          <span
            className="text-red-400 px-0.5 cursor-pointer text-sm "
            onClick={() => HandleDelete(id)}
          >
            <img
              src={images.dustbin}
              alt=""
              className="w-5 h-5 rounded-full "
            />
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
        {objectFields?.map((f, idx) => {
          return (
            <React.Fragment key={idx}>
              {getBodyParComponent(f, idx)}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
