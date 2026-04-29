import React, { useState, useEffect } from "react";

export default function LiveTracking() {
  const [buses, setBuses] = useState([
    { id: 1, name: "Bus 1", lat: 19.2952, lng: 72.8544, speed: 30 },
    { id: 2, name: "Bus 2", lat: 19.2965, lng: 72.8555, speed: 25 },
  ]);

  // simulate movement
  useEffect(() => {
    const interval = setInterval(() => {
      setBuses((prev) =>
        prev.map((bus) => ({
          ...bus,
          lat: bus.lat + (Math.random() - 0.5) * 0.001,
          lng: bus.lng + (Math.random() - 0.5) * 0.001,
          speed: Math.max(10, bus.speed + Math.floor((Math.random() - 0.5) * 10)),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📍 Live Tracking</h1>

      {buses.map((bus) => (
        <div
          key={bus.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <h2>{bus.name}</h2>
          <p>Latitude: {bus.lat.toFixed(5)}</p>
          <p>Longitude: {bus.lng.toFixed(5)}</p>
          <p>Speed: {bus.speed} km/h</p>
        </div>
      ))}
    </div>
  );
}