import React, { useEffect, useRef, useState } from "react";
import { ICONS } from "../../utils/constant";
import SelectTag from "./SelectTag";

export default function ImageField({
  field,
  handleChange,
  setAllRequiredFields,
}) {
  const [isPassed, setIsPassed] = useState({
    isRequiredPassed: null,
    isTypePassed: null,
  });

  const [inputValue, setInputValue] = useState("");

  const toolTipElementRef = useRef(null);

  const {
    title,
    subTitle,
    type,
    subType,
    enums,
    required,
    selectTag,
    inputTag,
    example,
    fieldName,
  } = field;

  useEffect(() => {
    if (required) {
      setAllRequiredFields((prev) => ({ ...prev, [fieldName]: true }));
    }
  }, []);
  const HandleMouseOut = (e) => {
    toolTipElementRef.current?.classList.remove("open_info");
  };

  const handleFieldChange = (e) => {
    handleChange(e, type);
  };

  return (
    <div className="nrm_field_main">
      <div className="field_head">
        <div className="field_info_head">
          <div className="field_body">
            {title && <span className="field_title">{title}</span>}

            {type && <span className="field_type_and_subtype">{type}</span>}

            {subType && (
              <span className="field_type_and_subtype">{subType}</span>
            )}

            {required && <span className="required_fld ">required</span>}
          </div>
          <p className="field_subT">{subTitle}</p>
        </div>
        <div className="field_inpt_head" onMouseLeave={HandleMouseOut}>
          {inputTag && (
            <input
              type="file"
              id="img"
              name={fieldName}
              accept="image/png, image/jpeg"
              className="inputEle imageInput"
              onChange={handleFieldChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}
