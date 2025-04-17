// src/LandingPage.js
import React from "react";

export default function LandingPage({ onNavigate }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Facebook Clone</h1>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={() => onNavigate("signup")}>
          Sign Up
        </button>
        <button style={styles.button} onClick={() => onNavigate("login")}>
          Log In
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  title: { fontSize: "2rem", marginBottom: "1.5rem" },
  buttonGroup: { display: "flex", gap: "1rem" },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "0.25rem",
    backgroundColor: "#1877f2",
    color: "rgb(255, 255, 255)",
  },
};
