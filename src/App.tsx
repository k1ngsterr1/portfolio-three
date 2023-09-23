import React from "react";
import Header from "./components/Header/Header";

import { Fade } from "react-awesome-reveal";
import MainBlock from "./blocks/MainBlock";

function App() {
  return (
    <div className="App">
      <div className=" mx-auto custom-container-width">
        <Header></Header>
        <div className="w-full mx-auto ">
          <MainBlock></MainBlock>
        </div>
      </div>
    </div>
  );
}

export default App;
