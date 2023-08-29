import CountryCard from './CountryCard';
import Header from './Header';
import SearchBar from './SearchBar';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const URL = process.env.API
export default function HomePage({themeChanger, darkMode}) {
    const [countries, setCountries] = useState([])

  useEffect(()=>{
    axios.get(URL + "all")
    .then(response => setCountries(response.data))
    .catch(error => console.error(error))
  },[])

  function filteredCountries(region){
    const apiLink =URL + "region/" + region
    axios.get(apiLink)
    .then(response => setCountries(response.data))
    .catch(error => console.error(error))
    
  }
  function searchCountries(name){
    const apiLink = URL + "name/" + name
    axios.get(apiLink)
    .then(response => setCountries(response.data))
    .catch(error => console.error(error))
  }
  return <body>
    <Header changeTheme = {themeChanger} darkMode = {darkMode}/>
    <SearchBar region_handler={filteredCountries} searchHandler={searchCountries} darkMode = {darkMode}/>
    <div className='cardsContainer'>
      {
        countries.map((country) => (
          <div className={darkMode ? 'card darkElement': 'card lightElement'}>
          <CountryCard
          countryName = {country.name.common}
          population = {country.population}
          flagImageUrl = {country.flags.png}
          region = {country.region}
          capital = {country.capital}
          darkMode = {darkMode}
          />
        </div>
        ))
      }
    
    </div>
  </body> 
}