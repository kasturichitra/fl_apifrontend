import React, { useState } from "react";
import LanguageSelection from "./LanguageSelection";
import LangCode from "./LangCode";

import { GetAcc } from "../../utils/Language";
import BaseUrl from "./BaseUrl";
import Examples from "./Examples";

export default function Codes({
  makeFaceMathcApiCall,
  apiError,
  isExampleChoosed,
  setApiError,
  setIsExampleChoosed,
  choosedExample,
  setChoosedExample,
  service,
  examples,
}) {
  const [currentLanguage, setCurrentLanguage] = useState("Node");

  console.log("examples ===>>", examples)
  console.log("service ===>>", service)

  return (
    <div className="second_ch_main ">
      <LanguageSelection
        languages={GetAcc?.languages}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <BaseUrl data={GetAcc?.baseUrl} service={service} />
      <div className="code_sticker">
        <LangCode
          languages={GetAcc?.languages}
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
          makeFaceMathcApiCall={makeFaceMathcApiCall}
          service={service}
        />
        <Examples
          examples={examples}
          apiError={apiError}
          isExampleChoosed={isExampleChoosed}
          setIsExampleChoosed={setIsExampleChoosed}
          setApiError={setApiError}
          choosedExample={choosedExample}
          setChoosedExample={setChoosedExample}
        />
      </div>
    </div>
  );
}
