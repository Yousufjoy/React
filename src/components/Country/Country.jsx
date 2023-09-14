import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "not-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "green" }}>
        Name: {name?.common}{" "}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Code: {cca3}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Click to Visit"}
      </button>
      <br />
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.png);
        }}
      >
        Add Flag
      </button>
      <br />
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>

      <p>
        {visited
          ? "I have visited this country"
          : "I want to visit this country"}
      </p>
    </div>
  );
};

export default Country;
