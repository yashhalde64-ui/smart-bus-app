import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {

  const stats = {
    buses: 10,
    students: 300,
    onTime: 92,
    fuel: 120000,
    co2: 340,
  };

  const drivers = [
    { name: "Ramesh", bus: "BUS001", route: "Route A" },
    { name: "Suresh", bus: "BUS002", route: "Route B" },
  ];

  const buses = [
    { id: "BUS001", plate: "MH12AB1234", status: "Active" },
    { id: "BUS002", plate: "MH12XY5678", status: "Active" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏫 Admin Dashboard</h1>

      <Link to="/LiveTracking">➡ Open Live Map</Link>

      {/* KPI */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Box title="Buses" value={stats.buses} />
        <Box title="Students" value={stats.students} />
        <Box title="On-Time %" value={stats.onTime} />
        <Box title="Fuel Saved ₹" value={stats.fuel} />
        <Box title="CO2 Reduced" value={stats.co2} />
      </div>

      {/* BUS TABLE */}
      <div style={{ marginTop: "30px" }}>
        <h2>🚌 Fleet</h2>

        {buses.map((b, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
            <p>Bus: {b.id}</p>
            <p>Plate: {b.plate}</p>
            <p>Status: {b.status}</p>
          </div>
        ))}
      </div>

      {/* DRIVERS */}
      <div style={{ marginTop: "30px" }}>
        <h2>👨‍✈️ Drivers</h2>

        {drivers.map((d, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
            <p>Name: {d.name}</p>
            <p>Bus: {d.bus}</p>
            <p>Route: {d.route}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Box({ title, value }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "150px" }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}