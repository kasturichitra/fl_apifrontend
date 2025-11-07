import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const MobileDocumentation = () => {
  const mobile = {
    mobileNumber: "mobileNumber",
  };

  const otp = {
    submittedOtp: "otp",
    mobile: "mobileNumber",
  };

  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Mobile Number Documentation</h2>
      <p>Here is the documentation for the Mobile Number field Implementation</p>
      <p>{data?.Tstep}</p>

      <h3>Step-1</h3>
      <div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>Mobile Number</p>
        <p className="validation_details">Mobile Number will be unique for a each person</p>
        <p className="validation_details">
          Mobile Number is with a length of 10 digits containing Numeric
          characters
        </p>
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>Mobile Number*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">It should be 10 digit long</p>
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
        <p>You should send Mobile in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(mobile, null, 2)} </pre>
        </p>
        <p>
          You should send the Mobile Number in the Place of Value Mobile Number as
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
        <p className="validation_details">{data?.numeric}.</p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2">
            <input value={"7854"} className="me-2" />
            <p className="me-2">Length should be equal to 4.</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"78965"} className="me-2" />
            &nbsp; or &nbsp;
            <input value={"789"} className="me-2" />
            <p className="me-2">
              Length should not be greater than 4 and less or 4.
            </p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>You should send mobile Number and otp in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(otp, null, 2)} </pre>
        </p>
        <p>
          You should send the otp in the Place of Value otp as
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

export default MobileDocumentation;


