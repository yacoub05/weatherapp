import React, { useState } from 'react';
import {API_KEY} from '../apis/config.js'



import DisplayWeather from "./DisplayWeather";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });

 
  async function weatherData(e) {
    e.preventDefault();
    if (location.city === "") {
      alert("Enter a location");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&APPID=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setLocation({ ...location, city: value });
    }
    if (name === "country") {
      setLocation({ ...location, country: value });
    }
  };
  return (
    <div className="weather">
      <h1 className='title'>Check the weather today!</h1>
      <form>

      
        <input
          className = 'search-box'
          type="text"
          placeholder="Enter a location..."
          name="city"
          onChange={(e) => handleChange(e)}
        />
        
        <button className = 'button' onClick={(e) => weatherData(e)}>
          Search
        </button>
      </form>
<div className='infobox'>
      {/* {console.log(weather)} */}
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
  </div>
    </div>
  );
}

export default Weather;
