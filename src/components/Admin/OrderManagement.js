import React, { useState } from "react";

const OrderManagement = () => {
  // Dummy Order Data
  const [orders, setOrders] = useState([
    { id: 101, customer: "Ali Raza", total: 120.5, status: "Pending", date: "2025-01-20" },
    { id: 102, customer: "Sadaqat", total: 80.0, status: "Pending", date: "2025-01-19" },
    { id: 103, customer: "Bali", total: 200.0, status: "Pending", date: "2025-01-18" },
    { id: 104, customer: "Asif", total: 45.5, status: "Pending", date: "2025-01-17" },
  ]);

  // Handle Order Status Change
  const handleStatusChange = (id, status) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-red-500">Order ID</th>
              <th className="py-2 px-4 border-b-2 border-red-500">Customer</th>
              <th className="py-2 px-4 border-b-2 border-red-500">Total</th>
              <th className="py-2 px-4 border-b-2 border-red-500">Status</th>
              <th className="py-2 px-4 border-b-2 border-red-500">Date</th>
              <th className="py-2 px-4 border-b-2 border-red-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-200">
                <td className="py-2 px-4 border-b border-gray-300">{order.id}</td>
                <td className="py-2 px-4 border-b border-gray-300">{order.customer}</td>
                <td className="py-2 px-4 border-b border-gray-300">${order.total.toFixed(2)}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <span
                    className={`py-1 px-3 rounded-full text-sm ${
                      order.status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-gray-300">{order.date}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button
                    onClick={() => handleStatusChange(order.id, "Approved")}
                    className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition mr-2"
                    disabled={order.status !== "Pending"}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(order.id, "Rejected")}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition"
                    disabled={order.status !== "Pending"}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
