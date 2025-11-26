"";

import React, { useState } from "react";
import NormalField from "./NormalField";
import { getBodyParComponent } from "./Bodypar";

function ObjectbodyPar({ field }) {
  const { objectDetails } = field;
  const [openFields, setOpenFields] = useState(false);

  const HandleOpenFields = () => {
    setOpenFields((prev) => !prev);
  };

  return (
    <div className="obj_typ_field">
      <NormalField field={field} />
      <div className="obj_btn_head">
        <button className="obj_btn" onClick={HandleOpenFields}>
          <span className="obj_btn_tlt">{objectDetails?.title}</span>
          {openFields ? (
            <span className="obj_btn_opn_cls">x</span>
          ) : (
            <span className="obj_btn_opn_cls">+</span>
          )}
        </button>

        {openFields && (
          <div className={openFields ? "obj_open" : "obj_closed"}>
            {objectDetails?.fields?.map((f, idx) => {
              return (
                <React.Fragment key={idx}>
                  <div className="obj_field_head">{getBodyParComponent(f)}</div>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* <div className={openFields ? "obj_open" : "obj_closed"}>
            {objectDetails?.fields?.map((f, idx) => {
              return (
                <React.Fragment key={idx}>
                  <div className="obj_field_head">{getBodyParComponent(f)}</div>
                </React.Fragment>
              );
            })}
          </div> */}
      </div>
    </div>
  );
}

export default ObjectbodyPar;
