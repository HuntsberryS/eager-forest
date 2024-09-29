import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=842b36d55cb28eba74a018029d56b04c&units=metric`;
    axios.get(url).then(showWeather);
    alert(`${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function Weather(props) {
    let [temp, setTemp] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [description, setDescription] = useState(null);
    let [wind, setWind] = useState(null);
    let [icon, setIcon] = useState(null);
    let [text, setText] = useState(null);

  function showWeather(response) {
    setTemp(Math.round(response.data.main.temp));
   setHumidity(Math.round(response.data.main.humidity));
      setDescription(response.data.weather[0].description);
      setWind(Math.round(response.data.wind.speed));
      setIcon(response.data.weather[0].icon);
   
      return (
        <div>
          <h1>Search Engine </h1>
          <form onSubmit={updateCity}>
            <input
              type="search"
              onChange={changeCity}
              placeholder="enter a city..."
            />
            <input type="submit" value="search" />
          </form>
          <ul>
            <li>Temperature: {temp}°C</li>
            <li>Description: {description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind}km/h</li>
            <li>Icon: {icon}</li>
          </ul>
        </div>
      );
    }
  }
}
