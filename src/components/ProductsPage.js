import { useState } from 'react';
import jsonData from './../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState('');
    const [inStock, setInStock] = useState(false);

    const handleSearchInput = (e) => setSearch(e.target.value);
    const handleStockInput = (e) => setInStock(e.target.checked);

    return (
        <div>
            <h1>IronStore   </h1>

            <SearchBar
                search={search}
                searchInput={handleSearchInput}
                inStock={inStock}
                stockInput={handleStockInput}
            />
            <ProductTable products={products} />

        </div>
    )
}
export default ProductsPage