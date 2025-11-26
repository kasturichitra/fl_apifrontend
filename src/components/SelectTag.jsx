import React, { useState } from "react";

export default function SelectTag({ enums }) {
  const [value, setValue] = useState(enums[0]);

  const HandleChange = (e) => {
    const { value } = e.target;
    setValue(value === "" ? enums[0] : value);
  };
  return (
    <select
      name=""
      className="w-[140px]"
      id=""
      value={value}
      onChange={HandleChange}
    >
      <option value=""></option>
      {enums.map((e) => {
        return (
          <option key={e} value={e} className="">
            {e}
          </option>
        );
      })}
    </select>
  );
}
