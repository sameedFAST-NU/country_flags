import RegionFilterMenue from "./RegionFilter"
export default function SearchBar({region_handler}) {
    return(
        <div className="search">
            <input type="text" placeholder="Search for a Country..." onInput='handleSearch()'></input>
            <RegionFilterMenue handleFilter={region_handler}/>
        </div>
    )
}