import React from "react";

export default function NewsCard({ title, summary }) {
  return (
    <div style={newsStyles.card}>
      <h4 style={newsStyles.title}>{title}</h4>
      <p style={newsStyles.summary}>{summary}</p>
    </div>
  );
}

const newsStyles = {
  card: {
    backgroundColor: "#fff",
    padding: "1rem",
    marginBottom: "0.75rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
  },
  title: { margin: "0 0 0.5rem 0" },
  summary: { margin: 0, fontSize: "0.9rem", color: "#333" },
};
