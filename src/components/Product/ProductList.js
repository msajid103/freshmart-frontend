import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import API from "../../utils/api";

const ProductList = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get('/products')
        setproducts(response.data)       
      } catch (error) {
        console.log('error:', error)
      }
    }

    fetchData() 

  }, [])
  return (
    <div className="py-10">
      <div className="max-w-[80%] mx-auto sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Listing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <>
              <ProductCard key={product.id} product={product} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
