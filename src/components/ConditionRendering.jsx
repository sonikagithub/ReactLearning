import React, { useState } from "react";

const ConditionRendering = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="border bg-green-400 flex items-center justify-center h-20 w-20">
        {count}
      </div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-red-400 border m-2 p-2"
      >
        Count
      </button>
      {count == 0 ? (
        <h1>Condition 0</h1>
      ) : count == 1 ? (
        <h1>condintion 1</h1>
      ) : count == 2 ? (
        <h1>condintion 2</h1>
      ) : count == 3 ? (
        <h1>condintion 3</h1>
      ) : count == 4 ? (
        <h1>condintion 4</h1>
      ) : (
        <h1>other condition</h1>
      )}
    </div>
  );
};

export default ConditionRendering;
