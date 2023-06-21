function SearchBar(props) {
    return (
        <div className="SearchBar">
            <label className="Input">
                Search
                <input
                    type="text"
                    name="search"
                    value={props.search}
                    onChange={props.searchInput}
                    placeholder="Search"
                />
            </label>
        </div>
    )

}

export default SearchBar