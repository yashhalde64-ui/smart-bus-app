import React from "react";
import { buses } from "../data/buses";

export default function FleetManagement() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🚌 Fleet</h1>

      {buses.map((bus) => (
        <div key={bus.id} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
          <h3>{bus.bus_id}</h3>
          <p>Plate: {bus.plate_number}</p>
          <p>Status: {bus.status}</p>
          <p>Students: {bus.current_students}/{bus.capacity}</p>
          <p>Speed: {bus.speed} km/h</p>
          <p>Fuel: {bus.fuel_level}%</p>
          <p>ETA: {bus.eta_to_school}</p>
        </div>
      ))}
    </div>
  );
}