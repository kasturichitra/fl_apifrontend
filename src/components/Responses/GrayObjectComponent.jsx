import React from "react";
import { getComponent } from "./NonArrayOfObjects";

export default function GrayObjectComponent({ obj, bodyType }) {
  const { objectDetails, required, subTitle, title, type } = obj;

  return (
    <div className="p-3 not-last:border-b border-gray-200/20">
      <div className="flex items-center gap-1.5 ">
        {title && <span className="text-sm font-semibold">{title}</span>}
        <span className="text-xs text-gray-200/50">{type}</span>
        {required && <span className="text-red-400 text-xs">required</span>}
      </div>
      <p className="text-[13px] mt-0.5 text-gray-200/50">{subTitle}</p>

      <div
        className={`${
          bodyType === "array of objects" ? "bg-black" : ""
        } mt-3 rounded-lg border border-gray-200/20`}
      >
        <p className="p-2 text-sm text-gray-400 border-b border-gray-100/20 ">
          object
        </p>
        {objectDetails?.map((d, i) => {
          return (
            <React.Fragment key={i}>{getComponent(d, bodyType)}</React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

