import React from "react";

export default function KPICard({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "150px",
        borderRadius: "10px",
      }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}