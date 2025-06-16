import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { getCartFromLocalStorage, saveCartToLocalStorage } from "../../localStorage";

const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
        const currentCart = getCartFromLocalStorage();
        const updatedCart = [...currentCart, { ...product, quantity: 1 }];
        saveCartToLocalStorage(updatedCart);

        alert(`${product.name} has been added to your cart!`);
    };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                </h3>
                <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                <button
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                    onClick={handleAddToCart}
                >
                    <FaShoppingCart size={20} />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
