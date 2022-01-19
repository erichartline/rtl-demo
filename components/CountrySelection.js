import React from "react";
import CitiesList from "./CitiesList";

const CountrySelection = () => {
  const [country, setCountry] = React.useState("USA");

  return (
    <>
      <h2>Most Populous Cities by Country</h2>
      <div>
        <button onClick={() => setCountry("USA")}>USA</button>
        <button onClick={() => setCountry("Mexico")}>Mexico</button>
        <button onClick={() => setCountry("Canada")}>Canada</button>
        <button onClick={() => setCountry("Atlantis")}>Atlantis</button>
      </div>
      <CitiesList country={country} />
    </>
  );
};

export default CountrySelection;
