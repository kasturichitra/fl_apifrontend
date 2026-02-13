import React, { useState } from "react";

import BodyParams from "../../../components/BodyParams/BodyParams";
import MethodLink from "../../../components/MethodLink";
import RequestHistoryTable from "../../../components/refernce_route_components/RequestHistoryTable";
import ResponseComponent from "../../../components/Responses/ResponsesComponent";
import Codes from "../../../components/API Request/Codes";
import Headers from "../../../components/Headers/Headers";

import { api_Headers } from "../../../utils/Api_Headers";
import { FetchApi } from "../../../utils/Custom_Api";
import { AadhaarIntiateDynamic, DATA } from "../../../utils/apiSchema";
import { GetAcc } from "../../../utils/Language";
import { AI } from "../../../utils/bodyParams";

export default function AadhaarIntiation() {
  const [faceMatchState, setFaceMatchState] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
    const examplesList = GetAcc?.exampleCodes["AVI"] || [];
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
  const [allRequiredFields, setAllRequiredFields] = useState({});

  const makeFaceMathcApiCall = async () => {
    const isAllRequiredFieldEntered = Object.values(allRequiredFields).every(
      (status) => !status
    );

    if (!isAllRequiredFieldEntered) {
      return alert("Please enter all the Required Fields");
    }

    try {
      const res = await FetchApi({
        method: "POST",
        path: "/aadhaar/sentAadhaarotp",
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
      setChoosedExample(error?.response?.data?.statusCode);
      setApiResponse({
        statusCode: error?.response?.data?.statusCode,
        message: error?.response?.data,
      });
      setIsExampleChoosed(true);
    }
  };

  return (
    <div className="main_parent">
      <div className="first_child hide-scrollbar">
        {/* HERO SECTION */}
        <div className="api_hero">
          <h1 className="api_heading">Aadhaar Verification With Digilocker</h1>

          <MethodLink
            method={"POST"}
            className={"method_link"}
            LinkClass={"link_class"}
            link= "aadhaar/initiate"
          />

          <p className="first_para">
            The Aadhaar Number Verification API allows developers to verify
            users’ Aadhaar numbers in real-time.
          </p>
        </div>

        {/* Request History */}
        <RequestHistoryTable TableClass={"history_Table"} />

        {/* HEADERS */}
        <div className="py-6">
          <p className="text-xs font-medium">HEADERS</p>
          <Headers
            setAllRequiredFields={setAllRequiredFields}
            headersObj={api_Headers}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
          />
        </div>

        {/* Body Params */}
        <div className="py-6">
          <p className="text-xs font-medium">BODY PARAMS</p>
          <BodyParams
            bodyObj={AI}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div>

        {/* Responses */}
        <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent dynamic200={AadhaarIntiateDynamic} otherData={DATA} />
        </div>
      </div>

      {/* Right side: API test code panel */}
      <div className="second_child hide-scrollbar">
        <Codes
          makeFaceMathcApiCall={makeFaceMathcApiCall}
          apiError={apiResponse}
          isExampleChoosed={isExampleChoosed}
          setIsExampleChoosed={setIsExampleChoosed}
          setApiError={setApiResponse}
          choosedExample={choosedExample}
          setChoosedExample={setChoosedExample}
          service={"aadhaarInitiate"}
          examples={GetAcc?.exampleCodes["AVI"] || []}
        />
      </div>
    </div>
  );
}
