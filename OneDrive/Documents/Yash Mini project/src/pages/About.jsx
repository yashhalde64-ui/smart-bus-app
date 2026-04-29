import React from "react";

export default function About() {
  const roadmap = [
    { year: "2025", text: "Start project" },
    { year: "2026", text: "City expansion" },
    { year: "2027", text: "AI system add" },
  ];

  const tech = [
    "React App",
    "Node Backend",
    "Database",
    "GPS Tracking",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>ℹ️ About SmartBus</h1>

      {/* ABOUT */}
      <p style={{ marginTop: "10px" }}>
        SmartBus ek system hai jo school buses ko track karta hai aur students ko safe travel provide karta hai.
      </p>

      {/* FEATURES */}
      <h2 style={{ marginTop: "20px" }}>Features</h2>
      <ul>
        <li>Live Tracking</li>
        <li>Student Safety</li>
        <li>Route Optimization</li>
      </ul>

      {/* TECH */}
      <h2 style={{ marginTop: "20px" }}>Technology</h2>
      {tech.map((t, i) => (
        <div key={i}>{t}</div>
      ))}

      {/* ROADMAP */}
      <h2 style={{ marginTop: "20px" }}>Roadmap</h2>
      {roadmap.map((r, i) => (
        <div key={i}>
          {r.year} - {r.text}
        </div>
      ))}

      {/* TEAM */}
      <h2 style={{ marginTop: "20px" }}>Team</h2>
      <p>Veer Choudhary (Project Lead)</p>
    </div>
  );
}