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
    backgroundColor: "rgb(41, 66, 255)",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.875rem",
    
  },
};
