import React, { useContext } from "react";
import MoneyContext from "./MoneyContext";

const People = () => {
  const { money, name, setMoney, setName } = useContext(MoneyContext);

  const handleChange = () => {
    setMoney((prev) => prev + 1000);
    const names = ["Priya", "Sehar", "Rani", "Mahima", "Sheela"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setName(randomName);
  };

  const Hello = ["Priya", "Sehar", "Rani", "Mahima", "Sheela"];

  return (
    <div>
      <h1>
        Money = {money} Name = {name}
      </h1>
      <button
        onClick={handleChange}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Change Name & Money
      </button>
      <div>
        {Hello.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default People;
