import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "60px" }}>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Page <b>{location.pathname}</b> not found
      </p>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}