import React, { useState } from "react";
import API from "./component/API";
import "./component/App.css";
import Searchbox from "./component/Searchbox";
import WeatherResult from "./component/WeatherResult";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
          setQuery("");
        });
    }
  };

  return (
    <div className={typeof weather != "undefined" ? "container" : ""}>
      <Searchbox search={search} query={query} setQuery={setQuery} />

      {typeof weather.main != "undefined" ? (
        <WeatherResult weather={weather} />
      ) : (
        <div className="city">
          <h1>Enter your city</h1>
        </div>
      )}
    </div>
  );
}

export default App;
