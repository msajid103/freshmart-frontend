import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you use React Router
import { FaTrashAlt } from "react-icons/fa";
import { getCartFromLocalStorage, saveCartToLocalStorage } from "../localStorage";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    setCartItems(getCartFromLocalStorage());
  }, []);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkoutform", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8 text-center">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500">
            Your cart is empty. Start shopping!
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="col-span-3">
              {cartItems.map((item) => (
                <div
                  key={item._id}
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
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="ml-4">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeItem(item._id)}
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <p className="text-gray-500 mb-4">
                Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </p>
              <p className="text-lg font-semibold">
                Total Price: ${totalPrice.toFixed(2)}
              </p>
              <button
                className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
