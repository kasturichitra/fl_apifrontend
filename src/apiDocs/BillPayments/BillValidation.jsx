import React, { useState } from "react";
import BodyParams from "../../components/BodyParams/BodyParams.jsx";
import MethodLink from "../../components/MethodLink.jsx";
import ResponseComponent from "../../components/Responses/ResponsesComponent.jsx";
import Codes from "../../components/API Request/Codes.jsx";
import Headers from "../../components/Headers/Headers.jsx";
import { FetchApi } from "../../utils/Custom_Api.jsx";
import { BilllerInfo, Billpay, BillValidation, PNV } from "../../utils/bodyParams.jsx";
import { GetAcc } from "../../utils/Language.jsx";
import "../../styles/api_reference.css";
// import { DATA, PanDynamic } from "../utils/apiSchema";
import { BbpsApi_Headers } from "../../utils/Api_Headers.jsx";

const BillValidationDetails = () => {
  const [faceMatchState, setFaceMatchState] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const [allRequiredFields, setAllRequiredFields] = useState({});

  const examplesList = GetAcc?.exampleCodes["PAN"] || [];

  const [choosedExample, setChoosedExample] = useState(() => {
    const successExample = examplesList.find((e) => e.statusCode === 200);
    return successExample
      ? 200
      : examplesList.length > 0
        ? examplesList[0].statusCode
        : null;
  });

  const [isExampleChoosed, setIsExampleChoosed] = useState(
    () => !!choosedExample
  );

  const makeFaceMatchApiCall = async () => {
    const isAllRequiredFieldEntered = Object.values(allRequiredFields).every(
      (status) => !status
    );

    if (!isAllRequiredFieldEntered) {
      alert("Please enter all the required fields");
      return;
    }

    try {
      const res = await FetchApi({
        method: "POST",
        path: "/pan/panverifying",
        headers: faceMatchState?.headers,
        body: faceMatchState?.bodyParameters,
      });

      setChoosedExample(200);
      setApiResponse({
        statusCode: 200,
        message: res?.data,
      });
      setIsExampleChoosed(true);
    } catch (error) {
      const statusCode = error?.response?.data?.statusCode || 500;
      setChoosedExample(statusCode);
      setApiResponse({
        statusCode,
        message: error?.response?.data,
      });
      setIsExampleChoosed(true);
    }
  };

  return (
    <div className="main_parent">
      <div className="first_child hide-scrollbar">
        <div className="api_hero">
          <h1 className="api_heading">BillValidation Details</h1>
          <MethodLink
            method="POST"
            className="method_link"
            link="https://stgapi.billavenue.com/billpay/extBillValCntrl/billValidationRequest/xml"
          />
          <p className="first_para">
            The BillValidation API allows you to verify the bill details for a BBPS biller
            before initiating the payment. By providing customer inputs such as account number,
            consumer number, or mobile number, the API fetches the biller-provided details
            including bill amount, due date, and customer information. This ensures that
            the payment is made against a valid bill and reduces errors in the bill payment workflow.
          </p>


        </div>
        {/* <RequestHistoryTable TableClass="history_Table" /> */}
        <div className="py-6">
          <p className="text-xs font-medium">HEADERS</p>
          <Headers
            setAllRequiredFields={setAllRequiredFields}
            headersObj={BbpsApi_Headers}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
          />
        </div>
        <div className="py-6">
          <p className="text-xs font-medium">BODY PARAMS</p>
          <BodyParams
            bodyObj={BillValidation}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div>
        {/* <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent dynamic200={BillerInfo} otherData={DATA} />
        </div> */}
      </div>
      <div className="second_child hide-scrollbar">
        <Codes
          makeFaceMathcApiCall={makeFaceMatchApiCall}
          apiError={apiResponse}
          isExampleChoosed={isExampleChoosed}
          setIsExampleChoosed={setIsExampleChoosed}
          setApiError={setApiResponse}
          choosedExample={choosedExample}
          setChoosedExample={setChoosedExample}
          service={"BillValidation"}
          examples={GetAcc?.exampleCodes["BillValidation"] || []}
        />
      </div>
    </div>
  );
};

export default BillValidationDetails;
