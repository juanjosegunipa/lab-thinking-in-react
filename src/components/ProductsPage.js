// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [filteredProducts, setFilteredProducts] = useState(jsonData);

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
            <ProductTable filteredProducts={filteredProducts} />
        </div>
    )
}

export default ProductsPage