import React from "react";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "80px", margin: 0, color: "#007bff" }}>403</h1>
      <h2 style={{ fontSize: "32px", margin: 0 }}>Unauthorized Access</h2>

      <p style={{ fontSize: "18px", maxWidth: "400px" }}>
        You do not have permission to view this page.
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default Unauthorized;
