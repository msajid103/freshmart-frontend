import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../utils/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await API.post("/auth/register", {
        fullName: name,
        email,
        password,
      });

      setMessage(response.data.message); // e.g., "User registered successfully."

      if (response.data.message.includes("successfully")) {
        setTimeout(() => navigate("/login"), 2000); // Redirect after success
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1438530555/photo/empty-charcuterie-small-business-concepts.jpg?s=1024x1024&w=is&k=20&c=lX3t64iBj40us2MRy1pif6PaJL4FaU30R4rOR4Q78_4=')",
      }}
    >
      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-60">
        <div className="bg-gray-900 text-white p-12 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-4xl font-semibold text-center mb-6 text-red-600">
            Sign Up
          </h2>
          {message && (
            <div
              className={`mb-4 text-center p-2 rounded-lg ${message.includes("successfully")
                  ? "bg-green-500"
                  : "bg-red-500"
                }`}
            >
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 mt-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 mt-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 mt-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 mt-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
            >
              Sign Up
            </button>
            <div className="mt-4 text-center">
              <span className="text-gray-300">Already have an account? </span>
              <Link to="/login" className="text-red-600 hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
