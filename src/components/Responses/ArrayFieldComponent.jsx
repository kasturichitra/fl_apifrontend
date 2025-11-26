import React from "react";

export default function ArrayFieldComponent({ obj }) {
  const { required, subType, subTitle, title, type, types } = obj;
  return (
    <div className="px-3 py-3 not-last:border-b border-gray-200/20">
      <div className="flex items-center gap-1.5 ">
        {title && <span className="text-sm font-semibold">{title}</span>}
        <span className="text-xs text-gray-200/50">{type}</span>

        {subType && <span className="text-xs text-gray-200/50">{subType}</span>}

        {required && <span className="text-red-400 text-xs">required</span>}
      </div>
      <p className="text-[13px] mt-0.5 text-gray-200/50">{subTitle}</p>
      {types?.length > 0 && (
        <div className="bg-gray-700 flex flex-col gap-2 rounded-lg shadow-xs   shadow-white ">
          {types.map((t) => (
            <button className="w-full text-left py-2 uppercase  px-3 bg-gray-900 rounded-lg"> {t} </button>
          ))}
        </div>
      )}
    </div>
  );
}
