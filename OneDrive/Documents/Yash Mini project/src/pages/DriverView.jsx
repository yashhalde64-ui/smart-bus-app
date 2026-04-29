import React, { useState } from "react";
import { drivers } from "../data/drivers";

export default function DriverView() {
  const [list, setList] = useState(drivers);

  return (
    <div style={{ padding: "20px" }}>
      <h1>👨‍✈️ Drivers</h1>

      {list.map((d) => (
        <div key={d.id} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
          <h3>{d.name}</h3>
          <p>Phone: {d.phone}</p>
          <p>Bus: {d.bus_id}</p>
          <p>Rating: {d.rating}</p>
          <p>Trips: {d.total_trips}</p>
          <p>Status: {d.status}</p>
        </div>
      ))}
    </div>
  );
}
const [form, setForm] = useState({
  name: "",
  phone: "",
  bus_id: ""
});

const addDriver = () => {
  if (!form.name) return alert("Name required");

  const newDriver = {
    id: Date.now(),
    ...form,
    rating: 0,
    total_trips: 0,
    status: "active"
  };

  setList([...list, newDriver]);
  setForm({ name: "", phone: "", bus_id: "" });
};
<div>
  <input
    placeholder="Name"
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
  />

  <input
    placeholder="Phone"
    value={form.phone}
    onChange={(e) => setForm({ ...form, phone: e.target.value })}
  />

  <input
    placeholder="Bus ID"
    value={form.bus_id}
    onChange={(e) => setForm({ ...form, bus_id: e.target.value })}
  />

  <button onClick={addDriver}>Add Driver</button>
</div>
