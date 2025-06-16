import React, { useRef } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, ArcElement, LinearScale, PointElement, LineElement, Tooltip } from "chart.js";
import { FaShoppingCart, FaDollarSign, FaBoxOpen, FaUsers } from "react-icons/fa";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Register Chart.js components
Chart.register(CategoryScale, ArcElement, LinearScale, PointElement, LineElement, Tooltip);

const Dashboard = () => {
  const ordersRef = useRef(null);

  // Summary Data
  const totalOrders = 3200;
  const totalRevenue = 12500;
  const totalProducts = 560;
  const totalCustomers = 890;

  // Chart Data
  const monthlySalesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [300, 400, 500, 700, 800, 600, 900, 1100, 1000, 950, 1200, 1400],
        backgroundColor: "rgba(255, 0, 0, 0.6)",
        borderColor: "rgba(255, 0, 0, 0.9)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const revenueData = {
    labels: ["Groceries", "Dairy", "Snacks", "Vegetables", "Meat"],
    datasets: [
      {
        label: "Revenue Breakdown",
        data: [4500, 3000, 2500, 2000, 1500],
        backgroundColor: ["#ff4d4d", "#ff3333", "#e60000", "#cc0000", "#990000"],
        hoverOffset: 4,
      },
    ],
  };

  const inventoryData = {
    labels: ["In Stock", "Sold"],
    datasets: [
      {
        label: "Inventory Status",
        data: [400, 160],
        backgroundColor: ["#333333", "#990000"],
        hoverOffset: 4,
      },
    ],
  };

 
  const orders = Array.from({ length: 5 }).map((_, index) => ({
    id: `#FM${index + 1001}`,
    customer: `Customer ${index + 1}`,
    total: `$${(Math.random() * 200).toFixed(2)}`,
    status: index % 2 === 0 ? "Completed" : "Pending",
    date: "2025-01-20",
  }));

  // Export Methods
  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(orders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, "orders.csv");
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(orders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
    XLSX.writeFile(workbook, "orders.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Orders Report", 10, 10);
    const tableData = orders.map((order) => [order.id, order.customer, order.total, order.status, order.date]);
    doc.autoTable({
      head: [["Order ID", "Customer", "Total", "Status", "Date"]],
      body: tableData,
    });
    doc.save("orders.pdf");
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-red-500">Fresh Mart Dashboard</h1>

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <SummaryCard title="Total Orders" value={totalOrders} icon={<FaShoppingCart size={40} />} />
        <SummaryCard title="Total Revenue" value={`$${totalRevenue}`} icon={<FaDollarSign size={40} />} />
        <SummaryCard title="Total Products" value={totalProducts} icon={<FaBoxOpen size={40} />} />
        <SummaryCard title="Total Customers" value={totalCustomers} icon={<FaUsers size={40} />} />
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ChartCard title="Monthly Sales" chart={<Line data={monthlySalesData} />} />
        <ChartCard title="Revenue Breakdown" chart={<Doughnut data={revenueData} />} />
        <ChartCard title="Inventory Status" chart={<Doughnut data={inventoryData} />} />
      </div>

      {/* Orders Table */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" ref={ordersRef}>
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-red-500">Order ID</th>
                <th className="py-2 px-4 border-b-2 border-red-500">Customer</th>
                <th className="py-2 px-4 border-b-2 border-red-500">Total</th>
                <th className="py-2 px-4 border-b-2 border-red-500">Status</th>
                <th className="py-2 px-4 border-b-2 border-red-500">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-700">
                  <td className="py-2 px-4 border-b border-gray-700">{order.id}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{order.customer}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{order.total}</td>
                  <td className="py-2 px-4 border-b border-gray-700">
                    {order.status === "Completed" ? (
                      <span className="text-green-400">{order.status}</span>
                    ) : (
                      <span className="text-yellow-400">{order.status}</span>
                    )}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-700">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Export Buttons */}
        <div className="flex gap-4 mt-4">
          <button onClick={exportToCSV} className="bg-red-500 px-4 py-2 rounded text-white">
            Download CSV
          </button>
          <button onClick={exportToExcel} className="bg-red-500 px-4 py-2 rounded text-white">
            Download Excel
          </button>
          <button onClick={exportToPDF} className="bg-red-500 px-4 py-2 rounded text-white">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value, icon }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between">
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
    <div className="text-red-500">{icon}</div>
  </div>
);

const ChartCard = ({ title, chart }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {chart}
  </div>
);

export default Dashboard;
