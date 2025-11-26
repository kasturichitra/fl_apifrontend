import React, { useState } from "react";
import BodyParams from "../components/BodyParams/BodyParams";
import MethodLink from "../components/MethodLink";
import RequestHistoryTable from "../components/refernce_route_components/RequestHistoryTable";
import ResponseComponent from "../components/Responses/ResponsesComponent";
import Codes from "../components/API Request/Codes";
import { MOG } from "../utils/bodyParams";
import Headers from "../components/Headers/Headers";
import { api_Headers } from "../utils/Api_Headers";
import { FetchApi } from "../utils/Custom_Api";
import { DATA, MobileDynamic } from "../utils/apiSchema";
import { GetAcc } from "../utils/Language";

export default function MobileNumberOtpVerification() {
  const [faceMatchState, setFaceMatchState] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const [isExampleChoosed, setIsExampleChoosed] = useState(false);
  const [choosedExample, setChoosedExample] = useState(null);
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
        path: "/otp/mobileOtp",
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
      <div className="first_child">
        {/* MAIN HERO ELEMENT */}
        <div className="api_hero">
          <h1 className="api_heading">Aadhaar Verification</h1>

          <MethodLink
            method="POST"
            className="method_link"
            LinkClass="link_class"
            link="mobileNumber/mobileotpVerify"
          />

          <p className="first_para">
            Name Verification of the Account Holder Name
          </p>
        </div>

        {/* REQ HISTORY TABLE */}
        <RequestHistoryTable TableClass="history_Table" />

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
            bodyObj={MOG}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div>

        {/* RESPONSE COMPONENT */}
        <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent dynamic200={MobileDynamic} otherData={DATA} />
        </div>
      </div>

      <div className="second_child">
        <Codes
          makeFaceMathcApiCall={makeFaceMathcApiCall}
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
}
