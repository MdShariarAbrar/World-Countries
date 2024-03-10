import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="countries">
      {countries.map((country) => (
        <Country country={country} key={country.cca3}></Country>
      ))}
    </div>
  );
};

export default Countries;
