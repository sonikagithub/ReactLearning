import React, { useState } from "react";

const InputClear = () => {
  const [val, setvalue] = useState("");
  return (
    <div className="box-border relative size-60 border-4  p-4  ">
      <input
        type="text"
        className=" border-solid p-2 bg-blue-100"
        placeholder="enter your name "
        onChange={(event) => setvalue(event.target.value)}
        value={val}
      ></input>

      <h1>{val}</h1>

      <button
        onClick={() => setvalue("")}
        className=" absolute right-2 bottom-2 rounded-md border bg-blue-950 text-white p-3 "
      >
        clear value
      </button>
    </div>
  );
};

export default InputClear;
