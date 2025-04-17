import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function FriendsPage({ onNavigate }) {
  const friends = ["Alice", "Bob", "Charlie", "Dana"];

  return (
    <div style={styles.pageContainer}>
      <NavBar onNavigate={onNavigate} />
      <div style={styles.content}>
        <h2>Friends</h2>
        <ul style={styles.list}>
          {friends.map((name) => (
            <li key={name} style={styles.listItem}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  },
  content: {
    flex: 1,
    padding: "1rem",
    backgroundColor: "#fff",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem",
  },
  listItem: {
    padding: "0.75rem",
    borderBottom: "1px solid #ddd",
  },
};
