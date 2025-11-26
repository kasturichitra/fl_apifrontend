/**
 *
 * RETURNS A wrapped component with All the objects [could be object , array of object]
 *
 *
 */
import React from "react";
import ResAccordion from "./Accordian";
import ArrayFieldComponent from "./ArrayFieldComponent";
import GrayObjectComponent from "./GrayObjectComponent";
import NonObjectFields from "./NonObjectFields";
import NormalObjectComponent from "./NormalObjectComponent";
import ObjectButton from "./ObjectButton";

export function getComponent(obj, bodyType) {
  let Component = null;
  const type = obj?.type;
  switch (type) {
    case "string":
    case "integer":
    case "number":
    case "boolean":
    case "array of strings":
      Component = NonObjectFields;
      break;
    case "object":
      Component = NormalObjectComponent;
      break;

    case "array":
      Component = ArrayFieldComponent;
      break;
    case "array of objects":
      Component = GrayObjectComponent;
      break;
    case "accordian":
      Component = ResAccordion;
      break;
    case "plane":
      Component = ObjectButton;
      break;
    default:
      Component = null;
  }
  return Component ? (
    <Component obj={obj} bodyType={bodyType} />
  ) : (
    <div className="p-3"></div>
  );
}

export default function NonArrayOfObjects({ body, type }) {
  return (
    <>
      <div className="border overflow-hidden mt-2 rounded-lg border-gray-200/20">
        <p className="p-2 text-sm text-gray-400 border-b border-gray-100/20 ">
          object
        </p>

        {body?.fields.map((f, i) => (
          <React.Fragment key={i}>{getComponent(f, type)}</React.Fragment>
        ))}
      </div>
    </>
  );
}
