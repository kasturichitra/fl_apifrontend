import React from "react";

export default function ObjectButton({ obj }) {
  const { objectTitle } = obj;
  return (
    <div className="m-5 rounded overflow-hidden border border-gray-200/20">
      <button className="text-xs font-medium py-1 px-2  w-full flex justify-between items-center">
        {objectTitle} <span className="text-lg px-2">+</span>{" "}
      </button>
    </div>
  );
}
