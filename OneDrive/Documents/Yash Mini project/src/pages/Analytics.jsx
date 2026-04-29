import React from "react";

export default function Analytics() {

  const totalFuel = 120;
  const avgEfficiency = 4.5;
  const onTimeRate = 85;
  const totalTrips = 25;
  const co2 = 300;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Analytics Dashboard</h1>

      {/* KPI */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={box}>Fuel: {totalFuel} L</div>
        <div style={box}>Efficiency: {avgEfficiency} km/L</div>
        <div style={box}>On-Time: {onTimeRate}%</div>
        <div style={box}>CO2: {co2} kg</div>
      </div>

      {/* Trips */}
      <div style={{ marginTop: "30px" }}>
        <h2>🚍 Trips Summary</h2>
        <p>Total Trips: {totalTrips}</p>
        <p>On-Time Trips: {Math.round((onTimeRate / 100) * totalTrips)}</p>
        <p>Delayed Trips: {Math.round(totalTrips * 0.15)}</p>
      </div>

      {/* Routes */}
      <div style={{ marginTop: "30px" }}>
        <h2>🛣 Route Summary</h2>

        <div style={card}>
          <h3>Route A</h3>
          <p>Stops: 5</p>
          <p>Distance: 10 km</p>
          <p>Fuel: 2L</p>
        </div>

        <div style={card}>
          <h3>Route B</h3>
          <p>Stops: 3</p>
          <p>Distance: 6 km</p>
          <p>Fuel: 1.2L</p>
        </div>
      </div>
    </div>
  );
}

const box = {
  border: "1px solid #ccc",
  padding: "10px",
  width: "150px",
};

const card = {
  border: "1px solid #ccc",
  padding: "10px",
  marginTop: "10px",
};