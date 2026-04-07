import React from "react";

export default function FileUpload({ field }) {
  const {
    title,
    subTitle,
    required,
    inputTag,
    fieldName,
  } = field;

  return (
    <div className="nrm_field_main">
      <div className="field_head">
        {/* LEFT SIDE */}
        <div className="field_info_head">
          <div className="field_body">
            {/* KEY */}
            <span className="field_title">
              {title || fieldName || "file"}
            </span>

            {/* TYPE BADGE → file */}
            <span className="type_badge file">file</span>

            {/* REQUIRED */}
            {required && (
              <span className="required_fld">required</span>
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="field_subT">
            {subTitle ||
              "Upload image file (JPEG, PNG, WEBP). Max size: 5MB."}
          </p>
        </div>

        {/* RIGHT SIDE (STATIC INPUT) */}
        <div className="field_inpt_head">
          {/* {inputTag && (
            <input
              type="file"
              name={fieldName || "file"}
              className="inputEle imageInput"
              disabled   // ✅ makes it documentation only
            />
          )} */}
        </div>
      </div>
    </div>
  );
}