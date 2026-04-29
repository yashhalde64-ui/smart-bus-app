import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <nav style={nav}>
        <h2>🚌 SmartBus</h2>

        <button onClick={() => setOpen(!open)}>☰</button>

        {open && (
          <div style={menu}>
            <Link to="/">Home</Link>
            <Link to="/RoutesManagement">Routes</Link>
            <Link to="/FleetManagement">Fleet</Link>
            <Link to="/StudentsManagement">Students</Link>
            <Link to="/Analytics">Analytics</Link>
            <Link to="/SchoolPortal">School</Link>
            <Link to="/AccessPortal">Login</Link>
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <div style={{ padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  background: "#007bff",
  color: "white",
};

const menu = {
  position: "absolute",
  top: "50px",
  background: "white",
  color: "black",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
};