import { color } from "../utils/constant";
import React from "react";
const HttpUrl = import.meta.env.VITE_HTTP_URL;

const MethodLink = ({ method, link, className, LinkClass }) => {
  const finalLink = link?.startsWith("http")
    ? link
    : `${HttpUrl}${link}`;

  return (
    <div className={className}>
      <span className={`${color(method)} text-xs px-2.5 py-0.5 rounded-2xl`}>
        {method?.toUpperCase()}
      </span>

      <p className={LinkClass}>{finalLink}</p>
    </div>
  );
};

export default MethodLink;
