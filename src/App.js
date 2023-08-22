import CountryCard from './CountryCard'; 
function App() {
  return <body>
    <div className='cardsContainer'>
    <div className='card'>
      <CountryCard
      countryName = "Islamic Republic of Pakistan"
      population = "241,490,000"
      flagImageUrl = "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
      region = "Subcontinent"
      capital = "Islamabad"/>
    </div>
    <div className='card'>
      <CountryCard
      countryName = "Islamic Republic of Pakistan"
      population = "241,490,000"
      flagImageUrl = "https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
      region = "Subcontinent"
      capital = "Islamabad"
      />
      </div>
      </div>
  </body> 
}

export default App;
