import React from "react";

export default function NavBar({ onNavigate }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo} onClick={() => onNavigate("home")}>
        Facebook Clone
      </div>
      <div style={styles.navLinks}>
        {["home", "marketplace", "friends", "watch"].map((link) => (
          <button
            key={link}
            onClick={() => onNavigate(link)}
            style={styles.navButton}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </div>
      <button style={styles.logoutButton} onClick={() => onNavigate("landing")}>
        Log Out
      </button>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
    backgroundColor: "rgb(41, 66, 255)",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  navLinks: {
    display: "flex",
    gap: "1rem",
    color: "#fff",
  },
  navButton: {
    background: "none",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    color: "#fff",
  },
  logoutButton: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "0.25rem",
    backgroundColor: "#e0e0e0",
    color: "#fff",
  },
};
