import "./Country.css";

const Country = ({ country }) => {
  const { name, flags } = country;
  return (
    <div className="country">
      <h3>Name: {name?.common} </h3>
      <div>
        <img src={flags.png} alt="" />
      </div>
    </div>
  );
};

export default Country;
