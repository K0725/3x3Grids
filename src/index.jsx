import React, { useState } from "react";
import "./assets/css/index.css";

import { render } from "react-dom";

import { ExportToExcel } from "./components/buttons/ExcelDownload";
import GameComponent from "./components/game";
import ResultComponent from "./components/result";

function App() {
  const [counter, setCounter] = useState(1);
  const [res, setRes] = useState(false);
  const [counterArray, setCounterArray] = useState();

  const change = (e) => {
    e.preventDefault()
    setCounter(counter + 1);
    e.target.setAttribute("src", "./images/plain-white-background.jpg");
    e.target.setAttribute("alt", "dog");
  };

  const result = (e) => {
    e.preventDefault()
    setRes(true);
    setCounterArray([{ Attempts: counter, ImageID: e?.currentTarget?.id }]);
  };

  if (res) {
    return (
      <>
        <ExportToExcel finalDataDetail={counterArray} />
        <ResultComponent counter={counter} />
      </>
    );
  } else {
    return <GameComponent row={3} change={change} result={result} />;
  }
}

render(<App />, document.getElementById("app"));
