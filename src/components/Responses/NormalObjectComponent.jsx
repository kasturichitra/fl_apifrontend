import React from "react";
import { getComponent } from "./NonArrayOfObjects";
/**
 *
 *  This component returns the fields of the object with  having the
 *  header-part such as [object] and does not have a background-color
 *
 *
 */

export default function NormalObjectComponent({ obj, bodyType }) {
  const { title, type, subTitle, required, objectDetails, objectTitle } = obj;



  return (
    <div className="p-3 not-last:border-b border-gray-200/20">
      <div className="flex items-center gap-1.5 ">
        {title && <span className="text-sm font-semibold">{title}</span>}
        <span className="text-xs text-gray-200/50">{type}</span>
        {required && <span className="text-red-400 text-xs">required</span>}
      </div>
      <p className="text-[13px] mt-0.5 text-gray-200/50">{subTitle}</p>
      <div className="mt-3 rounded-lg border overflow-hidden border-gray-200/20">
        {objectDetails?.map((d, i) => {
          return (
            <React.Fragment key={i}>{getComponent(d, bodyType)}</React.Fragment>
          );
        })}
        {objectDetails?.length === 0 && objectTitle && (
          <button className="text-xs font-medium py-1 px-2 bg-gray-900 w-full flex justify-between items-center">
            {objectTitle} <span className="text-lg px-2">+</span>{" "}
          </button>
        )}
      </div>
    </div>
  );
}
