import React, { useState } from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Description from "./Description";

import "./styles.css";

function App() {
  let [weather, setWeather] = useState();
  return (
    <div>
      <h1>Weather App</h1>
      <Search setWeather={setWeather} />
      <p />
      <Description weather={weather} />
      <p />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
