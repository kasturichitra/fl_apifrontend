import React, { useState } from "react";
import MethodLink from "../components/MethodLink";
import Codes from "../components/API Request/Codes";
import Headers from "../components/Headers/Headers";
import { FetchApi } from "../utils/Custom_Api";
import { GetAcc } from "../utils/Language";
import "../styles/api_reference.css";
import { toekn_api_Headers } from "../utils/Api_Headers";
import ResponseComponent from "../components/Responses/ResponsesComponent";
import { accessTokenDynamic, DATA } from "../utils/apiSchema";

const AccessTokenGenration = () => {
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
          <h1 className="api_heading">Access Token Genration</h1>
          <MethodLink
            method="POST"
            className="method_link"
            link="api/v1/client/generate/clientToken"
          />
          <p className="first_para">
          </p>

        </div>
        {/* <RequestHistoryTable TableClass="history_Table" /> */}
        <div className="py-6">
          <p className="text-xs font-medium">HEADERS</p>
          <Headers
            setAllRequiredFields={setAllRequiredFields}
            headersObj={toekn_api_Headers}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
          />
        </div>
        {/* <div className="py-6">
          <p className="text-xs font-medium">BODY PARAMS</p>
          <BodyParams
            bodyObj={[]}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div> */}
        <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent dynamic200={accessTokenDynamic} otherData={DATA} />
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
          service={"access"}
          examples={GetAcc?.exampleCodes["AT"] || []}
        />
      </div>
    </div>
  );
};

export default AccessTokenGenration;

