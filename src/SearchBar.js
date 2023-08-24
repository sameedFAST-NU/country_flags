import RegionFilterMenue from "./RegionFilter"
export default function SearchBar({region_handler,searchHandler}) {
    function handleSearch(event) {
        if (event.key === 'Enter') {
            searchHandler(event.target.value)
        }
    }
    return(
        <div className="search">
            <div className="searchInput">
                <i className="fas fa-search searchIcon"></i>
                <input type="text" placeholder="Search for a Country..." onKeyDown={handleSearch}></input>
            </div>
            <RegionFilterMenue handleFilter={region_handler}/>
        </div>
    )
}