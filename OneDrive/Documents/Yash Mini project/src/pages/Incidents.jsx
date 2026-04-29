import React, { useState } from "react";
import { incidents } from "../data/incidents";

export default function Incidents() {
  const [list, setList] = useState(incidents);

  return (
    <div style={{ padding: "20px" }}>
      <h1>⚠️ Incidents</h1>

      {list.map((i) => (
        <div key={i.id} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
          <h3>{i.incident_id}</h3>
          <p>Date: {i.date}</p>
          <p>Bus: {i.bus_id}</p>
          <p>Type: {i.incident_type}</p>
          <p>Status: {i.status}</p>
          <p>Severity: {i.severity}</p>
          <p>{i.description}</p>
        </div>
      ))}
    </div>
  );
}
const [form, setForm] = useState({
  incident_id: "",
  bus_id: "",
  incident_type: "",
  description: "",
});

const addIncident = () => {
  if (!form.incident_id) return alert("ID required");

  const newIncident = {
    id: Date.now(),
    ...form,
    date: new Date().toISOString().split("T")[0],
    status: "Open",
    severity: "low",
    notified_parents: false,
  };

  setList([...list, newIncident]);
  setForm({
    incident_id: "",
    bus_id: "",
    incident_type: "",
    description: "",
  });
};
<div>
  <input
    placeholder="Incident ID"
    value={form.incident_id}
    onChange={(e) => setForm({ ...form, incident_id: e.target.value })}
  />

  <input
    placeholder="Bus ID"
    value={form.bus_id}
    onChange={(e) => setForm({ ...form, bus_id: e.target.value })}
  />

  <input
    placeholder="Type"
    value={form.incident_type}
    onChange={(e) => setForm({ ...form, incident_type: e.target.value })}
  />

  <input
    placeholder="Description"
    value={form.description}
    onChange={(e) => setForm({ ...form, description: e.target.value })}
  />

  <button onClick={addIncident}>Add Incident</button>
</div>