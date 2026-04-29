import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccessPortal() {

  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (role === "admin") {
      if (form.email === "admin@gmail.com" && form.password === "admin123") {
        alert("Admin Login Success");
        navigate("/");
      } else {
        setError("Wrong Admin Credentials");
      }
    }

    if (role === "parent") {
      if (form.password === "parent123") {
        alert("Parent Login Success");
        navigate("/");
      } else {
        setError("Wrong Parent Password");
      }
    }

    if (role === "driver") {
      if (form.password === "driver123") {
        alert("Driver Login Success");
        navigate("/");
      } else {
        setError("Wrong Driver Password");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔐 Access Portal</h1>

      {/* SELECT ROLE */}
      {!role && (
        <div>
          <button onClick={() => setRole("admin")}>Admin</button>
          <button onClick={() => setRole("parent")}>Parent</button>
          <button onClick={() => setRole("driver")}>Driver</button>
        </div>
      )}

      {/* LOGIN FORM */}
      {role && (
        <div style={{ marginTop: "20px" }}>
          <h2>{role.toUpperCase()} LOGIN</h2>

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <br /><br />

          <button onClick={handleLogin}>Login</button>
          <button onClick={() => setRole(null)}>Back</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}