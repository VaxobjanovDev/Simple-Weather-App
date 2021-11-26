import React from "react";
import { dateNow } from "./GetDate";

const WeatherResult = ({ weather }) => {
  return (
    <>
      <div className="main">
        <div className="location-box">
          <h2 className="location">
            {weather.name},{weather.sys.country}
          </h2>
          <p className="date">{dateNow(new Date())}</p>
        </div>
        <div className="weather-box">
          <h1 className="temp">{Math.round(weather.main.temp)}°C</h1>
          <p className="weather">{weather.weather[0].main}</p>
          <img
            className="img-icon"
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="icon"
          />
        </div>
      </div>
    </>
  );
};

export default WeatherResult;
