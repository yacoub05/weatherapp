import React from "react";

function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/w/" +
    `${data.cod != 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div >
            <span >
              {data.name} , {data.sys.country}. 
            </span>
            <span >
              Weather as of {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {" "}
              {Math.floor((data.main.temp - 273)*9/5+32)}
              <sup>o</sup> {' F'}
            </h1>
            <span >{data.weather[0].main}</span>
            <img  src={iconurl} alt="" srcset="" />
            <span >
              {" "}
              {data.weather[0].description}
            </span>
          </div>
          <div >
            <div >
              <table>
                <tr>
                  <td>
                    <h4>High/Low:</h4>
                  </td>
                  
                  <td>
                    
                    <span>
                      {Math.floor((data.main.temp_max - 273.15)*9/5+32)}/
                      {Math.floor((data.main.temp_min - 273.15)*9/5+32)}
                    </span>
                  </td>
                </tr>
              
              </table>
            </div>

          </div>
        </React.Fragment>
      ) : (
        <div>
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;