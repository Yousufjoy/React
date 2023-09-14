import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? "visited" : "not-visited"}`}>
      <h3>Name: {name?.common} </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Code: {cca3}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Click to Visit"}
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
