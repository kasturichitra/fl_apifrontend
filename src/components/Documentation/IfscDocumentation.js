import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const IfscDocumentation = () => {
  const ifsc = {
    ifsc: "ifsc",
  };
  const ifscHeaders = {
    client_id: "client_id",
    secret_key: "secret_key",
    content_type: "Application/json",
  };
  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Ifsc code Verification Documentation</h2>
      <p>
        Here is the documentation for the Ifsc code Verification Implementation
      </p>
      <p>{data?.Fstep}</p>
      <div>
        <h3>{data?.Overview}</h3>
        <p>
          You can Know the Aadhaar Details of a person by using Aadhaar Number
          Api
        </p>
        <p>You should have the Aadhaar Number of a person</p>
        <p>
          For this you need to provide a Aadhaar number of the person to the api
        </p>
      </div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>Ifsc</p>
        <p className="validation_details">Indian Financial System Code</p>
        <p className="validation_details">
          It is a unique 11-character alphanumeric code used by the Reserve Bank
          of India (RBI) to identify individual bank branches that participate
          in the country’s payment and settlement systems{" "}
        </p>
        <p className="validation_details">
          Ifsc code is with a length of 11 digits containing Alphanumeric
          characters
        </p>
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>Ifsc Code*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">
          It should be provided in capital only
        </p>
        <p className="validation_details">It should be 11 digit long</p>
        <p className="validation_details">{data?.alphaN}</p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2">
            <input value={"SBIN654327A"} className="me-2" />
            <p className="me-2">length should be equal to 11</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"SBIN654327AH"} className="me-2" />
            &nbsp; or &nbsp;
            <input value={"SBIN654327"} className="me-2" />
            <p className="me-2">
              length should not be greater than 11 and less or 11
            </p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>You should send name and ifsc in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(ifsc, null, 2)} </pre>
        </p>
        <p>
          You should send the ifsc and name in the Place of Value ifsc and name
          as shown above
        </p>
        <p>{data?.headers}</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(ifscHeaders, null, 2)} </pre>
        </p>
        <p>
        {data?.client}

        </p>
        <p>{data?.keys}</p>
      </div>
    </div>
  );
};

export default IfscDocumentation;
