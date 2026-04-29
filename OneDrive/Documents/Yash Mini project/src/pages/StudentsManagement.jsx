import React, { useState } from "react";
import { students } from "../data/students";

export default function StudentsManagement() {
  const [list, setList] = useState(students);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎓 Students</h1>

      {list.map((s) => (
        <div key={s.id} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
          <h3>{s.name}</h3>
          <p>Class: {s.class_name}</p>
          <p>Bus: {s.bus_id}</p>
          <p>Status: {s.today_status}</p>
          <p>Parent: {s.parent_name} ({s.parent_phone})</p>
        </div>
      ))}
    </div>
  );
}
const [form, setForm] = useState({
  name: "",
  class_name: "",
  bus_id: "",
  parent_phone: ""
});

const addStudent = () => {
  if (!form.name) return alert("Name required");

  const newStudent = {
    id: Date.now(),
    ...form,
    today_status: "waiting",
    present_days: 0,
    total_days: 0,
  };

  setList([...list, newStudent]);
  setForm({ name: "", class_name: "", bus_id: "", parent_phone: "" });
};
<div>
  <input
    placeholder="Name"
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
  />

  <input
    placeholder="Class"
    value={form.class_name}
    onChange={(e) => setForm({ ...form, class_name: e.target.value })}
  />

  <input
    placeholder="Bus ID"
    value={form.bus_id}
    onChange={(e) => setForm({ ...form, bus_id: e.target.value })}
  />

  <input
    placeholder="Parent Phone"
    value={form.parent_phone}
    onChange={(e) => setForm({ ...form, parent_phone: e.target.value })}
  />

  <button onClick={addStudent}>Add Student</button>
</div>