import "./country.css";
const Country = ({ country }) => {
  const { name, flags, capital, region } = country;

  return (
    <div className="country">
      <h2>Name: {name?.common}</h2>
      <h3>Region: {region}</h3>
      <h3>Official Name: {name.official}</h3>
      <h3>capital : {capital} </h3>
      <img src={flags.png} alt={flags.alt} />
    </div>
  );
};

export default Country;
