import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function WatchPage({ onNavigate }) {
  const videos = [
    { id: 1, title: "Intro to React", thumbnail: "/thumbs/react.png" },
    { id: 2, title: "VS Code Tips", thumbnail: "/thumbs/vscode.png" },
    { id: 3, title: "JavaScript Basics", thumbnail: "/thumbs/js.png" },
  ];

  return (
    <div style={styles.pageContainer}>
      <NavBar onNavigate={onNavigate} />
      <div style={styles.content}>
        <h2>Watch</h2>
        <div style={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} style={styles.videoCard}>
              <img
                src={video.thumbnail}
                alt={video.title}
                style={styles.thumbnail}
              />
              <p style={styles.videoTitle}>{video.title}</p>
            </div>
          ))}
        </div>
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
  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  videoCard: {
    padding: "0.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  thumbnail: { width: "100%", borderRadius: "0.5rem" },
  videoTitle: { marginTop: "0.5rem" },
};
