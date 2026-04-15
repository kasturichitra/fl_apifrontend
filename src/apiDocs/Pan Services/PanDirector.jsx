import React, { useState } from "react";
import BodyParams from "../../components/BodyParams/BodyParams";
import MethodLink from "../../components/MethodLink";

import ResponseComponent from "../../components/Responses/ResponsesComponent";
import Codes from "../../components/API Request/Codes";
import Headers from "../../components/Headers/Headers";
import { FetchApi } from "../../utils/Custom_Api";
import { PNV } from "../../utils/bodyParams";
import { api_Headers } from "../../utils/Api_Headers";
import { GetAcc } from "../../utils/Language";
import "../../styles/api_reference.css";
import { DATA, PanDirectorDynamic } from "../../utils/apiSchema";
import EncryptionNotice from "../../components/EncryptionNotice";

const PanDirector = () => {
  const [faceMatchState, setFaceMatchState] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const [allRequiredFields, setAllRequiredFields] = useState({});

  const examplesList = GetAcc?.exampleCodes["PAN_DIRECTOR"] || [];

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

  const makeFaceMatchApiCall = async () => {
    const isAllRequiredFieldEntered = Object.values(allRequiredFields).every(
      (status) => !status,
    );

    if (!isAllRequiredFieldEntered) {
      alert("Please enter all the required fields");
      return;
    }

    try {
      const res = await FetchApi({
        method: "POST",
        path: "/pan/knowDirector",
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
        {/* Header Section */}
        <div className="api_hero">
          <h1 className="api_heading">Pan Director Verification</h1>
          <MethodLink
            method="POST"
            className="method_link"
            LinkClass="link_class"
            link="pan/knowDirector"
          />
          <p className="first_para">
            The Pan Director Verification API allows developers to verify the
            PAN details of company directors in real-time, ensuring accurate
            identification and compliance.
          </p>
          <p className="first_para">PAN (Permanent Account Number)</p>
          <p className="first_para">
            PAN is a 10-character alphanumeric identifier issued by the Income
            Tax Department of India.
          </p>
          <p className="first_para">
            It is used for tax-related identification and compliance for
            individuals, including company directors.
          </p>
        </div>

        <div className="py-6">
          <EncryptionNotice />
        </div>

        {/* Request History Table */}
        {/* <RequestHistoryTable TableClass="history_Table" /> */}

        {/* Headers */}
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
            bodyObj={PNV}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div>

        {/* Response */}
        <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent dynamic200={PanDirectorDynamic} otherData={DATA} />
        </div>
      </div>

      {/* Code / Example Section */}
      <div className="second_child hide-scrollbar">
        <Codes
          makeFaceMathcApiCall={makeFaceMatchApiCall}
          apiError={apiResponse}
          isExampleChoosed={isExampleChoosed}
          setIsExampleChoosed={setIsExampleChoosed}
          setApiError={setApiResponse}
          choosedExample={choosedExample}
          setChoosedExample={setChoosedExample}
          service={"panDirector"}
          examples={GetAcc?.exampleCodes["PAN_DIRECTOR"] || []}
        />
      </div>
    </div>
  );
};

export default PanDirector;
