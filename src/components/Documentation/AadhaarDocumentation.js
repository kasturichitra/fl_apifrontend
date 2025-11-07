import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const AadhaarDocumentation = () => {
  const aadharNumber = {
    aadharNumber: "aadharNumber",
  };

  const otp = {
    otp: "otp",
    client_id: "client_id",
    aadharNumber: "aadharNumber"
  };

  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Aadhaar Number Documentation</h2>
      <p>Here is the documentation for the Aadhaar Number field Implementation</p>
      <p>{data?.Tstep}</p>
      <div>
      <h3>{data?.Overview}</h3>
      <p>You can Know the Aadhaar Details of a person by using Aadhaar Number Api</p>
      <p>You should have the Aadhaar Number of a person</p>
      <p>For this you need to provide a Aadhaar number of the person to the api</p>
      </div>
      <h3>Step-1</h3>
      <p>You should send Aadhaar Number First</p>
      <p>Otp will send to the mobile Number which was linked with that Aadhaar Number</p>
      <p>And also you will get a client_id from us where you have to store the otp and client_id</p>
      <p>you should send that stored otp and client_id in the second step</p>
      <div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>Aadhaar Number</p>
        <p className="validation_details">UIDAI was created to issue Unique Identification numbers (UID), named as Aadhaar</p>
        <p className="validation_details">
          Aadhaar Number is with a length of 12 digits containing Alphanumeric
          characters
        </p>
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>Aadhaar Number*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">{data?.capital}</p> 
        <p className="validation_details">It should be 12 digit long</p>
        <p className="validation_details">{data?.numeric}</p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2">
            <input value={"785496654789"} className="me-2" />
            <p className="me-2">length should be equal to 12</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"7896541547896"} className="me-2" />
            &nbsp; or &nbsp;
            <input value={"78965547896"} className="me-2" />
            <p className="me-2">
              length should not be greater than 12 and less or 12{" "}
            </p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>You should send Aadhaar in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(aadharNumber, null, 2)} </pre>
        </p>
        <p>
          You should send the Aadhaar Number in the Place of Value Aadhaar Number as
          shown above
        </p>
        <p>{data?.headers}</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(data?.clientHeader, null, 2)} </pre>
        </p>
        <p>
        {data?.client}
        </p>
        <p>
        {data?.keys}
        </p>
      </div>
      </div>
      <h3>Step-2</h3>
      <p>The Otp and client_id that was stored in the first step should be sent for the details</p>
      <p>The client_id that was stored in first should be sent in the body of the request in second step</p>
      <div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>Otp</p>
        <p className="validation_details">One Time Password.</p>
        <p className="validation_details">
        It will be sent to your mobile Number that was linked with Aadhaar Number.
        </p>
        <p className="validation_details">
          Otp is with a length of 6 digits containing Numeric
          characters.
        </p>
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>otp*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">It should be 6 digit long.</p>
        <p className="validation_details">{data?.numeric}</p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2">
            <input value={"785432"} className="me-2" />
            <p className="me-2">Length should be equal to 6.</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"7896521"} className="me-2" />
            &nbsp; or &nbsp;
            <input value={"78921"} className="me-2" />
            <p className="me-2">
              Length should not be greater than 6 and less or 6.
            </p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>You should send Aadhaar in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(otp, null, 2)} </pre>
        </p>
        <p>
          You should send the Aadhaar Number otp and client_id in the Place of Value of Aadhaar Number otp and client_id as
          shown above
        </p>
        <p>{data?.headers}</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(data?.clientHeader, null, 2)} </pre>
        </p>
        <p>
        {data?.client}
        </p>
        <p>
          {data?.keys}
        </p>
      </div>
      </div>

    </div>
  );
};

export default AadhaarDocumentation;


