import { useState } from "react";
import "./country.css";
const Country = ({ country, handleMark }) => {
  const { name, flags, capital, region } = country;

  const [go, setGO] = useState(false);

  const handleGo = () => {
    setGO(!go);
  };

  return (
    <div className={`country ${go && "visited"}`}>
      <h2>Name: {name?.common}</h2>
      <h3>Region: {region}</h3>
      <h3>Official Name: {name.official}</h3>
      <h3>capital : {capital} </h3>
      <img src={flags.png} alt={flags.alt} />
      <button onClick={() => handleMark(country)}>mark</button>
      <button onClick={handleGo}>{go ? "visited" : "go"}</button>
    </div>
  );
};

export default Country;
