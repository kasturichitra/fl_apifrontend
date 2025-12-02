import React, { useState } from "react";
import BodyParams from "../components/BodyParams/BodyParams";
import MethodLink from "../components/MethodLink";
import RequestHistoryTable from "../components/RequestHistoryTable";
import ResponseComponent from "../components/Responses/ResponsesComponent";
import Codes from "../components/API Request/Codes";
import Headers from "../components/Headers/Headers";
import { FetchApi } from "../utils/Custom_Api";
import { BilllerInfo, PNV } from "../utils/bodyParams";
import { api_Headers } from "../utils/Api_Headers";
import { GetAcc } from "../utils/Language";
import "../styles/api_reference.css";
import { DATA, PanDynamic } from "../utils/apiSchema";
import { BbpsApi_Headers } from "../utils/BbpsApi_Headers";

const BillerinfoDetails = () => {
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
          <h1 className="api_heading">BillerInfo Details</h1>
          <MethodLink
            method="POST"
            className="method_link"
            link="https://api.billavenue.com/billpay/extMdmCntrl/mdmRequestNew/xml"
          />
          <p className="first_para">
            The BillerInfo API provides the complete list of BBPS billers along with
            their categories and required customer input fields. It helps identify which
            billers are available and what details are needed to fetch or pay a bill.
          </p>
           </div>
          <RequestHistoryTable TableClass="history_Table" />
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
            bodyObj={BilllerInfo}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div>
        <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent dynamic200={PanDynamic} otherData={DATA} />
        </div>
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
          service={"pan"}
          examples={GetAcc?.exampleCodes["PAN"] || []}
        />
      </div>
    </div>
  );
};

export default BillerinfoDetails;
