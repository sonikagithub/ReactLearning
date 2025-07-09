//useState Hook
import React, { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const increse = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
      <h1 className="text-xl font-semibold mb-4">Home</h1>
      <div className="text-4xl font-bold mb-4">{counter}</div>
      <div className="flex justify-between gap-4">
        <button
          onClick={increse}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          +
        </button>
        <button
          onClick={decrease}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
