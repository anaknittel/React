import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  return (
    <div>
      <form onSubmit={handleCity}>
        <input type="text" placeholder="Change City" onSubmit={updateInput} />
        <input type="submit" value="Search" />
      </form>
      <p> {city} </p>
    </div>
  );

  function handleCity(event) {
    event.preventDefault();
    return <p> {city} </p>;
  }
  function updateInput(event) {
    setCity(event.target.value);
    console.log(city);
  }
}
