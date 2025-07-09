import React from "react";
function sum(a, b, operation) {
  if (operation == "+") {
    return a + b;
  } else if (operation == "-") {
    return a - b;
  } else {
    return a * b;
  }
}
const Curlybrakets = () => {
  return (
    <div>
      <h1>{sum(10, 20, "-")}</h1>
    </div>
  );
};

export default Curlybrakets;
