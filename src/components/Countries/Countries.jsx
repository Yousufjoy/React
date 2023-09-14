import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) => {
      res.json().then((data) => {
        setCountries(data);
      });
    });
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  // Remove item from an array in a state
  // use filter to select all the elements except the one you want to remove

  return (
    <div>
      <h1>Countries {countries.length}</h1>
      {/*Visited Country */}
      <div>
        <ul>
          {visitedCountry.map((country) => {
            return <li key={country.cca3}> {country.name.common}</li>;
          })}
        </ul>
      </div>
      <h3>Visited Countries : {visitedCountry.length}</h3>

      <div className="flag-container">
        {visitedFlags.map((flag, index) => {
          return <img key={index} src={flag} alt="" />;
        })}
      </div>
      {/* Display Countries */}
      <div className="country-container">
        {countries.map((country) => {
          return (
            <Country
              key={country.cca3}
              country={country}
              handleVisitedCountry={handleVisitedCountry}
              handleVisitedFlags={handleVisitedFlags}
            ></Country>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
