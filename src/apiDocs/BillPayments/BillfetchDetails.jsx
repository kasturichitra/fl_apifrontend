import React, { useState } from "react";
import BodyParams from "../../components/BodyParams/BodyParams.jsx";
import MethodLink from "../../components/MethodLink.jsx";
import ResponseComponent from "../../components/Responses/ResponsesComponent.jsx";
import Codes from "../../components/API Request/Codes.jsx";
import Headers from "../../components/Headers/Headers.jsx";
import { FetchApi } from "../../utils/Custom_Api.jsx";
import { BillFetch, BilllerInfo, PNV } from "../../utils/bodyParams.jsx";
import { GetAcc } from "../../utils/Language.jsx";
import "../../styles/api_reference.css";
// import { DATA, PanDynamic } from "../utils/apiSchema";
import { BbpsApi_Headers } from "../../utils/Api_Headers.jsx";

const BillFetchDetails = () => {
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
          <h1 className="api_heading">BillFetch Details</h1>
          <MethodLink
            method="POST"
            className="method_link"
            link="https://stgapi.billavenue.com/billpay/extBillCntrl/billFetchRequest/xml"
          />
          <p className="first_para">
            The BillFetch API communicates with the respective BBPS biller to fetch
            the latest bill details for a customer. It validates the customer inputs
            and provides important information such as bill amount, bill date, due
            date, customer name, bill reference numbers, and any applicable fees.
            This step ensures accurate bill verification before proceeding to bill pay.
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
            bodyObj={BillFetch}
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
          service={"BillFetch"}
          examples={GetAcc?.exampleCodes["BillFetch"] || []}
        />
      </div>
    </div>
  );
};

export default BillFetchDetails;
