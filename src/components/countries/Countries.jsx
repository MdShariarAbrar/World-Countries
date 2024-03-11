import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [mark, setMark] = useState([]);

  const handleMark = (country) => {
    setMark([...mark, country]);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div>
        <ul>
          {mark.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            handleMark={handleMark}
            country={country}
            key={country.cca3}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
