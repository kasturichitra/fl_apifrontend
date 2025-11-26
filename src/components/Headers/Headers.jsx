import React from "react";
import NormalField from "../BodyParams/NormalField";

function Headers({
  headersObj,
  setFaceMatchState,
  faceMatchState,
  setAllRequiredFields,
}) {
  const handleChange = (e, type) => {
    let { name, value } = e.target;
    if (!value) {
      setAllRequiredFields((prev) => ({ ...prev, [name]: true }));
    } else {
      setAllRequiredFields((prev) => ({ ...prev, [name]: false }));
    }
    setFaceMatchState((prev) => ({
      ...prev,
      headers: { ...prev?.headers, [name]: value },
    }));
  };


  
  return (
    <div className="bodypar_main">
      <div className="main_bp">
        {headersObj.map((f, idx) => (
          <NormalField
            field={f}
            key={idx}
            resType={"headers"}
            handleChange={handleChange}
            faceMatchState={faceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        ))}
      </div>
    </div>
  );
}

export default Headers;
