import React from "react";
import BloodRequestCard from "../common/BloodRequestCard";

export default function AdminDashboard() {
  const requests = [
    { bloodType: "A+", units: 10, status: "approved" },
    { bloodType: "O-", units: 5, status: "pending" },
    { bloodType: "B+", units: 8, status: "declined" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Admin Dashboard</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow p-4 rounded text-center">
          <h3 className="font-bold text-xl">Total Donors</h3>
          <p className="text-2xl text-blue-600">125</p>
        </div>
        <div className="bg-white shadow p-4 rounded text-center">
          <h3 className="font-bold text-xl">Total Hospitals</h3>
          <p className="text-2xl text-blue-600">32</p>
        </div>
        <div className="bg-white shadow p-4 rounded text-center">
          <h3 className="font-bold text-xl">Pending Requests</h3>
          <p className="text-2xl text-blue-600">7</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3">Recent Blood Requests</h3>
      {requests.map((req, index) => (
        <BloodRequestCard
          key={index}
          bloodType={req.bloodType}
          units={req.units}
          status={req.status}
        />
      ))}
    </div>
  );
}
