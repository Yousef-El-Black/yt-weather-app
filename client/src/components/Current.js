import React from "react";

const Current = ({ data }) => {
  return (
    <div className="current">
      <div className="info">
        <div className="text">
          <div className="head">
            <h1>{data && data.location.name}</h1>
            <span>Chance of rain: 0%</span>
          </div>
          <h2>{data && data.current.temp_c.toFixed()}°</h2>
        </div>
        <div className="image">
          <img
            src={
              data && data.current.condition.icon && data.current.condition.icon
            }
            alt="Icon"
          />
        </div>
      </div>
      <div className="today">
        <div className="head">
          <h3>Today's Forecast</h3>
        </div>
        <div className="table">
          <div className="item">
            <h4>6:00 AM</h4>
            <img
              src={
                data &&
                data.forecast.forecastday[0].hour[6].condition.icon &&
                data.forecast.forecastday[0].hour[6].condition.icon
              }
              alt="Icon"
            />
            <span>
              {data && data.forecast.forecastday[0].hour[6].temp_c.toFixed()}°
            </span>
          </div>
          <div className="item">
            <h4>9:00 AM</h4>
            <img
              src={
                data &&
                data.forecast.forecastday[0].hour[9].condition.icon &&
                data.forecast.forecastday[0].hour[9].condition.icon
              }
              alt="Icon"
            />
            <span>
              {data && data.forecast.forecastday[0].hour[9].temp_c.toFixed()}°
            </span>
          </div>
          <div className="item">
            <h4>12:00 PM</h4>
            <img
              src={
                data &&
                data.forecast.forecastday[0].hour[12].condition.icon &&
                data.forecast.forecastday[0].hour[12].condition.icon
              }
              alt="Icon"
            />
            <span>
              {data && data.forecast.forecastday[0].hour[12].temp_c.toFixed()}°
            </span>
          </div>
          <div className="item">
            <h4>3:00 PM</h4>
            <img
              src={
                data &&
                data.forecast.forecastday[0].hour[15].condition.icon &&
                data.forecast.forecastday[0].hour[15].condition.icon
              }
              alt="Icon"
            />
            <span>
              {data && data.forecast.forecastday[0].hour[15].temp_c.toFixed()}°
            </span>
          </div>
          <div className="item">
            <h4>6:00 PM</h4>
            <img
              src={
                data &&
                data.forecast.forecastday[0].hour[18].condition.icon &&
                data.forecast.forecastday[0].hour[18].condition.icon
              }
              alt="Icon"
            />
            <span>
              {data && data.forecast.forecastday[0].hour[18].temp_c.toFixed()}°
            </span>
          </div>
          <div className="item">
            <h4>9:00 PM</h4>
            <img
              src={
                data &&
                data.forecast.forecastday[0].hour[21].condition.icon &&
                data.forecast.forecastday[0].hour[21].condition.icon
              }
              alt="Icon"
            />
            <span>
              {data && data.forecast.forecastday[0].hour[21].temp_c.toFixed()}°
            </span>
          </div>
        </div>
      </div>
      <div className="air">
        <div className="head">
          <h3>Air Conditions</h3>
        </div>
        <div className="table">
          <div className="item">
            <div className="key">
              <img src="/assets/images/sun.png" alt="Sunny" />
              <h4>Real Feel</h4>
            </div>
            <span className="value">
              {data && data.current.feelslike_c.toFixed()}°
            </span>
          </div>
          <div className="item">
            <div className="key">
              <img src="/assets/images/sun.png" alt="Sunny" />
              <h4>Wind</h4>
            </div>
            <span className="value">{data && data.current.wind_kph} Km/h</span>
          </div>
          <div className="item">
            <div className="key">
              <img src="/assets/images/sun.png" alt="Sunny" />
              <h4>Chance of rain</h4>
            </div>
            <span className="value">0%</span>
          </div>
          <div className="item">
            <div className="key">
              <img src="/assets/images/sun.png" alt="Sunny" />
              <h4>UV Index</h4>
            </div>
            <span className="value">{data && data.current.uv}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;
