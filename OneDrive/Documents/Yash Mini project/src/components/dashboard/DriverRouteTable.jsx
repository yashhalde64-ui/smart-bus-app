import React, { useState } from "react";

export default function DriverRouteTable({ drivers = [], buses = [], routes = [] }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h2>🚍 Driver Routes</h2>

      {drivers.map((driver) => {
        const bus = buses.find(b => b.bus_id === driver.bus_id);
        const route = routes.find(r => r.bus_id === driver.bus_id);

        const isOpen = openId === driver.id;

        return (
          <div key={driver.id} style={{ border: "1px solid #ddd", marginTop: "10px" }}>
            
            {/* HEADER */}
            <div
              onClick={() => setOpenId(isOpen ? null : driver.id)}
              style={{ padding: "10px", cursor: "pointer", background: "#f5f5f5" }}
            >
              <b>{driver.name}</b> | Bus: {driver.bus_id} | Route: {route?.route_name || "N/A"}
            </div>

            {/* DETAILS */}
            {isOpen && (
              <div style={{ padding: "10px" }}>
                
                <p>Phone: {driver.phone}</p>
                <p>Rating: {driver.rating}</p>
                <p>On-Time: {driver.on_time_rate}%</p>

                {bus && (
                  <>
                    <p>Speed: {bus.speed} km/h</p>
                    <p>Fuel: {bus.fuel_level}%</p>
                    <p>Location: {bus.lat}, {bus.lng}</p>
                  </>
                )}

                {/* STOPS */}
                {route?.stops && (
                  <div>
                    <h4>Stops:</h4>
                    {route.stops.map((s, i) => (
                      <div key={i}>
                        {i + 1}. {s.name} ({s.time})
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}