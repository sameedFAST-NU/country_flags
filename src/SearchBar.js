import RegionFilterMenue from "./RegionFilter"
export default function SearchBar({region_handler,searchHandler, darkMode}) {
    function handleSearch(event) {
        if (event.key === 'Enter') {
            searchHandler(event.target.value)
        }
    }
    return(
        <div className="search">
            <div className={darkMode ? 'searchInput darkElement': 'searchInput lightElement'}>
                <i className="fas fa-search searchIcon"></i>
                <input className={darkMode ? 'darkElement': 'lightElement'} type="text" placeholder="Search for a Country..." onKeyDown={handleSearch}></input>
            </div>
            <RegionFilterMenue handleFilter={region_handler} darkMode = {darkMode}/>
        </div>
    )
}