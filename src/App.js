import DetailPage from './DetailPage';
import HomePage from './HomePage';
import React, { useState } from 'react';

function App() {
  const[darkMode, setdarkMode] = useState(false);

  const changeTheme = () => setdarkMode(!darkMode)

  return(
    <div className={darkMode ? 'dark': 'light'}>
      {/* <HomePage themeChanger ={changeTheme} darkMode = {darkMode}/> */}
      <DetailPage themeChanger={changeTheme} darkMode = {darkMode} 
      flagImageUrl = "https://flagcdn.com/w2560/be.png"/>
    </div>
  )
  
}

export default App;
