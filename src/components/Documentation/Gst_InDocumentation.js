import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const Gst_InDocumentation = () => {
  const Gst_in = {
    gstinNumber: "gst_inNumber",
  };
  const gst_InHeaders = {
    client_id: "client_id",
    secret_key: "secret_key",
    content_type: "Application/json",
  };

  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Gst_in Number Documentation</h2>
      <p>
        Here is the documentation for the Gst_in Number field Implementation
      </p>
      <p>{data?.Fstep}</p>
      <div>
        <h3>{data?.Overview}</h3>
        <p>
          You can Know the gst Details of a place by using gst_in Number Api
        </p>
        <p>You should have the gst_in Number of a place</p>
        <p>
          For this you need to provide a gst_in number of the place to the api
        </p>
      </div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>Goods and Services Tax Identification Number</p>
        <p>
          The GST_IN (Goods and Services Tax Identification Number) is a unique
          identification number assigned to businesses registered under GST.
        </p>
        <p>
          Gst_in Number is with a length 0f 15 digits containing Alphanumeric
          characters
        </p>
      </div>
      <div>
        <h2>{data?.valid}</h2>
        <p>Gst_in Number*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">
          It should contain 15 characters in length
        </p>
        <p className="validation_details">{data?.capital}</p>
        <p className="validation_details">{data?.alphaN}</p>
        <div className="rule p-2 text-bg-dark text-light align-items-center">
          <div className="d-flex p-2">
            <input
              type="text"
              value={"FSGKES2348HHE34"}
              className="me-2 w-25"
            />
            <p className="me-2">length should be exactly equal to 15</p>
            <p className="verified">
              <CheckCircleIcon />
            </p>
          </div>
          <div className="d-flex p-2">
            <input value={"FSGKES2348HM7FG5"} className="me-2 w-25" />
            &nbsp; or &nbsp;
            <input value={"SGKES2348HM7FG"} className="me-2 w-25" />
            <p className="me-2">
              length should not be greater than 15 or less than 15{" "}
            </p>
            <p className="Notverified">
              <CancelIcon />
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>You should send Gst_in in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(Gst_in, null, 2)}</pre>
        </p>
        <p>
          You should send the Gst_in Number in the Place of Value Gst_in Number
          as shown above
        </p>
        <p>{data?.headers}</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(gst_InHeaders, null, 2)}</pre>
        </p>
        <p>
        {data?.client}
        </p>
        <p>{data?.keys}</p>
      </div>
    </div>
  );
};

export default Gst_InDocumentation;
