import { images } from "../../utils/constant";
import React, { useRef, useState } from "react";
import { formatCodeString, RenderCode } from "./LangCode";
import {
  atomOneDark,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Examples({
  examples,
  apiError,
  isExampleChoosed,
  setIsExampleChoosed,
  setApiError,
  choosedExample,
  setChoosedExample,
}) {
  const dropdownRef = useRef(null);
  
  const handleClick = (e, status) => {
    e.stopPropagation();
    setIsExampleChoosed(true);
    setChoosedExample(status);
    setApiError(null);
    dropdownRef.current?.classList.remove("open");
  };

  const openDropDown = () => {
    if (dropdownRef.current?.classList.contains("open")) {
      dropdownRef.current?.classList.remove("open");
    } else {
      dropdownRef.current?.classList.add("open");
    }
  };

  return (
    <div className="example_main ">
      <div className="example_header">
        <span className="text-xs">RESPONSE</span>

        <button className="example_btn" onClick={openDropDown}>
          {choosedExample && (
            <span className="flex items-center justify-center">
              <span
                className={`w-3 h-3 inline-block rounded-full ${
                  choosedExample === 200 ? "bg-green-500" : "bg-red-400"
                }`}
              ></span>
              <span className="ml-1.5 text-sm">{choosedExample}</span>
            </span>
          )}
          {choosedExample ? (
            <span className="text-[10px] bg-gray-200 text-black rounded-2xl px-1.5 flex items-center justify-center">
              Example
            </span>
          ) : (
            <span className="text-xs">EXAMPLES</span>
          )}
          <span className="shrink-0">
            <img
              src={images.arrowIcon}
              className="invert-100  rotate-90 w-3 h-3"
              alt=""
            />
          </span>
          <div className="example_dropdown" ref={dropdownRef}>
            <span className="text-xs px-3 py-2">application/json</span>
            {examples.map(({ statusCode }, i) => {
              return (
                <div
                  className="example_dropdown_div"
                  onClick={(e) => handleClick(e, statusCode)}
                  key={i}
                >
                  <span
                    key={statusCode}
                    className="flex items-center gap-1 text-sm"
                  >
                    <span
                      className={`w-3 h-3 inline-block rounded-full ${
                        statusCode === 200 ? "bg-green-500" : "bg-red-400"
                      }`}
                    ></span>{" "}
                    <span>{statusCode}</span>{" "}
                  </span>
                  {choosedExample === statusCode && (
                    <span className="w-5 h-5 inline-block">
                      <img
                        src={images.check}
                        alt=""
                        className="w-full h-full invert-100"
                      />
                    </span>
                  )}
                </div>
              );
            })}
            <span
              className="example_dropdown_clr_btn"
              onClick={() => {
                setChoosedExample(null);
                setIsExampleChoosed(false);
                setApiError(null);
              }}
              aria-label="button"
            >
              Clear Example
            </span>
          </div>
        </button>
      </div>
      <div>
        {!isExampleChoosed ? (
          <DisplayExamplesContent
            chooseExample={choosedExample}
            setChoosedExample={setChoosedExample}
            setIsExampleChoosed={setIsExampleChoosed}
            examples={examples}
            setApiError={setApiError}
          />
        ) : (
          <RenderExampleCodes
            apiError={apiError}
            examples={examples}
            choosedExample={choosedExample}
            setApiError={setApiError}
          />
        )}
      </div>
    </div>
  );
}

function DisplayExamplesContent({
  setChoosedExample,
  setIsExampleChoosed,
  examples,
  setApiError,
}) {
  const handleClick = (status) => {
    setIsExampleChoosed(true);
    setChoosedExample(status);
    setApiError(null);
  };
  return (
    <div className=" text-center flex justify-between flex-col gap-5 p-7.5 w-full h-calc(100% - 48px)">
      <div className="text-sm">
        click
        <code className="px-1 mx-1 rounded text-medium border">Try It!</code>
        to start a request and see the response here! Or choose an example:
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-sm">application/json</span>
        <div className="flex flex-wrap justify-center gap-2 mx-auto">
          {examples.map(({ statusCode }, idx) => {
            return (
              <button
                key={idx}
                className="px-1 flex items-center gap-1 text-sm cursor-pointer rounded border border-transparent hover:border-gray-200/20"
                onClick={() => handleClick(statusCode)}
              >
                <span
                  className={`w-3 h-3 inline-block rounded-full ${
                    statusCode === 200 ? "bg-green-500" : "bg-red-400"
                  }`}
                ></span>{" "}
                <span>{statusCode}</span>{" "}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RenderExampleCodes({ examples, apiError, choosedExample }) {
  let { statusCode, message } =
    apiError || examples.filter((e) => e.statusCode === choosedExample)[0];

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText(example);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const truncated = truncateJson(message, 60);
  console.log(truncated);
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="max-h-[500px]  overflow-y-auto  overflow-x-hidden">
          <SyntaxHighlighter
            language="js"
            style={dracula}
            className="json-highlighter"
            wrapLongLines
          >
            {JSON.stringify(truncated, null, 2)}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="example_render_main">
        <button className="w-5 h-5 my-auto" onClick={handleCopy}>
          {!isCopied ? (
            <img
              src={images.copy}
              alt=""
              className="invert-100 "
              title="copy"
            />
          ) : (
            <img
              src={images?.check}
              alt=""
              title="copied"
              className="invert-100"
            />
          )}
        </button>
      </div>
    </div>
  );
}

const truncateJson = (data, charLimit = 60) => {
  if (typeof data === "object" && data !== null) {
    return Array.isArray(data)
      ? data.map((item) => truncateJson(item, charLimit))
      : Object.fromEntries(
          Object.entries(data).map(([key, value]) => {
            if (typeof value === "string") {
              return [key, value.length > charLimit ? value : value];
            } else if (typeof value === "object") {
              return [key, truncateJson(value, charLimit)];
            }
            return [key, value];
          })
        );
  }
  return data;
};
