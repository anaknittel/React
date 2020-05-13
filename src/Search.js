import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("Lisbon");

  function handleCity(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let apiKey = "303348dda1fca23adb810a6d9945efb5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function getWeather(response) {
    console.log(response.data.main.temp);
  }

  axios.get(apiUrl).then(getWeather);

  return (
    <div>
      <form onSubmit={handleCity}>
        <input type="text" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div>
        <ul>
          <li>Temperature: 20ºC </li>
          <li>Description: rainy </li>
          <li>Humidity: 80% </li>
          <li>Wind: 4m/s </li>
          <li>Icon</li>
        </ul>
      </div>
    </div>
  );
}
