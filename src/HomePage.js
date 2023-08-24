import CountryCard from './CountryCard';
import Header from './Header';
import SearchBar from './SearchBar';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function HomePage({themeChanger}) {
    const [countries, setCountries] = useState([])

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => setCountries(response.data))
    .catch(error => console.error(error))
  },[])

  function filteredCountries(region){
    const apiLink = "https://restcountries.com/v3.1/region/" + region
    axios.get(apiLink)
    .then(response => setCountries(response.data))
    .catch(error => console.error(error))
    
  }
  function searchCountries(name){
    const apiLink = "https://restcountries.com/v3.1/name/" + name
    axios.get(apiLink)
    .then(response => setCountries(response.data))
    .catch(error => console.error(error))
  }
  return <body>
    <Header changeTheme = {themeChanger}/>
    <SearchBar region_handler={filteredCountries} searchHandler={searchCountries}/>
    <div className='cardsContainer'>
      {
        countries.map((country) => (
          <div className='card'>
          <CountryCard
          countryName = {country.name.common}
          population = {country.population}
          flagImageUrl = {country.flags.png}
          region = {country.region}
          capital = {country.capital}
          />
        </div>
        ))
      }
    
    </div>
  </body> 
}