import React, { useState } from "react";
import { routes } from "../data/routes";

export default function RoutesManagement() {
  const [list, setList] = useState(routes);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛣️ Routes</h1>

      {list.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
          <h3>{r.route_name}</h3>
          <p>Bus: {r.bus_id}</p>
          <p>Distance: {r.total_distance}</p>
          <p>Time: {r.estimated_time}</p>

          <h4>Stops:</h4>
          {r.stops.map((s, i) => (
            <div key={i}>
              {i + 1}. {s.name} - {s.time}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
const [form, setForm] = useState({
  route_name: "",
  bus_id: ""
});

const addRoute = () => {
  if (!form.route_name) return alert("Route name required");

  const newRoute = {
    id: Date.now(),
    ...form,
    stops: [],
    total_distance: "0 km",
    estimated_time: "0 min"
  };

  setList([...list, newRoute]);
  setForm({ route_name: "", bus_id: "" });
};
<div>
  <input
    placeholder="Route Name"
    value={form.route_name}
    onChange={(e) => setForm({ ...form, route_name: e.target.value })}
  />

  <input
    placeholder="Bus ID"
    value={form.bus_id}
    onChange={(e) => setForm({ ...form, bus_id: e.target.value })}
  />

  <button onClick={addRoute}>Add Route</button>
</div>