"";

const { useState } = require("react");
const { default: SyntaxHighlighter } = require("react-syntax-highlighter");
import {
  oneDark,
  dracula,
  duotoneDark,
  atomDark,
  coy,
  funky,
  okaidia,
  solarizedlight,
  tomorrow,
  twilight,
  nightOwl,
  vs,
  vscDarkPlus,
  ghcolors,
  pojoaque,
  hopscotch,
  duotoneLight,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { formatCodeString } from "./API Request/LangCode";

const CodeBlock = ({ inline, className, children, ...props }) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1];
  const codeString = String(children).trim();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  if (inline) {
    return (
      <code className="bg-[#303B42] flex  w-full text-white xl:px-2 py-1 rounded text-sm font-mono">
        {codeString}
      </code>
    );
  }
  if (!className?.includes("language")) {
    return (
      <span className=" bg-[#303B42] text-white text-wrap text-base p-1 rounded">
        {" "}
        {codeString}
      </span>
    );
  }

  return (
    <div className="relative w-full   group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs cursor-pointer bg-gray-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
        aria-label="Copy code to clipboard"
      >
        {copied ? "Copied" : "Copy"}
      </button>

      <SyntaxHighlighter
        language="js" // or 'http' depending on what you're showing
        style={dracula}
        wrapLines={true}
        // showLineNumbers={true}
        className="rounded  overflow-hidden text-sm "
      >
        {formatCodeString(codeString || "")}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
