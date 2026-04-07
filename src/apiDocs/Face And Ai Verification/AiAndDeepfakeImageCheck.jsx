import React, { useState, useEffect } from "react";
import BodyParams from "../../components/BodyParams/BodyParams";
import MethodLink from "../../components/MethodLink";
import RequestHistoryTable from "../../components/refernce_route_components/RequestHistoryTable";
import ResponseComponent from "../../components/Responses/ResponsesComponent";
import Codes from "../../components/API Request/Codes";
import Headers from "../../components/Headers/Headers";
import { AiAndDeepfakeCheckDynamic, DATA } from "../../utils/apiSchema";
import { api_Headers } from "../../utils/Api_Headers";
import { FetchApi } from "../../utils/Custom_Api";
import { FM, IV } from "../../utils/bodyParams";
import { GetAcc } from "../../utils/Language";

export default function AiAndDeepfakeImageCheck() {
  const [faceMatchState, setFaceMatchState] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const [allRequiredFields, setAllRequiredFields] = useState({});

  const examplesList = GetAcc?.exampleCodes["ADIC"] || [];

  const [choosedExample, setChoosedExample] = useState(() => {
    const successExample = examplesList.find((e) => e.statusCode === 200);
    return successExample
      ? 200
      : examplesList.length > 0
        ? examplesList[0].statusCode
        : null;
  });

  const [isExampleChoosed, setIsExampleChoosed] = useState(
    () => !!choosedExample,
  );

  return (
    <div className="main_parent">
      <div className="first_child hide-scrollbar">
        {/* MAIN HERO ELEMENT */}
        <div className="api_hero">
          <h1 className="api_heading">AI AND DEEPFAKE IMAGE DETECTION</h1>

          <MethodLink
            method={"POST"}
            className={"method_link"}
            LinkClass={"link_class"}
            link={"image/ai_deepfake_check"}
          />

          <p className="first_para">
            The Face Match API is a service that allows developers to compare
            two facial images and determine their similarity or match score.
          </p>
        </div>

        {/* REQ History Table */}
        {/* <RequestHistoryTable TableClass={"history_Table"} /> */}

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

        {/* BODY PARAMS */}
        <div className="py-6">
          <p className="text-xs font-medium">FORM DATA</p>
          <p className="text-xs text-gray-600">
            Please submit the data using <code>multipart/form-data</code>{" "}
            format.
          </p>
          <p className="text-xs text-gray-600">
            Use key-value pairs for fields and include any files as{" "}
            <code>file</code> inputs.
          </p>
          <p className="text-xs text-gray-600">
            ⚠️ Make sure all required fields are included.
          </p>
          <BodyParams
            bodyObj={IV}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div>

        {/* RESPONSES */}
        <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent
            dynamic200={AiAndDeepfakeCheckDynamic}
            otherData={DATA}
          />
        </div>
      </div>

      {/* RIGHT SIDE CODE SECTION */}
      <div className="second_child hide-scrollbar">
        <Codes
          makeFaceMatchApiCall={""}
          apiError={apiResponse}
          isExampleChoosed={isExampleChoosed}
          setIsExampleChoosed={setIsExampleChoosed}
          setApiError={setApiResponse}
          choosedExample={choosedExample}
          setChoosedExample={setChoosedExample}
          service={"aiAndDeepfakeImageCheck"}
          examples={GetAcc?.exampleCodes["ADIC"] || []}
        />
      </div>
    </div>
  );
}
