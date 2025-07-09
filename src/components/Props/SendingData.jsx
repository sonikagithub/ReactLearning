import React from "react";

const SendingData = ({ name, User, name1 }) => {
  console.log(name);
  console.log(User);
  console.log(name1);
  return (
    <div>
      {name}
      <div>{User.name}</div>
      <div>{User.age}</div>
      <div>{User.collage}</div>
      {name1}
    </div>
  );
};

export default SendingData;
