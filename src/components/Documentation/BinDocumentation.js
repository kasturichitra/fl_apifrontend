import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const BinDocumentation = () => {
  const pan = {
    bin: "binNumber",
  };
  const panHeaders = {
    client_id: "client_id",
    secret_key: "secret_key",
    content_type: "Application/json",
  };
  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Bin Number Documentation</h2>
      <p>Here is the documentation for the Bin Number field Implementation</p>
      <p>This is only one step Process</p>
      <div>
        <h3>Overview</h3>
        <p>You can know the credit card details of a person with this Bin Number API</p>
        <p>You should have first six digits of a credit card Number of a person for it</p>
        <p>You should provide that six digits to the api</p>
      </div>
      <div>
        <h2>Field Details</h2>
        <p>Bin Number</p>
        <p className="validation_details">Bank Identification Number</p>
        <p className="validation_details">
        Bank Identification Numbers, commonly referred to as BIN codes, are the initial sequence of four to six digits found on a credit card
        </p>
        <p className="validation_details">
          Bin Number is with a length of 6 digits containing Numeric
          characters
        </p>
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>Bin Number*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">It should provide first six digits of a credit card number</p> 
        <p className="validation_details">It should be 6 digit long</p>
        <p className="validation_details">{data?.numeric}</p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2">
            <input value={"785496"} className="me-2" />
            <p className="me-2">length should be equal to 6</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"7896541"} className="me-2" />
            &nbsp; or &nbsp;
            <input value={"78965"} className="me-2" />
            <p className="me-2">
              length should not be greater than 6 and less or 6
            </p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>You should send binNumber in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(pan, null, 2)} </pre>
        </p>
        <p>
          You should send the Bin Number in the Place of Value Bin Number as
          shown above
        </p>
        <p>{data?.headers}</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(panHeaders, null, 2)} </pre>
        </p>
        <p>
        {data?.client}
        </p>
        <p>
        {data?.keys}
        </p>
        <div>
            <h2>What should You expect</h2>
        </div>
      </div>
    </div>
  );
};

export default BinDocumentation;

