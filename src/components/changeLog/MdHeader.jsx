import { images } from "../utils/constant";
import React from "react";

function MdHeader({ children }) {
  return (
    <div className="chg_lg_hvr_head">
      <span className="ancr_head">
        <img src={images?.anchor} alt=""  />
      </span>
      <h2 className="chg_lg_hvr_title">{children}</h2>
    </div>
  );
}

export default MdHeader;
