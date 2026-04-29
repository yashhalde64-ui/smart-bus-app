import React from "react";

export default function CityDashboard() {

  const stats = {
    schools: 12,
    buses: 45,
    students: 1200,
    traffic: 30,
    fuel: 2.5,
    co2: 1.2,
  };

  const recommendations = [
    "Route optimize karo traffic kam karne ke liye",
    "Unused buses reduce karo",
    "New stop add karo area cover karne ke liye",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏙️ City Dashboard</h1>

      {/* STATS */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <Box title="Schools" value={stats.schools} />
        <Box title="Buses" value={stats.buses} />
        <Box title="Students" value={stats.students} />
        <Box title="Traffic Reduction %" value={stats.traffic} />
      </div>

      {/* EXTRA */}
      <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        <Box title="Fuel Saved (L)" value={stats.fuel} />
        <Box title="CO2 Reduced (T)" value={stats.co2} />
      </div>

      {/* MAP PLACEHOLDER */}
      <div style={{ marginTop: "30px", border: "1px solid #ccc", padding: "20px" }}>
        <h2>🗺️ Map</h2>
        <p>Map yaha add hoga (Leaflet future me)</p>
      </div>

      {/* RECOMMENDATIONS */}
      <div style={{ marginTop: "30px" }}>
        <h2>💡 Recommendations</h2>

        {recommendations.map((r, i) => (
          <div key={i} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
            {r}
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