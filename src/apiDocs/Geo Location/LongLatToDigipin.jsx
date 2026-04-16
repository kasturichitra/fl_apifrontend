import React, { useState } from "react";
import BodyParams from "../../components/BodyParams/BodyParams";
import MethodLink from "../../components/MethodLink";
import ResponseComponent from "../../components/Responses/ResponsesComponent";
import Codes from "../../components/API Request/Codes";
import Headers from "../../components/Headers/Headers";
import { FetchApi } from "../../utils/Custom_Api";
import { LLTD } from "../../utils/bodyParams";
import { api_Headers } from "../../utils/Api_Headers";
import { GetAcc } from "../../utils/Language";
import "../../styles/api_reference.css";
import { DATA, PanToMaskedAadhaarDynamic } from "../../utils/apiSchema";
import EncryptionNotice from "../../components/EncryptionNotice";

const LongLatToDigipin = () => {
  const [faceMatchState, setFaceMatchState] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const [allRequiredFields, setAllRequiredFields] = useState({});

  const examplesList = GetAcc?.exampleCodes["LLD"] || [];

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
        path: "pan/verify_to_aadhaar",
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
          <h1 className="api_heading">Longitude And Latitude To Digipin</h1>
          <MethodLink
            method="POST"
            className="method_link"
            LinkClass="link_class"
            link="location/longLat/digipin"
          />
          <p className="first_para">
            The Longitude and Latitude to Digipin API enables developers to
            convert geographic coordinates into a unique Digipin code, making it
            easier to identify, store, and share precise location information in
            a simplified format.
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
            bodyObj={LLTD}
            faceMatchState={faceMatchState}
            setFaceMatchState={setFaceMatchState}
            setAllRequiredFields={setAllRequiredFields}
          />
        </div>

        {/* Response */}
        <div className="py-6">
          <p className="text-xs font-medium">RESPONSES</p>
          <ResponseComponent
            dynamic200={PanToMaskedAadhaarDynamic}
            otherData={DATA}
          />
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
          service={"latLongToDigipin"}
          examples={GetAcc?.exampleCodes["LLD"] || []}
        />
      </div>
    </div>
  );
};

export default LongLatToDigipin;
