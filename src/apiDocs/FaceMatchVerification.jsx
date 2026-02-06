import React, { useState, useEffect } from "react";
import BodyParams from "../components/BodyParams/BodyParams";
import MethodLink from "../components/MethodLink";
import RequestHistoryTable from "../components/refernce_route_components/RequestHistoryTable";
import ResponseComponent from "../components/Responses/ResponsesComponent";
import Codes from "../components/API Request/Codes";
import Headers from "../components/Headers/Headers";
import { DATA, FaceDynamic } from "../utils/apiSchema";
import { api_Headers } from "../utils/Api_Headers";
import { FetchApi } from "../utils/Custom_Api";
import { FM } from "../utils/bodyParams";
import { GetAcc } from "../utils/Language";

export default function FaceMatchVerification() {
  const [faceMatchState, setFaceMatchState] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const [isExampleChoosed, setIsExampleChoosed] = useState(false);
  const [choosedExample, setChoosedExample] = useState(null);
  const [allRequiredFields, setAllRequiredFields] = useState({});

  const makeFaceMatchApiCall = async () => {
    const isAllRequiredFieldEntered = Object.values(allRequiredFields).every(
      (status) => !status
    );

    if (!isAllRequiredFieldEntered) {
      return alert("Please enter all the Required Fields");
    }

    try {
      const res = await FetchApi({
        method: "POST",
        path: "face/facematch",
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
          <h1 className="api_heading">Face Match</h1>

          <MethodLink
            method={"POST"}
            className={"method_link"}
            LinkClass={"link_class"}
            link={"face/facematch"}
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
          <p className="text-xs font-medium">BODY PARAMS</p>
          <BodyParams
            bodyObj={FM}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div>

        {/* RESPONSES */}
        <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent dynamic200={FaceDynamic} otherData={DATA} />
        </div>
      </div>

      {/* RIGHT SIDE CODE SECTION */}
      <div className="second_child hide-scrollbar">
        <Codes
          makeFaceMatchApiCall={makeFaceMatchApiCall}
          apiError={apiResponse}
          isExampleChoosed={isExampleChoosed}
          setIsExampleChoosed={setIsExampleChoosed}
          setApiError={setApiResponse}
          choosedExample={choosedExample}
          setChoosedExample={setChoosedExample}
          service={"faceMatch"}
          examples={GetAcc?.exampleCodes["FACE"] || []}
        />
      </div>
    </div>
  );
}
