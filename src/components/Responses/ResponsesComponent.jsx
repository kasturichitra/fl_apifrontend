import { useState } from "react";
import EndpointCard from "./EndpointCard";
import "../../styles/responses.css";

export default function ResponseComponent({dynamic200, otherData}) {
  const [openIndex, setOpenIndex] = useState(0);

  const constructedData = [
    ...dynamic200,
    ...otherData
  ]

  const HandleOpenResponse = (idx) => {
    if (openIndex === idx) {
      return setOpenIndex(null);
    }
    setOpenIndex(idx);
  };

  return (
    <div className=" py-2  text-white space-y-4">
      <div className="max-w-3xl border rounded-lg overflow-hidden border-b-0 border-gray-200/20   bg-gray-800 mx-auto">
        {constructedData && constructedData.map((endpoint, index) => {
          return (
            <EndpointCard
              key={index}
              openIndex={openIndex}
              index={index}
              endpoint={endpoint}
              HandleOpenResponse={HandleOpenResponse}
            />
          );
        })}
      </div>
    </div>
  );
}
