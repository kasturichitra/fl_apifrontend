import NormalField from "./NormalField";
import ObjectbodyPar from "./ObjectbodyPar";
import AddKeyValues from "./AddKeyValues";
import ArrOfObjBdyPar from "./ArrOfObjBdyPar";
import BodyAccordian from "./BodyParAccordian";
import ArrOfStrings from "./ArrOfStrings";
import ArrTypeBdyPrms from "./ArrTypeBdyPrms";
import ImageField from "./ImageField";

export function getBodyParComponent(
  obj,
  handleChange,
  setAllRequiredFields,
  faceMatchState
) {
  let resType = "bodyParameters";
  let Component = null;

  const type = obj.type;

  switch (type) {
    case "string":
    case "integer":
    case "number":
      Component = NormalField;
      break;

    case "image":
      Component = ImageField;
      break;

    case "object":
      Component = ObjectbodyPar;
      break;
    case "accordian":
      Component = BodyAccordian;
      break;

    case "array of objects":
      Component = ArrOfObjBdyPar;
      break;
    case "generate_key_value":
      Component = AddKeyValues;
      break;
    case "array of strings":
      Component = ArrOfStrings;
      break;
    case "array":
      Component = ArrTypeBdyPrms;
      break;
    default:
      Component = null;
  }

  return Component ? (
    <Component
      field={obj}
      handleChange={handleChange}
      faceMatchState={faceMatchState}
      setAllRequiredFields={setAllRequiredFields}
      resType={resType}
    />
  ) : (
    ""
  );
}

export default function Bodypar({
  field,
  handleChange,
  setAllRequiredFields,
  faceMatchState,
}) {
  return (
    <>
      {getBodyParComponent(
        field,
        handleChange,
        setAllRequiredFields,
        faceMatchState
      )}
    </>
  );
}
