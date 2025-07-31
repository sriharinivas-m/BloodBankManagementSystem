import React from "react";

export default function BloodRequestCard({ bloodType, units, status }) {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    approved: "bg-green-100 text-green-700",
    declined: "bg-red-100 text-red-700",
  };

  return (
    <div className="border rounded p-4 shadow bg-white flex justify-between items-center mb-3">
      <div>
        <h3 className="text-lg font-bold">{bloodType}</h3>
        <p>{units} units</p>
      </div>
      <span className={`px-3 py-1 rounded ${statusColors[status] || ""}`}>
        {status}
      </span>
    </div>
  );
}
