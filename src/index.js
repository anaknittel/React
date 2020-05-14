import React, { useState } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./styles.css";

function App() {
  let [weather, setWeather] = useState("Lisbon");

  return (
    <div>
      <h1>Weather App - </h1>
      <Weather setWeather={setWeather} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
