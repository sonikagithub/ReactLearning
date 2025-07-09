import React, { useLayoutEffect, useState } from "react";

const UseLayoutEffact = () => {
  const [color, setColor] = useState("blue");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="p-4 text-white">
      <h1>Current color: {color}</h1>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setColor("orange")}
          className="bg-orange-500 px-4 py-2 rounded"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Red
        </button>
        <button
          onClick={() => setColor("black")}
          className="bg-black px-4 py-2 rounded"
        >
          Black
        </button>
      </div>
    </div>
  );
};

export default UseLayoutEffact;
