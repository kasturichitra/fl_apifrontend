import React, { useEffect, useRef, useState } from "react";
import { ICONS } from "../../utils/constant";
import SelectTag from "./SelectTag";

export default function NormalField({
  field,
  resType,
  handleChange,
  faceMatchState,
  setAllRequiredFields,
}) {
  const [isPassed, setIsPassed] = useState({
    isRequiredPassed: null,
    isTypePassed: null,
  });

  const toolTipElementRef = useRef(null);

  const {
    title,
    subTitle,
    type,
    subType,
    enums,
    required,
    selectTag,
    fieldName,
    inputTag,
    example,
    readOnly,
    optional
  } = field;

  // useEffect(() => {
  //   if (required) {
  //     setAllRequiredFields((prev) => ({ ...prev, [fieldName]: true }));
  //   }
  // }, []);

  const HandleBlurOut = (e) => {
    const { value } = e.target;
    if (!value || typeof value !== type) {
      return e.target.classList.add("input_touched");
    }
    e.target.classList.remove("input_touched");
    toolTipElementRef.current?.classList.remove("open_info");
  };

  const HandleFocus = (e) => {
    toolTipElementRef.current?.classList.add("open_info");
  };

  const HandleMouseOut = (e) => {
    toolTipElementRef.current?.classList.remove("open_info");
  };

  const HandleChange = (e) => {
    const { value } = e.target;
    if (!value) {
      setIsPassed((prev) => ({ isTypePassed: false, isRequiredPassed: false }));
    } else {
      setIsPassed((prev) => ({ isTypePassed: false, isRequiredPassed: true }));
    }

    if (typeof value !== "string") {
      setIsPassed((prev) => ({ ...prev, isTypePassed: false }));
    } else {
      setIsPassed((prev) => ({ ...prev, isTypePassed: true }));
    }
    e.target.classList.remove("input_touched");
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
            {optional && <span className="required_fld ">optional</span>}
          </div>
          <p className="field_subT">{subTitle}</p>
        </div>
        <div className="field_inpt_head" onMouseLeave={HandleMouseOut}>
          {inputTag && (
            <input
              type="text"
              title="Please fill out this field  "
              placeholder={example}
              className="inputEle"
              onBlur={HandleBlurOut}
              onChange={HandleChange}
              onFocus={HandleFocus}
              value={faceMatchState?.[resType]?.[fieldName] || ""}
              name={fieldName}
              readOnly={readOnly }
            />
          )}

          {selectTag && <SelectTag enums={enums} />}

          {/* DROPDOWN of Input Field */}
          <div
            onMouseLeave={HandleMouseOut}
            ref={toolTipElementRef}
            className="required_info"
          >
            <div className="px-2 py-2">
              <div className="flex items-center gap-2 ">
                {!isPassed?.isRequiredPassed ? (
                  <ICONS.CrossMark className="text-red-400 font-medium" />
                ) : (
                  <ICONS.TickMark className="text-green-400 font-medium" />
                )}
                <span>required</span>
              </div>
              <div className="flex items-center gap-2">
                {!isPassed?.isRequiredPassed ? (
                  <ICONS.QuestionMark />
                ) : (
                  <ICONS.TickMark className="text-green-400 font-medium" />
                )}
                <span>type: {type}</span>
              </div>
            </div>
            {example && (
              <div>
                <hr className="bg-gray-100/10 border-0  w-full  h-0.5" />
                <div className="px-2 py-2">
                  <p className="font-medium">Use example value</p>
                  <span className="text-gray-300 text-xs">{example}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enums */}
      {enums?.length > 0 && (
        <p className="enums_head">
          <span className="text-sm">Allowed:</span>
          {enums.map((e) => (
            <span key={e} className="enum_opt">
              {e}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
