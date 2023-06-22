import React, { useState } from "react";
import "./App.css";
import Countries from "./component/Countries";
import {
  useGetALlCountriesQuery,
} from "./features/apiSlice";
import Home from "./component/Home";

function App() {
  const {
    data: countriesData,
    isLoading,
    isError,
    error
  } = useGetALlCountriesQuery();
  // const [countries,setCountries]= useState(countriesData);
  // console.log(countries)
 

  return (
    <div>
     {/* <Search></Search> */}
      {countriesData && <Home countries={countriesData} />}
    </div>
  );
}

export default App;
