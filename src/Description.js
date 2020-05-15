import React from "react";

export default function Description(props) {
  if (props.weather == null) {
    return <p> Please Search for a City </p>;
  } else {
    let icon = props.weather.weather[0].icon;
    console.log(icon);
    return (
      <div>
        <ul>
          <li>Temperature: {props.weather.main.temp}ºC </li>
          <li>Description: {props.weather.weather[0].description}</li>
          <li>Humidity: {props.weather.main.humidity}% </li>
          <li>Wind: {props.weather.wind.speed}m/s</li>
          <li>
            icon:{" "}
            <img
              src="http://openweathermap.org/img/wn/${icon}d@2x.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    );
  }
}
