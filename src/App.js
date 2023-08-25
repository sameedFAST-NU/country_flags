import HomePage from './HomePage';
import React, { useState } from 'react';

function App() {
  const[darkMode, setdarkMode] = useState(false);

  const changeTheme = () => setdarkMode(!darkMode)

  return(
    <div className={darkMode ? 'dark': 'light'}>
      <HomePage themeChanger ={changeTheme} darkMode = {darkMode}/>
    </div>
  )
  
}

export default App;
