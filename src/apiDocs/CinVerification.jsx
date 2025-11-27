import React, { useState } from "react";
import BodyParams from "../components/BodyParams/BodyParams";
import MethodLink from "../components/MethodLink";
import RequestHistoryTable from "../components/RequestHistoryTable";
import ResponseComponent from "../components/Responses/ResponsesComponent";
import Codes from "../components/API Request/Codes";
import Headers from "../components/Headers/Headers";
import { GetAcc } from "../utils/Language";
import { CIN } from "../utils/bodyParams";
import { api_Headers } from "../utils/Api_Headers";
import { FetchApi } from "../utils/Custom_Api";
import { CinDynamic, DATA } from "../utils/apiSchema";

export default function CinVerification() {
  const [faceMatchState, setFaceMatchState] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
   const examplesList = GetAcc?.exampleCodes["CIN"] || [];
  
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
      alert("Please enter all the Required Fields");
      return;
    }

    try {
      const res = await FetchApi({
        method: "POST",
        path: "/gst/verify/CinNumberverify",
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
        {/* MAIN HERO ELEMENT */}
        <div className="api_hero">
          <h1 className="api_heading">CIN Number Verification</h1>
          <MethodLink
            method="POST"
            className="method_link"
            LinkClass="link_class"
            link="http://Ntar.PipelineServices/api/gst/verify/CinNumberverify"
          />
          <p className="first_para">
            Enter your CIN number to verify the company details.
          </p>
        </div>

        {/* REQUEST HISTORY TABLE */}
        <RequestHistoryTable TableClass="history_Table" />

        {/* HEADERS SECTION */}
        <div className="py-6">
          <p className="text-xs font-medium">HEADERS</p>
          <Headers
            setAllRequiredFields={setAllRequiredFields}
            headersObj={api_Headers}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
          />
        </div>

        {/* BODY PARAMS */}
        <div className="py-6">
          <p className="text-xs font-medium">BODY PARAMS</p>
          <BodyParams
            bodyObj={CIN}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div>

        {/* RESPONSE COMPONENT */}
        <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent dynamic200={CinDynamic} otherData={DATA} />
        </div>
      </div>

      {/* SECOND CHILD - API CALL + CODE SECTION */}
      <div className="second_child hide-scrollbar">
        <Codes
          makeFaceMathcApiCall={makeFaceMathcApiCall}
          apiError={apiResponse}
          isExampleChoosed={isExampleChoosed}
          setIsExampleChoosed={setIsExampleChoosed}
          setApiError={setApiResponse}
          choosedExample={choosedExample}
          setChoosedExample={setChoosedExample}
          service={"cin"}
          examples={GetAcc?.exampleCodes["CIN"] || []}
        />
      </div>
    </div>
  );
}
