import axios from "axios";
import { useState } from "react";

const Header = ({ setData }) => {
  const [results, setResults] = useState([]);
  const [text, setText] = useState("");

  const handleSearch = (e) => {
    setText(e.target.value);
    const search = async () => {
      try {
        const res = await axios.get(
          `http://api.weatherapi.com/v1/search.json?key=94ad39343b674e80b9c70416231709&q=${e.target.value}`
        );
        setResults(res.data);
      } catch (error) {}
    };
    search();
  };

  const handleClick = async (lat, lon) => {
    try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=94ad39343b674e80b9c70416231709&q=${lat},${lon}&days=7`
      );
      setData(res.data);
    } catch (err) {}
    setText("");
    setResults([]);
  };

  return (
    <header>
      <form>
        <input
          type="text"
          placeholder="Search for cities"
          onChange={handleSearch}
          value={text}
        />
        <div className="results">
          {results &&
            results.map((res, index) => {
              return (
                <div
                  key={index}
                  className="result"
                  onClick={() => handleClick(res.lat, res.lon)}
                >
                  {res.name}
                </div>
              );
            })}
        </div>
      </form>
    </header>
  );
};

export default Header;
