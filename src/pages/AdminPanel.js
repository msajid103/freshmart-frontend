import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import UserManagement from "../components/Admin/UserManagement";
import ProductManagement from "../components/Admin/ProductManagement";
import Dashboard from "../components/Admin/Dashboard";
import OrderManagement from "../components/Admin/OrderManagement";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();

  const getPageTitle = () => {
    switch (activeSection) {
      case "dashboard":
        return "Dashboard";
      case "manageUsers":
        return "Manage User Accounts";
      case "manageProducts":
        return "Manage Products";     
      case "manageOrders":
        return "Manage Orders";
      default:
        return "Admin Panel";
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "manageUsers":
        return <UserManagement />;
      case "manageProducts":
        return <ProductManagement />;
      case "manageOrders":
        return <OrderManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen">    
      <div className="bg-gray-800 text-white w-64 flex flex-col">
        
        <div className="p-4 flex  text-2xl font-bold border-b border-gray-700">
        <button
            className="text-light-500 hover:text-red-700 pr-4"
            onClick={() => navigate('/')}
          >
            <IoArrowBack size={24} />
          </button>
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <button
            className={`w-full text-left p-2 rounded ${
              activeSection === "dashboard" ? "bg-red-600" : "hover:bg-red-600"
            }`}
            onClick={() => setActiveSection("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`w-full text-left p-2 rounded ${
              activeSection === "manageUsers"
                ? "bg-red-600"
                : "hover:bg-red-600"
            }`}
            onClick={() => setActiveSection("manageUsers")}
          >
            Manage Users
          </button>
          <button
            className={`w-full text-left p-2 rounded ${
              activeSection === "manageProducts"
                ? "bg-red-600"
                : "hover:bg-red-600"
            }`}
            onClick={() => setActiveSection("manageProducts")}
          >
            Manage Products
          </button>          
          <button
            className={`w-full text-left p-2 rounded ${
              activeSection === "manageOrders"
                ? "bg-red-600"
                : "hover:bg-red-600"
            }`}
            onClick={() => setActiveSection("manageOrders")}
          >
            Manage Orders
          </button>
        </nav>
      </div>
   
      <div className="flex-1 bg-white">
      
        <div className="bg-gray-800 shadow p-4 flex justify-center items-center">
          <h1 className="text-2xl text-white font-bold">{getPageTitle()}</h1>        
        </div>
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
