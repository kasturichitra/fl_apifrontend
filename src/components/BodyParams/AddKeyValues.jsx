import React, { useState } from "react";

export default function AddKeyValues({ field }) {
  const [noOfFields, setNoOfFields] = useState([]);

  const handleAddNewField = () => {
    // const keyNumber = noOfFields.length === 0 ? "" : "-" + noOfFields.length;
    // console.log(noOfFields);
    // const newField = { key: `newKey${keyNumber}`, value: "New Value" };
    // setNoOfFields((prev) => [...prev, newField]);
    const newKeyFields = noOfFields.filter((field) =>
      /^newKey(-\d+)?$/.test(field.key)
    );

    const index = newKeyFields.length === 0 ? "" : `-${newKeyFields.length}`;
    const newField = { key: `newKey${index}`, value: "New Value" };
    setNoOfFields((prev) => [...prev, newField]);
  };

  const HandleChange = (e, idx) => {
    const { value, name } = e.target;

    setNoOfFields((prev) => {
      return prev.map((v, i) => {
        if (i === idx) {
          return { ...v, [name]: value };
        }
        return v;
      });
    });
  };

  return (
    <section>
      {noOfFields.map((k, idx) => {
        return (
          <KeyValues
            data={k}
            key={idx}
            index={idx}
            handleChange={HandleChange}
          />
        );
      })}

      <div className="p-3 ">
        <button
          className="flex px-2 rounded-t-lg py-1 w-full border border-gray-200/20   cursor-pointer justify-between items-center"
          onClick={handleAddNewField}
        >
          <span className="uppercase text-xs  font-medium">{field?.title}</span>
          <span className="pr-1.5 font-bold">+</span>
        </button>
      </div>
    </section>
  );
}

function KeyValues({ data, index, handleChange }) {
  const { key, value } = data;
  return (
    <>
      {
        <div className="px-3 py-3 not-first:border-t border-gray-200/20">
          <div className="flex justify-between">
            <span className="text-sm ">string</span>
            <div className="flex gap-10 justify-between">
              <input
                className="w-[140px] px-1 bg-black rounded"
                type="text"
                name="key"
                value={key}
                onChange={(e) => handleChange(e, index)}
              />
              <input
                className="w-[140px] px-1 bg-black rounded"
                type="text"
                name="value"
                value={value}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          </div>
        </div>
      }
    </>
  );
}
