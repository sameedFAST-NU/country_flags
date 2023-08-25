import Header from "./Header"
export default function DetailPage(props) {
    const {themeChanger, darkMode, countryName, flagImageUrl, population, region, capital } = props;

    return(
        <body className={darkMode ? 'dark': 'light'}>
            <Header changeTheme = {themeChanger} darkMode = {darkMode}/>
            <div className="">
                <button id='backButton' className={darkMode ? 'darkElement': 'lightElement'}>
                <i class="fa-solid fa-arrow-left-long"></i> Back
                </button>
            </div>
            <div className="detailsContainer">
                <div className = "bigFlag">
                    <img src = {flagImageUrl}></img>
                </div>

                <div className="detailsContent">
                    <div className="detail_name">
                        Belgium
                    </div>
                </div>
            </div>

        </body>
    )
}