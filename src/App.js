import DetailPage from './DetailPage';
import HomePage from './HomePage';
import React, { useState } from 'react';
import dotenv from "dotenv"
dotenv.config()

const URL = process.env.API
function App() {
  const[darkMode, setdarkMode] = useState(false);
  
  const 
  const changeTheme = () => setdarkMode(!darkMode)

  return( 
    <DetailPage themeChanger={changeTheme} darkMode = {darkMode} />
    //{/* <HomePage themeChanger ={changeTheme} darkMode = {darkMode}/> */}
  )
  
}

export default App;
