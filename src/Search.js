import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let apiKey = "303348dda1fca23adb810a6d9945efb5";

  let [cityName, setCityName] = useState("Lisbon");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  function handleSearch(event) {
    event.preventDefault();
    axios.get(apiUrl).then(getWeather);
  }

  function handleCityChange(event) {
    setCityName(event.target.value);
    console.log(event.target.value);
  }

  function getWeather(response) {
    props.setWeather(response.data);
    console.log(response.data);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <input type="text" onChange={handleCityChange} />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}
