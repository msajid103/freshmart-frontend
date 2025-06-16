import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserInfo } from "../../localStorage"
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import API from "../../utils/api";


const ProductManagement = () => {
  const user = getUserInfo();
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    countInStock: "",
    image: null,
    productId: null, // Used for updates
  });
  const [isOpenForm, setisOpenForm] = useState(false);

  const fetchProducts = async () => {
    if (!user || !user.id) return;
    try {
      const response = await API.get(`/products/${user.id}`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const addOrUpdateProduct = async () => {
    const productData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      productData.append(key, value);
    });
    productData.append("userId", user.id);

    try {
      if (formData.productId) {
        // Update product
       await API.put(`/products/${formData.productId}`, productData);
      } else {
        // Add product
      await API.post("/products", productData);
      }
      fetchProducts();
      setFormData({
        name: "",
        description: "",
        price: "",
        countInStock: "",
        image: null,
        productId: null,
      });
      setisOpenForm(false);
    } catch (error) {
      console.error(
        `Error ${isOpenForm ? "updating" : "adding"} product:`,
        error
      );
    }
  };

  const editProduct = (product) => {
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      countInStock: product.countInStock,
      productId: product._id,
    });
    setisOpenForm(true);
  };
const addProduct = ()=>{
  setisOpenForm(true);
}
const closeForm = ()=>{
  setisOpenForm(false);
}
  const deleteProduct = async (id) => {
    try {
       await API.delete(`/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {!isOpenForm ? (
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={addProduct}
        >
          Add Product
        </button>
      ):
      (
        <button
          className="bg-red-500 text-white px-4 py-2"
          onClick={closeForm}
        >
          Close Form
        </button>
      )}

      <div className="mb-4">
        {isOpenForm && ( 
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Product Name"
              className="border p-2 w-full mb-2"
              onChange={handleChange}
            />
            <textarea
              name="description"
              value={formData.description}
              placeholder="Product Description"
              className="border p-2 w-full mb-2"
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              placeholder="Price"
              className="border p-2 w-full mb-2"
              onChange={handleChange}
            />
            <input
              type="number"
              name="countInStock"
              value={formData.countInStock}
              placeholder="Count In Stock"
              className="border p-2 w-full mb-2"
              onChange={handleChange}
            />
            <input type="file" onChange={handleFileChange} className="mb-2" />
            <button
              className="bg-blue-500 text-white px-4 py-2"
              onClick={addOrUpdateProduct}
            >
              {formData.productId ? 'Update Product' : "Add Product"}
            </button>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Your Products</h3>
        <ul>
          {products.map((item) => (<div
            key={item.id}
            className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            <div className="ml-4">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => editProduct(item)}
              >
                <FaPencilAlt size={20} />
              </button>
            </div>
            <div className="ml-4">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => deleteProduct(item._id)}
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;
