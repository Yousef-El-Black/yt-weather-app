import React from "react";

const Forecast = ({ data }) => {
  const day = 1000 * 60 * 60 * 24;

  return (
    <div className="forecast">
      <h3 className="head">7-day forecast</h3>
      <div className="table">
        {data &&
          data.forecast.forecastday.map((item, index) => {
            return (
              <div className="item" key={index}>
                <span>
                  {index === 0
                    ? "Today"
                    : new Date(Date.now() + index * day)
                        .toString()
                        .split(" ")[0]}
                </span>
                <div className="condition">
                  <img src={item.day.condition.icon} alt="Icon" />
                  <p>{item.day.condition.text}</p>
                </div>
                <p className="temp">
                  {item.day.maxtemp_c.toFixed()}
                  <span>/{item.day.mintemp_c.toFixed()}</span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Forecast;
