import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutScreen = () => {
    const { state } = useLocation();
    const navigate = useNavigate()
    const { cartItems, totalPrice } = state.products;
    console.log('state', state)
    const handleOrder = async () => {
        
            alert("Oder Placed successfully.");
            navigate('/')

        
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-semibold mb-8 text-center">Checkout</h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex justify-between mb-4">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="text-lg font-semibold">
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>
                     <button
                            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={() => handleOrder("Payment on Delivery")}
                        >
                            Confirm
                        </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutScreen;
