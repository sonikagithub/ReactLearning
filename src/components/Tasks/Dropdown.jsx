import React, { useState } from "react";

const Dropdown = () => {
  const [fruit, setFruit] = useState("");
  const handleChange = (e) => {
    setFruit(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <label>
        Pick a Fruit:
        <select
          className="border-lime-300"
          value={fruit}
          onChange={handleChange}
        >
          <option>---Select---</option>
          <option value={"Apple"}>Apple</option>
          <option value={"Banana"}>Banana</option>
          <option value={"Grapes"}>Grapes</option>
          <option value={"Lichi"}>Lichi</option>
        </select>
      </label>
      <h1>{fruit}</h1>
    </div>
  );
};

export default Dropdown;
