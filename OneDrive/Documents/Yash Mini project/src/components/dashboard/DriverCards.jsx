import React from "react";

export default function DriverCards({ drivers = [], routes = [], buses = [] }) {

  const getRoute = (driver) =>
    routes.find(r => r.id === driver.route_id || r.bus_id === driver.bus_id);

  const getBus = (driver) =>
    buses.find(b => b.bus_id === driver.bus_id);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>👨‍✈️ Drivers</h2>

      {drivers.map((driver) => {
        const route = getRoute(driver);
        const bus = getBus(driver);

        return (
          <div
            key={driver.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginTop: "10px"
            }}
          >
            <h3>{driver.name}</h3>

            <p>Bus: {driver.bus_id}</p>
            <p>Phone: {driver.phone}</p>
            <p>Trips: {driver.total_trips}</p>
            <p>On-Time: {driver.on_time_rate}%</p>

            {/* Route */}
            {route && (
              <div>
                <p>Route: {route.route_name}</p>
                <p>Stops: {route.total_stops}</p>
              </div>
            )}

            {/* Location */}
            {bus && (
              <p>
                Location: {bus.lat}, {bus.lng} | Speed: {bus.speed} km/h
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}