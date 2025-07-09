import React, { useEffect, useState } from "react";

const Useeffact = () => {
  const [text, setText] = useState("Mathura");

  useEffect(() => {
    document.title = `title is ${text}`;
  }, [text]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const api = await fetch("https://jsonplaceholder.typicode.com/todos/");
  //     const result = await api.json();
  //     console.log("fetching data is :", result);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className=" mt-5">
      <button onClick={() => setText("Goa")} className="bg-slate-400 p-5">
        Goa
      </button>
      <button onClick={() => setText("Delhi")} className="bg-slate-400 p-5">
        Delhi
      </button>
    </div>
  );
};

export default Useeffact;
