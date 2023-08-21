export default function CountryCard(props) {
    const { countryName, flagImageUrl, population, region, capital } = props;
    return(
        <div className="card">
            <img src={flagImageUrl} 
            alt="">
            </img>

            <p className="CountryName">{countryName}</p><br/>
            <div className="cardText">
            
            <b>Poppulation: </b><p>{population}</p><br/>
            <b>Region: </b><p>{region}</p><br/>
            <b>Capital: </b><p>{capital}</p><br/>
            </div>
        </div>
    );

}