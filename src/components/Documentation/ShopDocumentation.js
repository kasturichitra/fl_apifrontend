import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const ShopDocumentation = () => {
  const shop = {
    registrationNumber: "registrationNumber",
    state: "state"
  };

  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Shop Establishment verify Documentation</h2>
      <p>Here is the documentation for the Shop Establishment verify Implementation</p>
      <p>{data?.Fstep}</p>
      <div>
      <h3>{data?.Overview}</h3>
      <p>You can Know the shop details by using Shop Establishment Api</p>
      <p>You should have the Registeration Number of a shop and state where the shop is located</p>
      <p>For this you need to provide a Registeration Number and state of the shop to the api</p>
      </div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>Registration Number</p>
        <p className="validation_details" >
        Shop and Establishment Registration Number is a registration number that shops and commercial establishments must mandatorily apply for under the respective state Act </p>
        <hr/>
        <p>State</p>
        <p className="validation_details">It is state name that where the shop is located</p>
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>Registration Number*</p>
        <p>State*</p>
        <p className="validation_details">These two are Mandatory Fields</p>
        <p className="validation_details">These should be Valid and genuine</p>
      </div>
      <div>
        <h2>{data?.ApiRules}</h2>
        <p>You should send registrationNumber and state in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(shop, null, 2)} </pre>
        </p>
        <p>
          You should send the registrationNumber and state in the Place of Value registrationNumber and state as
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
  );
};

export default ShopDocumentation;

