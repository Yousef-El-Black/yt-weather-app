import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    navigator.geolocation.watchPosition((res) => {
      setPlace(res);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=94ad39343b674e80b9c70416231709&q=${place.coords.latitude},${place.coords.longitude}&days=7`
        );
        setData(res.data);
      } catch (err) {}
    };
    place && fetchData();
  }, [place]);

  return (
    <div className="App">
      <div className="container">
        <Header setData={setData} />
        <div className="content">
          <Current data={data} />
          <Forecast data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
