import React from "react";
import "../../styles/bodyParams.css";
import Bodypar from "./Bodypar";
import { Link } from "react-router-dom";

export default function BodyParams({
  bodyObj,
  faceMatchState,
  setFaceMatchState,
  setAllRequiredFields,
}) {
  const handleChange = (e, type) => {
    let { name, value } = e.target;
    console.log("NAME", name);
    console.log("value", value);
    if (type.toUpperCase() === "IMAGE") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result.split(",")[1];
          if (!value) {
            setAllRequiredFields((prev) => ({ ...prev, [name]: true }));
          } else {
            setAllRequiredFields((prev) => ({ ...prev, [name]: false }));
          }
          console.log("Base64 VALUE ===>", base64String);
          setFaceMatchState((prev) => ({
            ...prev,
            bodyParameters: { ...prev?.bodyParameters, [name]: base64String },
          }));
        };
        reader.onerror = () => {
          console.error("Error reading file.");
        };
        reader.readAsDataURL(file);
      }
    } else {
      // Handle regular text inputs
      if (!value) {
        setAllRequiredFields((prev) => ({ ...prev, [name]: true }));
      } else {
        setAllRequiredFields((prev) => ({ ...prev, [name]: false }));
      }
      setFaceMatchState((prev) => ({
        ...prev,
        bodyParameters: { ...prev?.bodyParameters, [name]: value },
      }));
    }
  };

  return (
    <div className="bodypar_main">
      <div className="main_bp">
        {bodyObj.map((f, idx) => {
          return (
            <React.Fragment key={idx}>
              <Bodypar
                field={f}
                faceMatchState={faceMatchState}
                handleChange={handleChange}
                setAllRequiredFields={setAllRequiredFields}
              />
            </React.Fragment>
          );
        })}
      </div>
      <p>
        To Know more about body params click here{" "}
        <Link to="/guides/body_params" className="link_style">
          BodyParams
        </Link>
      </p>
       <p>
        To Know more about body params Category_Id and Service_Id click here{" "}
        <Link to="/guides/category_and_service" className="link_style">
          Service And Category
        </Link>
      </p>
    </div>
  );
}
