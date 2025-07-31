import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white flex justify-between px-6 py-3">
      <h1 className="font-bold text-lg">Blood Bank</h1>
      <div className="flex gap-4 items-center">
        <Link to="/dashboard/admin">Admin</Link>
        <Link to="/dashboard/hospital">Hospital</Link>
        <Link to="/dashboard/donor">Donor</Link>
        <button className="bg-white text-red-600 px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
}
