import Header from "./Header"
import DetailPageButton from "./DetailPageButton";

export default function DetailPage(props) {
    const {themeChanger, darkMode, countryName, flagImageUrl, population, region, capital } = props;

    return(
        <body className={darkMode ? 'dark': 'light'}>
            <Header changeTheme = {themeChanger} darkMode = {darkMode}/>
        
            <button  className={darkMode ? 'backButton darkElement': 'backButton lightElement'}>
                <i class="fa-solid fa-arrow-left-long"></i> Back
            </button>
            
            <div className="detailsContainer">
                <div className = "bigFlag">
                    <img src = {flagImageUrl}></img>
                </div>

                <div className="detailsContent">
                    <div className="detail_name">
                        Belgium
                    </div>

                    <div className="contentcards">
                        <div className="contentCard">
                            <b>Native Name: </b><p>nameddd</p><br/>
                            <b>Poppulation: </b><p>39082</p><br/>
                            <b>Region: </b><p>eu</p><br/>
                            <b>Sub Region: </b><p>west eu</p><br/>
                            <b>Capital: </b><p>brussels</p><br/>
                        </div>
                        <div className="contentCard">
                            <b>Top Level Domain: </b><p>nameddd</p><br/>
                            <b>Currencies: </b><p>nameddd</p><br/>
                            <b>Languages: </b><p>nameddd</p><br/>
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

        </body>
    )
}