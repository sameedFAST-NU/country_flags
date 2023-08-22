import CountryCard from './CountryCard';
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
    <div className='cardsContainer'>
      {
        countries.map((country) => (
          <div className='card'>
          <CountryCard
          countryName = {country.name.official}
          population = {country.population}
          flagImageUrl = "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
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
