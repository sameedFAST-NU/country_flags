import HomePage from './HomePage';
import React, { useState } from 'react';

function App() {
  const[isThemeDark, setIsThemeDark] = useState(false);

  const changeTheme = () => setIsThemeDark(!isThemeDark)
  return(
    <HomePage themeChanger ={changeTheme}/>
  )
  
}

export default App;
