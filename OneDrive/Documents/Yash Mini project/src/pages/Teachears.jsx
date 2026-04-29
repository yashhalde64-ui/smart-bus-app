import React, { useState } from "react";
import { teachers } from "../data/teachers";

export default function Teachers() {
  const [list, setList] = useState(teachers);

  return (
    <div style={{ padding: "20px" }}>
      <h1>👩‍🏫 Teachers</h1>

      {list.map((t) => (
        <div key={t.id} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
          <h3>{t.name}</h3>
          <p>Subject: {t.subject}</p>
          <p>Bus: {t.bus_id}</p>
          <p>Status: {t.status}</p>
          <p>Students Managed: {t.total_students_managed}</p>
        </div>
      ))}
    </div>
  );
}
const [form, setForm] = useState({
  name: "",
  subject: "",
  bus_id: "",
});

const addTeacher = () => {
  if (!form.name) return alert("Name required");

  const newTeacher = {
    id: Date.now(),
    ...form,
    status: "off_duty",
    total_students_managed: 0,
  };

  setList([...list, newTeacher]);
  setForm({ name: "", subject: "", bus_id: "" });
};
<div>
  <input
    placeholder="Name"
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
  />

  <input
    placeholder="Subject"
    value={form.subject}
    onChange={(e) => setForm({ ...form, subject: e.target.value })}
  />

  <input
    placeholder="Bus ID"
    value={form.bus_id}
    onChange={(e) => setForm({ ...form, bus_id: e.target.value })}
  />

  <button onClick={addTeacher}>Add Teacher</button>
</div>