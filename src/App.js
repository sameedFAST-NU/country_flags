import DetailPage from "./DetailPage";
import HomePage from "./HomePage";
import React, { useState } from "react";

const URL = process.env.API;
function App() {
  const [darkMode, setdarkMode] = useState(false);

  const changeTheme = () => setdarkMode(!darkMode);

  return (
    <DetailPage themeChanger={changeTheme} darkMode={darkMode} />
    //{/* <HomePage themeChanger ={changeTheme} darkMode = {darkMode}/> */}
  );
}

export default App;
