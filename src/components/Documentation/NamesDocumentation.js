import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const NamesDocumentation = () => {
  const names = {
    firstName: "firstName",
    secondName: "secondName",
  };

  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Names Verification Documentation</h2>
      <p>Here is the documentation for the Names Verification Implementation</p>
      <p>{data?.Fstep}</p>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>firstName</p>
        <p className="validation_details">
          it is a one of a name that you want to verify
        </p>

        <hr />
        <p>secondName</p>
        <p className="validation_details">
          it is a another name that you want to verify
        </p>
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>firstName*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">
          It should be given in capital or small
        </p>
        <p className="validation_details">It should provided in alphabet</p>
        <p className="validation_details">
          it should be provided in with the key value of "firstName" in the
          request body
        </p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2 align-items-center">
            <input value={"SAIRAM"} className="me-2" size="10" />
            <input value={"RAMU"} className="me-2" size="10" /> &nbsp; or &nbsp;{" "}
            <input value={"sairam"} className="me-2" size="10" />
            <input value={"ramu"} className="me-2" size="10" />
            <p className="me-2">Send two names either in capital or small</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"SAIRAM"} className="me-2" size="10" />
            &nbsp; or &nbsp;
            <input value={"ramu"} className="me-2" size="10" />
            <p className="me-2">
              you should not send only one name in capital or small
            </p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
        <hr />
        <p>secondName*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">
          It should be given in capital or small
        </p>
        <p className="validation_details">It should provided in alphabet</p>
        <p className="validation_details">
          it should be provided in with the key value of "secondName" in the
          request body
        </p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2 align-items-center">
            <input value={"SAIRAM"} className="me-2" size="10" />
            <input value={"RAMU"} className="me-2" size="10" /> &nbsp; or &nbsp;{" "}
            <input value={"sairam"} className="me-2" size="10" />
            <input value={"ramu"} className="me-2" size="10" />
            <p className="me-2">Send two names either in capital or small</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"SAIRAM"} className="me-2" size="10" />
            &nbsp; or &nbsp;
            <input value={"ramu"} className="me-2" size="10" />
            <p className="me-2">
              you should not send only one name in capital or small
            </p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>
          You should send firstName and secondName in the body of the request
        </p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(names, null, 2)} </pre>
        </p>
        <p>
          You should send the firstName and secondName in the Place of Value of
          firstName and secondName as shown above
        </p>
        <p>{data?.headers}</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(data?.clientHeader, null, 2)} </pre>
        </p>
        <p>
        {data?.client}
        </p>
        <p>{data?.keys}</p>
      </div>
    </div>
  );
};

export default NamesDocumentation;
