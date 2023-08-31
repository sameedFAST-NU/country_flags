import Header from "./Header";
import DetailPageButton from "./DetailPageButton";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function DetailPage(props) {
  const { themeChanger, darkMode } = props;
  const [country, setCountry] = useState([]);
  const [borderNames, setBorderNames] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/" + "alpha/BE")
      .then((response) => setCountry(response.data[0]))
      .catch((error) => console.error(error));
  }, []);

  const getNativeName = (native_Name) => {
    for (const key in native_Name) {
      return native_Name[key]["common"];
    }
  };
  const native_Name = getNativeName(country.name?.nativeName);

  const getCurrenciesList = (currencies) => {
    let currenciesList = [];
    for (const key in currencies) {
      currenciesList.push(currencies[key]["name"]);
      return currenciesList;
    }
  };
  const currencies = getCurrenciesList(country.currencies);

  const getLanguagesList = (languages) => {
    const languagesList = [];
    for (const key in languages) {
      languagesList.push(languages[key]);
    }
    return languagesList;
  };
  const languages = getLanguagesList(country.languages).toString();

  async function getBorderName(countryCode) {
    const apiLink = "https://restcountries.com/v3.1/" + "alpha/" + countryCode;
    try {
      const response = await axios.get(apiLink);
      const border_country = response.data[0];
      return border_country.name?.common;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function getBorderCountries(bordersList) {
    const promises = bordersList.map(getBorderName);
    const countryNames = Promise.all(promises);
    return countryNames;
  }
  useEffect(() => {
    getBorderCountries(country.borders)
      .then((names) => {
        setBorderNames(names);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    // "abc"
    <div className={darkMode ? "dark" : "light"}>
      <Header changeTheme={themeChanger} darkMode={darkMode} />

      <button
        className={
          darkMode ? "backButton darkElement" : "backButton lightElement"
        }
      >
        <i className="fa-solid fa-arrow-left-long"></i> Back
      </button>

      <div className="detailsContainer">
        <div className="bigFlag">
          <img src={country.flags?.png} alt={country.flags?.alt}></img>
        </div>

        <div className="detailsContent">
          <div className="detail_name">{country.name?.common}</div>

          <div className="contentcards">
            <div className="contentCard">
              <div className="detailText">
                <b>Native Name: </b>
                <p>{native_Name}</p>
                <br />
              </div>
              <div className="detailText">
                <b>Population: </b>
                <p>{country.population}</p>
                <br />
              </div>
              <div className="detailText">
                <b>Region: </b>
                <p>{country.region}</p>
                <br />
              </div>
              <div className="detailText">
                <b>Sub Region: </b>
                <p>{country.subregion}</p>
                <br />
              </div>
              <div className="detailText">
                <b>Capital: </b>
                <p>{country.capital}</p>
                <br />
              </div>
            </div>
            <div className="contentCard">
              <b>Top Level Domain: </b>
              <p>{country.tld}</p>
              <br />
              <b>Currencies: </b>
              <p>{currencies}</p>
              <br />
              <b>Languages: </b>
              <p>{languages}</p>
              <br />
            </div>
          </div>

          <div className="borders">
            <b>Border Countries: </b>
            {borderNames.map((name) => (
              <DetailPageButton darkMode={darkMode} label={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
