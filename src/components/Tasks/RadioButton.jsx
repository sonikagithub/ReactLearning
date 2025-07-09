import React, { useState } from "react";

const RadioButton = () => {
  const [skill, setSkill] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setTimeout(() => {
      setSkill(event.target.value);
    }, 3000);
    // ✅ Set the selected radio value
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <p className="mb-4 font-semibold text-gray-800">Select an Option:</p>
      <div className="space-y-2">
        <label className="block">
          <input
            type="radio"
            name="myRadio"
            value="B.tech"
            onChange={handleChange}
            className="mr-2"
          />
          B.tech
        </label>
        <label className="block">
          <input
            type="radio"
            name="myRadio"
            value="BSC"
            onChange={handleChange}
            className="mr-2"
          />
          BSC
        </label>
        <label className="block">
          <input
            type="radio"
            name="myRadio"
            value="BA"
            onChange={handleChange}
            className="mr-2"
          />
          BA
        </label>
      </div>
      <h1 className="mt-4 text-blue-600">Selected: {skill || "None"}</h1>
    </div>
  );
};

export default RadioButton;
