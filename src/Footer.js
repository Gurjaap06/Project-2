import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Facebook Clone. All rights reserved.</p>
      <p>About · Help · Privacy · Terms</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.875rem",
    color: "#606770",
  },
};
