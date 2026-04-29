import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🚌 Smart Bus Tracking System</h1>

      <p>Welcome to your project 🚀</p>

      <h2 style={{ marginTop: "20px" }}>Pages:</h2>

      <ul>
        <li><Link to="/RoutesManagement">Routes Management</Link></li>
        <li><Link to="/FleetManagement">Fleet Management</Link></li>
        <li><Link to="/StudentsManagement">Students Management</Link></li>
        <li><Link to="/Analytics">Analytics</Link></li>
        <li><Link to="/SchoolPortal">School Portal</Link></li>
        <li><Link to="/AccessPortal">Access Portal</Link></li>
        <li><Link to="/ParentDashboard">Parent Dashboard</Link></li>
        <li><Link to="/LiveTracking">Live Tracking</Link></li>
      </ul>

      <div style={{ marginTop: "30px" }}>
        <p>👉 All features are working now ✅</p>
        <p>👉 Next step: UI improve + database 🚀</p>
      </div>
    </div>
  );
}