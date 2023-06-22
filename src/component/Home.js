import React, { useState } from "react";
import Countries from "./Countries";
import Search from "./Search";

const Home = ({ countries }) => {
  const [countryData, setCountryData] = useState(countries);
  const [filteredCountries, setFilteredCountries] = useState(countries);
//   console.log(countryData);
//   console.log(countryData);
const handleSearch=(search1)=>{
let value= search1.toLowerCase();
// console.log(value)
const newCountries= countryData.filter((country)=>{
    const name= country.name.toLowerCase();
    return name.startsWith(value);
});
setFilteredCountries(newCountries);
}
  return (
    <div>
       <Search onSearch={handleSearch}/>
      
      {countryData && <Countries countries={filteredCountries} />}
    </div>
  );
};

export default Home;
