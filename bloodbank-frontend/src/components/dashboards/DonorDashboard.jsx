import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "O+", value: 37 },
  { name: "A+", value: 7 },
];

const barData = [
  { date: "4/21/2025", donations: 7 },
  { date: "4/22/2025", donations: 10 },
  { date: "4/23/2025", donations: 18 },
];

const COLORS = ["#EF4444", "#F59E0B"];

export default function DonorDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-red-600 text-center">
        ❤️ Donor Dashboard
      </h1>

      {/* Register Donation Form */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Register a Donation</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="border p-2 rounded">
            <option>Select Blood Group</option>
            <option>O+</option>
            <option>A+</option>
            <option>AB-</option>
          </select>
          <input
            type="number"
            placeholder="Units Donated"
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Location"
            className="border p-2 rounded"
          />
        </form>
        <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Register Donation
        </button>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Blood Group Breakdown</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Donations Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="donations" fill="#EF4444" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
