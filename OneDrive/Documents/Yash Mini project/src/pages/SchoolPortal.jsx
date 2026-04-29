import React, { useState } from "react";
import { schools } from "../data/schools";

export default function SchoolPortal() {
  const [list, setList] = useState(schools);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏫 Schools</h1>

      {list.map((s) => (
        <div key={s.id} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
          <h3>{s.name}</h3>
          <p>Address: {s.address}</p>
          <p>Principal: {s.principal}</p>
          <p>Total Students: {s.total_students}</p>
          <p>Bus Students: {s.bus_students}</p>
          <p>Buses: {s.total_buses}</p>
          <p>Phone: {s.phone}</p>
          <p>Plan: {s.plan}</p>
        </div>
      ))}
    </div>
  );
}
const [form, setForm] = useState({
  name: "",
  address: "",
  phone: "",
});

const addSchool = () => {
  if (!form.name) return alert("Name required");

  const newSchool = {
    id: Date.now(),
    ...form,
    total_students: 0,
    bus_students: 0,
    total_buses: 0,
    plan: "Starter",
  };

  setList([...list, newSchool]);
  setForm({ name: "", address: "", phone: "" });
};
<div>
  <input
    placeholder="School Name"
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
  />

  <input
    placeholder="Address"
    value={form.address}
    onChange={(e) => setForm({ ...form, address: e.target.value })}
  />

  <input
    placeholder="Phone"
    value={form.phone}
    onChange={(e) => setForm({ ...form, phone: e.target.value })}
  />

  <button onClick={addSchool}>Add School</button>
</div>