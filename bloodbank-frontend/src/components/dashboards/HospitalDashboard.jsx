import React from "react";

export default function HospitalDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Hospital Dashboard</h2>

      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-6">
        + Create New Blood Request
      </button>

      <div className="border rounded p-4 bg-gray-50 shadow">
        <h3 className="font-semibold mb-2">Your Active Blood Requests</h3>
        <p>Total: 2 requests</p>
        <ul className="list-disc ml-6 mt-2">
          <li>O + : 20 units (pending)</li>
          <li>AB - : 10 units (pending)</li>
        </ul>
      </div>
    </div>
  );
}
