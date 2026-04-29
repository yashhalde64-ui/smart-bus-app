import React from "react";

export default function FleetTable({ buses = [], drivers = [], routes = [] }) {

  const getDriver = (bus) =>
    drivers.find(d => d.bus_id === bus.bus_id);

  const getRoute = (bus) =>
    routes.find(r => r.bus_id === bus.bus_id);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚌 Fleet Status</h2>

      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Plate</th>
            <th>Driver</th>
            <th>Route</th>
            <th>Location</th>
            <th>Students</th>
            <th>Status</th>
            <th>ETA</th>
            <th>Speed</th>
          </tr>
        </thead>

        <tbody>
          {buses.map((bus) => {
            const driver = getDriver(bus);
            const route = getRoute(bus);

            return (
              <tr key={bus.id}>
                <td>{bus.bus_id}</td>
                <td>{bus.plate_number}</td>

                <td>
                  {driver ? (
                    <>
                      {driver.name} <br />
                      {driver.phone}
                    </>
                  ) : "—"}
                </td>

                <td>
                  {route ? route.route_name : "—"}
                </td>

                <td>
                  {bus.lat && bus.lng
                    ? `${bus.lat}, ${bus.lng}`
                    : "—"}
                </td>

                <td>
                  {bus.current_students}/{bus.capacity}
                </td>

                <td>{bus.status}</td>

                <td>{bus.eta_to_school}</td>

                <td>{bus.speed} km/h</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}