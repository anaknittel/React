import React from "react";

export default function Description(props) {
  if (props.weather == null) {
    return <p> Please Search for a City... </p>;
  } else {
    let temperature = Math.round(props.weather.main.temp * 10) / 10;
    return (
      <div>
        <ul>
          <li>Temperature: {temperature}ºC</li>
          <li>Description: {props.weather.weather[0].description}</li>
          <li>Humidity: {props.weather.main.humidity}%</li>
          <li>Wind: {props.weather.wind.speed}m/s</li>
          <li>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${
                  props.weather.weather[0].icon
                }@2x.png`}
                alt={props.weather.weather[0].description}
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
