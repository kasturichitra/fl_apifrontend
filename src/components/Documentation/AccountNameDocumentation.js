import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import "./documentation.css";
import data from "../../json/Data";

const AccountNameDocumentation = () => {
  const account = {
    account_no: "account_no",
    ifsc: "ifsc",
    name: "panHolderName",
  };

  return (
    <div className="text-dark card p-4">
      <h2 className="text-center">Account Name Verify Documentation</h2>
      <p>Here is the documentation for the Account Name Verify Implementation</p>
      <p>{data?.Fstep}</p>
      <div>
      <h3>{data?.Overview}</h3>
      <p>You can Know the Name of a person is matching with Beneficiery name of person's bank account using the Account Name verify API</p>
      <p>You should have the account Number, ifsc and name of a person with regarding to the same bank</p>
      <p>For this you need to provide a account Number, ifsc and name of the same person to verify</p>
      </div>
      <div>
        <h2>{data?.FieldDetails}</h2>
        <p>Account Number</p>
        <p className="validation_details">
        An account number is a unique set of digits used to identify a bank account
        </p>
        <p className="validation_details" >
          Account Number is unique for Each person in india
        </p>
        <p className="validation_details">
          Account Number can vary with a length of digits depending up on the bank
        </p>
        <hr/>
        <p>Ifsc Code</p>
        <p className="validation_details">Indian Financial System Code</p>
        <p className="validation_details">
        It is a unique 11-character alphanumeric code used by the Reserve Bank of India (RBI) to identify individual bank branches that participate in the country’s payment and settlement systems        </p>
        <p className="validation_details">
        Ifsc code is with a length of 11 digits containing Alphanumeric
          characters
        </p>
        <hr/>
        <p>name</p>
        <p className="validation_details">It is normal name of a person which you want to verify</p> 
      </div>
      <div className="fieldValidation">
        <h2>{data?.valid}</h2>
        <p>Account Number*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">{data?.numeric}</p>
        <hr/>
        <p>Ifsc Code*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">{data?.capital}</p>
        <p className="validation_details">It should be 11 digit long</p>
        <p className="validation_details">It should be alphanumeric</p>
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
        <hr/>
        <p>name*</p>
        <p className="validation_details">{data?.mandatory}</p>
        <p className="validation_details">{data?.capital}</p>
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
        <p>You should send Account Number and Ifsc and name in the body of the request</p>
        <p className="text-light text-bg-dark p-2 rule">
          <pre>{JSON.stringify(account, null, 2)} </pre>
        </p>
        <p>
        You should send the Account Number and ifsc code and name in the Place of Value Account Number and ifsc name as
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

export default AccountNameDocumentation;




