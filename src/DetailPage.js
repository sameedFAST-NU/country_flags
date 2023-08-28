import Header from "./Header"
import DetailPageButton from "./DetailPageButton";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function DetailPage(props) {
    const {themeChanger, darkMode} = props;
    const [country, setCountry] = useState([])

    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/alpha/BE")
        .then(response => setCountry(response.data[0]))
        .catch(error => console.error(error))
    },[])
    
    const getNativeName = (native_Name) => {for (const key in native_Name) {
        return native_Name[key]["common"];
    }}
    const native_Name = getNativeName(country.name?.nativeName)

    const getCurrenciesList = (currencies) => {
        let currenciesList = []
        for (const key in currencies) {
            currenciesList.push(currencies[key]["name"])
        
        return currenciesList
    }}
    const currencies = getCurrenciesList(country.currencies).toString();

    const getLanguagesList = (languages) => {
        let languagesList = []
        for (const key in languages) {
            languagesList.push(languages[key])
            console.log(languages[key])
        }    
        return languagesList
    }}
    const languages = getLanguagesList(country.languages).toString();

    return(
        
        <div className={darkMode ? 'dark': 'light'}>
            <Header changeTheme = {themeChanger} darkMode = {darkMode}/>
        
            <button  className={darkMode ? 'backButton darkElement': 'backButton lightElement'}>
                <i className="fa-solid fa-arrow-left-long"></i> Back
            </button>
            
            <div className="detailsContainer">
                <div className = "bigFlag">
                    <img src = {country.flags?.png} alt={country.flags?.alt}></img>
                </div>

                <div className="detailsContent">
                    <div className="detail_name">
                        {country.name?.common}
                    </div>

                    <div className="contentcards">
                        <div className="contentCard">
                            <b>Native Name: </b><p>{native_Name}</p><br/>
                            <b>Population: </b><p>{country.population}</p><br/>
                            <b>Region: </b><p>{country.region}</p><br/>
                            <b>Sub Region: </b><p>{country.subregion}</p><br/>
                            <b>Capital: </b><p>{country.capital}</p><br/>
                        </div>
                        <div className="contentCard">
                            <b>Top Level Domain: </b><p>{country.tld}</p><br/>
                            <b>Currencies: </b>
                            {currencies}

                            <br/>
                            <b>Languages: </b><p>{languages}</p><br/>
                        </div>
                    </div>

                    <div className="borders">
                        <b>Border Countries: </b> 
                        <DetailPageButton darkMode={darkMode} label={'France'}/>
                        <DetailPageButton darkMode={darkMode} label={'Germany'}/>
                        <DetailPageButton darkMode={darkMode} label={'Poland'}/>
                    </div>
                </div>
            </div>

        </div>
    )
}