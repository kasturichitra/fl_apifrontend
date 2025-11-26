import React from "react";

export default function MdxHeading({ title, subHeading }) {
  return (
    <div>
      <h1 className="text-3xl  font-medium mb-3">{title}</h1>
      <p className="text-lg ">{subHeading}</p>
    </div>
  );
}
