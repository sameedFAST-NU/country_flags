export default function RegionFilterMenue({handleFilter, darkMode}) {
    
    return(
        <select className={darkMode ? 'darkElement': 'lightElement'} onChange={(event) => handleFilter(event.target.value)}>
            <option value="all">All</option>
            <option value="americas">Americas</option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}