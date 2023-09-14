import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) => {
      res.json().then((data) => {
        setCountries(data);
      });
    });
  }, []);

  const handleVisitedCountry = (country) => {
    console.log({ country });
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };

  return (
    <div>
      <h1>Countries {countries.length}</h1>
      <ul>
        {visitedCountry.map((country) => {
          return <li key={country.cca3}> {country.name.common}</li>;
        })}
      </ul>
      <h3>Visited Countries : {visitedCountry.length}</h3>
      <div className="country-container">
        {countries.map((country) => {
          return (
            <Country
              key={country.cca3}
              country={country}
              handleVisitedCountry={handleVisitedCountry}
            ></Country>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
