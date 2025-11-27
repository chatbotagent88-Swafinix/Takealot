import React from "react";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div
        className="table-card"
        style={{
          maxWidth: 720,
          margin: "6rem auto",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: 72, margin: 0, color: "var(--primary)" }}>
          403
        </h1>
        <h2 style={{ fontSize: 24, margin: "0.5rem 0 1rem" }}>
          Unauthorized Access
        </h2>
        <p
          style={{ color: "var(--muted-foreground)", marginBottom: "1.25rem" }}
        >
          You do not have permission to view this page.
        </p>
        <button className="btn-primary" onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default Unauthorized;
