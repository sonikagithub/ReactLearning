import React, { useState } from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
  const [money, setMoney] = useState(10000);
  const [name, setName] = useState("Pooja");

  return (
    <MoneyContext.Provider value={{ money, name, setMoney, setName }}>
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
