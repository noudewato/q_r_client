// src/components/ProductSearch.js
import { useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../service/ApiEndpoint';

const ProductSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async (searchText) => {
    try {
      const response = await axios.get(`${BaseUrl}/product/search?searchText=${searchText}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    handleSearch(text);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search for products..."
      />
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
