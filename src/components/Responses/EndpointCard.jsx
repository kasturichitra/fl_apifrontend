import { images } from "../../utils/constant";
import ArrayofObjects from "./ArrayofObjects";
import NonArrayOfObjects from "./NonArrayOfObjects";

export default function EndpointCard({
  endpoint,
  HandleOpenResponse,
  index,
  openIndex,
}) {
  const { status, summary, body } = endpoint;

  return (
    <div className="bg-[#303B42]">
      {/* STATUS COMPONENT HEADING */}
      <div
        className="border-b border-gray-100/20   px-2 py-2.5"
        onClick={() => HandleOpenResponse(index)}
      >
        <button className="flex items-center justify-between w-full px-2">
          <div>
            <p className="flex items-center gap-1.5">
              <span
                className={`${
                  status === 200 || status === 201
                    ? "bg-green-300"
                    : "bg-red-300"
                } w-3 h-3 block rounded-full`}
              ></span>
              <span className="font-semibold text-sm">{status}</span>
            </p>
            <p className="text-left">{summary}</p>
          </div>
          <span className=" w-4 px-0.5 h-4 ">
            <img
              src={images.rightArrow}
              alt=""
              className={`${
                openIndex === index ? "rotate" : ""
              } tri_icon`}
            />
          </span>
        </button>
      </div>

      {/* RESPONSE BODY */}

      <div
        className={`${
          openIndex !== index
            ? "h-0 overflow-hidden"
            : "border-b h-auto py-2 px-3"
        }  border-gray-100/20 `}
      >
        <h2 className="text-xs font-medium py-2 text-gray-300">
          RESPONSE BODY
        </h2>

        {body?.type === "array of objects" ? (
          // when the Type of object is [array of objects]
          <ArrayofObjects body={body} />
        ) : (
          // When the type of object is [normal object]
          <NonArrayOfObjects body={body} />
        )}
      </div>
    </div>
  );
}
