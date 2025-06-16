import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaAngleDown } from 'react-icons/fa';
import { getCartFromLocalStorage } from '../../localStorage';

const NavBar = () => {
    const cart = getCartFromLocalStorage()
    const [user, setUser] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdown] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        const savedUser = localStorage.getItem("user")
        setUser(JSON.parse(savedUser))
        setIsLoggedIn(!!token)
    }, [])
    const HandleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login");
    }

    const handleDropdown = () => {
        setIsDropdown(!isDropdownOpen);
    }

    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-4xl font-bold tracking-wide">FreshMart</h1>
                <form className="hidden md:flex">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="px-3 py-1 rounded-l-md text-gray-700 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-white text-red-700 px-3 py-1 rounded-r-md hover:bg-gray-100"
                    >
                        Search
                    </button>
                </form>

                {/* Right Section */}
                <Link to='/cart'>
                <button className="relative">
                    <FaShoppingCart size={20} />
                    <span className="absolute top-0 left-6 bg-green-500 text-xs text-white rounded-full px-1.5">
                        {cart.length}
                    </span>
                </button>
                </Link>
                <div className="flex items-center space-x-4">

                    {isLoggedIn ? (
                        <div className="flex items-center space-x-2">
                            <button onClick={handleDropdown} >
                                {/* < FaUser size={20} /> */}
                                {user && user.fullName}
                                </button>
                                {user?.isAdmin && (
                            <Link to="/admin">
                            <button className="text-white flex items-center">                                
                                Admin 
                                <FaAngleDown size={20} />                                
                            </button>
                            </Link>  
                                )}                            


                            {isDropdownOpen && (
                                <div
                                    className="absolute right-10 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg z-10"
                                    style={{ transform: "translateY(50px)" }} // Adjust this value to move the dropdown vertically
                                >
                                    <ul>
                                        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                            <a href="/">Profile</a>
                                        </li>
                                        <li
                                            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                            onClick={HandleLogout}
                                        >
                                            Logout
                                        </li>
                                    </ul>
                                </div>

                            )}                           

                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Link to="/login">
                                <button className="bg-white text-red-700  m-4 px-3 py-1 rounded-md hover:bg-gray-100">
                                    Login
                                </button>
                            </Link>
                            <Link to="/singup">
                                <button className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-500">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
