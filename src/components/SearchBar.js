function SearchBar(props) {

    const newSearch = (event) => {
        let matchArray = props.products.filter(singleProduct => {
            return singleProduct.name.toLowerCase().includes(event.target.value.toLowerCase())
        });
        props.setFilteredProducts(matchArray);
    }

    return (
        <div>
            <h2>Search</h2>
            <label>Search</label>
            <input type="text" onChange={newSearch} />
        </div>
    );
}

export default SearchBar