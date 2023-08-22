import CountryCard from './CountryCard';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => setCountries(response.data))
    .catch(error => console.error(error))
  })

  return <body>
    <Header/>
    <div className='cardsContainer'>
      {
        countries.map((country) => (
          <div className='card'>
          <CountryCard
          countryName = {country.name.official}
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

export default App;
