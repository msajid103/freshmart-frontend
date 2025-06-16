import React, { useEffect, useState } from "react";
import API from "../../utils/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
const fetchUsers = async () => {
  try {
    const response = await API.get("/users");
    setUsers(response.data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

  // Add Admin
const handleAddAdmin = async (id) => {
  try {
    await API.put(`/users/${id}/admin`);
    fetchUsers();
  } catch (error) {
    console.error("Error adding admin:", error);
  }
};
  // Delete User
  const handleDeleteUser = async (id) => {
  try {
    await API.delete(`/users/${id}`);
    fetchUsers();
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Account Management</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Admin</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">{user.fullName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.isAdmin ? "Yes" : "No"}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleAddAdmin(user._id)}
                >
                  Add Admin
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
