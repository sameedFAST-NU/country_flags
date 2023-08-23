export default function SearchBar() {
    return(
        <div className="search">
            <input type="text" placeholder="Search for a Country..."></input>
            <select placeholder="Filter by Region">
                <option value="america">America</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}