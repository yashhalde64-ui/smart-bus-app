import React, { useState } from "react";

export default function ParentDashboard() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul",
      class_name: "5",
      bus: "MH12AB1234",
      status: "On Bus",
      stop: "Stop A",
      parent_phone: "9876543210",
    },
    {
      id: 2,
      name: "Amit",
      class_name: "6",
      bus: "MH12XY5678",
      status: "Waiting",
      stop: "Stop B",
      parent_phone: "9876543211",
    },
  ]);

  const [selected, setSelected] = useState(students[0]);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>👨‍👩‍👦 Parent Dashboard</h1>

      {/* SEARCH */}
      <input
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* STUDENT SELECT */}
      <div style={{ marginTop: "10px" }}>
        {filtered.map((s) => (
          <button key={s.id} onClick={() => setSelected(s)}>
            {s.name}
          </button>
        ))}
      </div>

      {/* DETAILS */}
      {selected && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h2>{selected.name}</h2>
          <p>Class: {selected.class_name}</p>
          <p>Bus: {selected.bus}</p>
          <p>Status: {selected.status}</p>
          <p>Stop: {selected.stop}</p>
          <p>Parent Phone: {selected.parent_phone}</p>
        </div>
      )}

      {/* STATUS CHANGE */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setSelected({ ...selected, status: "On Bus" })}>
          On Bus
        </button>
        <button onClick={() => setSelected({ ...selected, status: "At School" })}>
          At School
        </button>
        <button onClick={() => setSelected({ ...selected, status: "Absent" })}>
          Absent
        </button>
      </div>
    </div>
  );
}