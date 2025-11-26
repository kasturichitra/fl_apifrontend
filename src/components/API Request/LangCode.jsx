import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  dracula,
  duotoneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { images } from "../../utils/constant";
import "../../styles/langCodes.css";

export default function LangCode({
  languages,
  currentLanguage,
  makeFaceMathcApiCall,
  service,
}) {
  const langObj = languages.find((l) => l.languageName === currentLanguage);

  console.log("langObj ==>>", langObj)

  if (!langObj) {
    return <div>No language selected</div>;
  }

  const filteredOptions = langObj.requestOptions?.filter(
    (r) => r.serviceName?.toLowerCase() === service?.toLowerCase()
  );

  console.log("filteredOptions ===>>", filteredOptions)

  const updatedLangObj = {
    ...langObj,
    requestOptions: filteredOptions || [],
  };

  return (
    <>
      {updatedLangObj.optionType === "single" ? (
        <SingleOption
          option={updatedLangObj}
          makeFaceMathcApiCall={makeFaceMathcApiCall}
        />
      ) : (
        <MultipleOptions
          option={updatedLangObj}
          makeFaceMathcApiCall={makeFaceMathcApiCall}
        />
      )}
    </>
  );
}

function SingleOption({ option, makeFaceMathcApiCall }) {
  const codeObj = option.requestOptions[0];
  const formatted = formatCodeString(codeObj?.code || "");

  return (
    <div className="code_top_parent">
      <div className="relative p-2 pb-0">
        <button className="flex gap-1 items-center border border-transparent hover:border hover:border-gray-200/50  px-1 py-0.5 rounded-sm text-sm cursor-pointer">
          <span className="text-xs font-medium uppercase">request</span>
        </button>
      </div>
      <RenderCode formatted={formatted} />
      <CopyTryComponent
        copyCode={codeObj?.code}
        makeFaceMathcApiCall={makeFaceMathcApiCall}
      />
    </div>
  );
}

function MultipleOptions({ option, makeFaceMathcApiCall }) {
  const { requestOptions } = option;

  if (!requestOptions || requestOptions.length === 0) {
    return (
      <div className="text-gray-400 p-2">
        No code available for <strong>{option.languageName}</strong>.
      </div>
    );
  }

  const [library, setLibrary] = useState(requestOptions[0]?.requestType?.type);
  const optionsRef = useRef(null);

  const codeObj =
    requestOptions.find((Rq) => Rq?.requestType?.type === library) ||
    requestOptions[0];

  // useEffect(() => {
  //   const removeClassFromOptions = (e) => {
  //     e.target?.classList.remove("open_options");
  //   };

  //   optionsRef?.current?.classList.remove("open_options");
  //   optionsRef?.current?.addEventListener("mouseleave", removeClassFromOptions);

  //   return () => {
  //     optionsRef?.current?.removeEventListener(
  //       "mouseleave",
  //       removeClassFromOptions
  //     );
  //   };
  // }, []);

  useEffect(() => {
  const removeClass = () => {
    optionsRef.current?.classList.remove("open");
  };

  optionsRef.current?.addEventListener("mouseleave", removeClass);

  return () => {
    optionsRef.current?.removeEventListener("mouseleave", removeClass);
  };
}, []);

  const formatted = formatCodeString(codeObj?.code || "");

const AddClassToOptions = () => {
  optionsRef.current?.classList.toggle("open");
};

  const selectLibrary = (lib) => {
    setLibrary(lib);
  };

  return (
    <div className="code_top_parent">
      <div className="relative px-2 py-2.5">
        <button className="library_change_button" onClick={AddClassToOptions}>
          <span className="text-xs font-medium">{library}</span>
          <span>
            <img
              src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
              alt=""
              className="w-2.5 h-2.5 invert-100"
            />
          </span>
        </button>
        <div className="code_multi_opt space-y-0.5 " ref={optionsRef}>
          <div>
            <span className="p-2 text-sm uppercase">Library</span>
          </div>
          {requestOptions?.map((r, i) => (
            <button
              className="w-full text-left hover:bg-gray-500/30 cursor-pointer"
              key={i}
              onClick={() => selectLibrary(r?.requestType?.type)}
            >
              <span className="p-2 text-sm font-medium">
                {r?.requestType?.shortType}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="code_main">
        {codeObj?.installPackage && (
          <div className="px-3 pt-3">
            <p className="px-2 flex w-full py-1.5 bg-gray-900 rounded">
              <span className="text-sm">$</span>
              <input
                className="flex-1 text-[#12ca93] px-1 text-sm font-mono outline-0"
                readOnly
                value={codeObj?.installPackage}
              />
            </p>
          </div>
        )}

        <RenderCode formatted={formatted} />
      </div>

      {/* Copy & Try buttons */}
      <CopyTryComponent
        copyCode={codeObj?.code}
        makeFaceMathcApiCall={makeFaceMathcApiCall}
      />
    </div>
  );
}

export const formatCodeString = (raw = "") =>
  raw
    .replace(/\t/g, "  ")
    .replace(/(\b(url|headers|response|options|request|body|data|params|print)\s*=\s*)/g, "\n$1")
    .replace(/(\s)(--header|--request|\bGET\b|\bPOST\b|\bPUT\b|\bDELETE\b)/g, "\n$1$2")
    .replace(/\\\s*/g, " \\\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();

export function RenderCode({ formatted }) {
  return (
    <div className="code_block">
      <SyntaxHighlighter
        language="js"
        style={dracula}
        wrapLines={true}
        showLineNumbers={true}
        customStyle={{ borderRadius: "4px", fontSize: "13px" }}
      >
        {formatted}
      </SyntaxHighlighter>
    </div>
  );
}

// ------------------- CopyTryComponent -------------------
function CopyTryComponent({ copyCode, makeFaceMathcApiCall }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText(copyCode);
    setTimeout(() => setIsCopied(false), 1200);
  };

  return (
    <div className="code_main_cp_btn_head">
      <button className="code_main_cp_btn" onClick={handleCopy}>
        {!isCopied ? (
          <img src={images.copy} alt="" className="invert-100 h-6" title="copy" />
        ) : (
          <img src={images?.check} alt="" title="copied" className="invert-100" />
        )}
      </button>
      <button className="code_main_try_btn" onClick={makeFaceMathcApiCall}>
        Try It!
      </button>
    </div>
  );
}

