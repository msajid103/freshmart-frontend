import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    navigate('/checkout',{ state:{products:state, formData} })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Billing Address */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Billing Address</h2>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">Full name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                placeholder="Enter address"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                placeholder="Enter city"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                  required
                >
                  <option value="">Choose State</option>
                  <option value="California">Punjab</option>
                  <option value="New York">Sindth</option>
                  <option value="Texas">Balochistan</option>                 
                  <option value="Texas">KPK</option>                 
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                  placeholder="Zip code"
                  required
                />
              </div>
            </div>
          </div>

      
          <div>
            <h2 className="text-2xl font-bold mb-4">Payment</h2>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">Accepted Cards</label>
              <div className="flex space-x-2 mt-2">
                <img
                  src="https://img.icons8.com/color/48/visa.png"
                  alt="Visa"
                  className="h-10"
                />
                <img
                  src="https://img.icons8.com/color/48/mastercard.png"
                  alt="MasterCard"
                  className="h-10"
                />
                <img
                  src="https://img.icons8.com/color/48/amex.png"
                  alt="Amex"
                  className="h-10"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">
                Credit Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                placeholder="Enter card number"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block font-medium text-gray-700">Exp Month</label>
                <input
                  type="number"
                  name="expMonth"
                  value={formData.expMonth}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                  placeholder="MM"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">Exp Year</label>
                <select
                  name="expYear"
                  value={formData.expYear}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                  required
                >
                  <option value="">Choose Year</option>
                  {Array.from({ length: 20 }, (_, i) => 2023 + i).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button        
          type="submit"
          className="w-full bg-red-500 text-white font-bold py-2 mt-6 rounded-lg hover:bg-red-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
