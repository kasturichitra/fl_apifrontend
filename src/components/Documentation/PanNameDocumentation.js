import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const PanNameDocumentation = () => {
  const pan = {
    name: "Name",
    panNumber: "PanNumber",
  };

  const panHeaders = {
    client_id: "client_id",
    secret_key: "secret_key",
    content_type: "Application/json",
  };
  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Pan Name Verification Documentation</h2>
      <p>
        Here is the documentation for the Pan Name Verification Implementation
      </p>
      <p>{data?.Fstep}</p>
      <div>
        <h3>{data?.Overview}</h3>
        <p>
          You can verify the name of a person using the Pan Name Verification
          API whether the name of the person on pan card is same or not
        </p>
        <p>
          For this you need to provide a pan number and the name of the same
          person to verify
        </p>
      </div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>{data?.pan}</p>
        <p className="validation_details">{data?.pfull}</p>
        <p className="validation_details">
          {data?.pfirst}
        </p>
        <p className="validation_details">
        {data?.psecond}
        </p>
        <p className="validation_details">
          In this You can verify your pan Name with a name that you want
        </p>

        <p>Name</p>
        <p className="validation_details">
          It is normal name of a person which you want to verify
        </p>
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>{data?.pan}*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">
        {data?.capital}
        </p>
        <p className="validation_details">It should be 10 digit long</p>
        <p className="validation_details">{data?.alphaN}</p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2">
            <input value={"FSGKES2348"} className="me-2" />
            <p className="me-2">{data?.plength}</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"FSGKES2348H"} className="me-2" />
            &nbsp; or &nbsp;
            <input value={"FSGKES234"} className="me-2" />
            <p className="me-2">
              {data?.plengthCheck}
            </p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
        <hr />
        <p>Name*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">
        {data?.capital}
        </p>
        <p className="validation_details">It should be provided in alphabet</p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2">
            <input value={"SAI RAM"} className="me-2" />
            <p className="me-2"> name should be in upperCase</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"sai ram"} className="me-2" />
            <p className="me-2">name should not be in lowerCase</p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>You should send name and panNumber in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(pan, null, 2)} </pre>
        </p>
        <p>
          You should send the Pan Number and name in the Place of Value Pan
          Number and name as shown above
        </p>
        <p>{data?.headers}</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(panHeaders, null, 2)} </pre>
        </p>
        <p>
        {data?.client}

        </p>
        <p>{data?.keys}</p>
      </div>
    </div>
  );
};

export default PanNameDocumentation;
