import React from "react";
import Home from "./components/Home";
import Useeffact from "./components/Useeffact";
import UseLayoutEffact from "./components/UseLayoutEffact";
import People from "./components/UseContext/People";

import DefExpAnExp from "./components/ImportExport/DefExpAnExp";
import {
  Rental,
  Colors,
  Profile,
  TargetKey,
} from "./components/ImportExport/DefExpAnExp";
import Curlybrakets from "./components/CurlyBrakets/Curlybrakets";
import ModalOpening from "./components/ModalOpening";
import ConditionRendering from "./components/ConditionRendering";
import SendingData from "./components/Props/SendingData";
import InputClear from "./components/Tasks/InputClear";
import Formsubmmition from "./components/Tasks/Formsubmmition";
import Checkboxes from "./components/Tasks/Checkboxes";
import RadioButton from "./components/Tasks/RadioButton";
import Dropdown from "./components/Tasks/Dropdown";
import MapArray from "./components/Tasks/MapArray";
import CheckArray from "./components/Tasks/CheckArray";
import Login from "./components/Tasks/Login";
import Alert from "./components/Tasks/Alert";
const App = () => {
  // let UserName = "Harikesh Tiwari";
  // let collage = ["bbdu", "nit", "srmu", "goel"];
  // let person1 = {
  //   name: "shivam",
  //   age: "24",
  //   collage: "SRMU",
  // };
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Hooks  */}
        {/* <Home />
        <Useeffact />
        <UseLayoutEffact />
        <People /> */}

        {/* Import Export concepts  */}
        {/* <DefExpAnExp />
        <Rental />
        <Colors />
        <Profile />
        {TargetKey} */}

        {/* curly braket  */}
        {/* <Curlybrakets /> */}

        {/* Hide and show of component */}
        {/* <ModalOpening /> */}

        {/* ternery conditions */}
        {/* <ConditionRendering /> */}

        {/* props Concepts  collage- pass as an array, person1-pass as an object, UserName-pass as a variable */}
        {/* <SendingData name={collage} User={person1} name1={UserName} /> */}

        {/* input,form tasks */}
        {/* <InputClear /> */}
        {/* <Formsubmmition /> */}
        {/* <Checkboxes /> */}
        {/* <RadioButton /> */}
        {/* <Dropdown /> */}
        {/* <MapArray />
        <CheckArray /> */}
        {/* <Login /> */}
        <Alert />
      </div>
    </>
  );
};

export default App;
