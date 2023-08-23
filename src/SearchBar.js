import RegionFilterMenue from "./RegionFilter"
export default function SearchBar({region_handler,searchHandler}) {
    function handleSearch(event) {
        if (event.key === 'Enter') {
            searchHandler(event.target.value)
        }
    }
    return(
        <div className="search">
            <input type="text" placeholder="Search for a Country..." onKeyDown={handleSearch}></input>
            <RegionFilterMenue handleFilter={region_handler}/>
        </div>
    )
}