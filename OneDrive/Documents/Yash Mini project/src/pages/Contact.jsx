import React, { useState } from "react";
import { messages } from "../data/messages";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Parent",
    message: "",
  });

  const [allMessages, setAllMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Fill required fields!");
      return;
    }

    const newMsg = {
      id: Date.now(),
      ...form,
    };

    messages.push(newMsg); // global store
    setAllMessages([...messages]);

    setForm({
      name: "",
      email: "",
      phone: "",
      role: "Parent",
      message: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📞 Contact</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />

        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <br />

        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option>Parent</option>
          <option>School Admin</option>
          <option>Driver</option>
          <option>Municipal Official</option>
          <option>Other</option>
        </select>
        <br />

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <br />

        <button type="submit">Send</button>
      </form>

      {/* MESSAGES LIST */}
      <h2 style={{ marginTop: "20px" }}>Messages</h2>

      {allMessages.map((m) => (
        <div key={m.id} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
          <p><b>{m.name}</b> ({m.role})</p>
          <p>{m.email}</p>
          <p>{m.message}</p>
        </div>
      ))}
    </div>
  );
}