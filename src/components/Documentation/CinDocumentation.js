import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const CinDocumentation = () => {
  const Cin = {
              "CIN" : 
              "CinNumber"
            };

  const cinHeaders = {
    client_id: "client_id",
    secret_key: "secret_key",
    content_type: "Application/json",
  };
  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Cin Number Documentation</h2>
      <p>Here is the documentation for the Cin Number field Implementation</p>
      <p>{data?.Fstep}</p> 
      <div>
      <h3>{data?.Overview}</h3>
      <p>You can Know the corporation Details of a place by using Cin Number Api</p>
      <p>You should have the Cin Number of a place</p>
      <p>For this you need to provide a Cin number of the place to the api</p>
      </div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>Corporate Identification Number</p>
        <p>
          A Corporate Identification Number (CIN) is a unique identification
          number that is assigned by the Registrar of Companies (ROC) to the
          companies registered in India.
        </p>
        <p>
          Cin Number is with a length 0f 21 digits containing Alphanumeric
          characters
        </p>
      </div>
      <div>
        <h2>{data?.valid}</h2>
        <p>Cin Number*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">It should contain 21 characters in length</p>
        <p className="validation_details">{data?.capital}</p>
        <p className="validation_details">{data?.alphaN}</p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
        <div className="d-flex p-2">
          <input
            type="text"
            value={"FSGKES2348HHE34SBE983"}
            className="me-2 w-25"
          />
          <p className="me-2">length should be exactly equal to 21</p>
          <p className="verified">
            <CheckCircleIcon />
          </p>
        </div>
        <div className="d-flex p-2">
          <input value={"FSGKES2348HM7FG5EK34S8"} className="me-2 w-25" />
          &nbsp; or &nbsp;
          <input value={"SGKES2348HM7FG5EK34S"} className="me-2 w-25" />
          <p className="me-2">
            length should not be greater than 21 or less than 21{" "}
          </p>
          <p className="Notverified">
            <CancelIcon />
          </p>
        </div>
        </div>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>You should send cinNumber in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule"><pre>
            {JSON.stringify(Cin, null, 2)}{" "}
          </pre></p>
        <p>
          You should send the Cin Number in the Place of Value Cin Number as
          shown above
        </p>
        <p>{data?.headers}</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>
            {JSON.stringify(cinHeaders, null, 2)}{" "}
          </pre>
        </p>
        <p>
          {data?.client}
        </p>
        <p>
        {data?.keys}
        </p>
      </div>
    </div>
  );
};

export default CinDocumentation;
