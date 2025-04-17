import React from "react";

export default function PostCard({ profileSrc, username, content, image }) {
  const likes = Math.floor(Math.random() * 100);
  const comments = Math.floor(Math.random() * 50);
  const shares = Math.floor(Math.random() * 20);
  const saves = Math.floor(Math.random() * 10);

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={profileSrc} alt="profile" style={styles.avatar} />
        <span style={styles.username}>{username}</span>
      </div>
      <div style={styles.content}>{content}</div>
      {image && <img src={image} alt="post" style={styles.postImage} />}
      <div style={styles.actions}>
        <span style={styles.action}>
          <span role="img" aria-label="like">
            ❤️
          </span>{" "}
          {likes}
        </span>
        <span style={styles.action}>
          <span role="img" aria-label="comment">
            💬
          </span>{" "}
          {comments}
        </span>
        <span style={styles.action}>
          <span role="img" aria-label="share">
            🔄
          </span>{" "}
          {shares}
        </span>
        <span style={styles.action}>
          <span role="img" aria-label="save">
            📌
          </span>{" "}
          {saves}
        </span>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
  },
  header: { display: "flex", alignItems: "center", marginBottom: "0.5rem" },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "0.75rem",
  },
  username: { fontWeight: "bold" },
  content: { marginBottom: "0.75rem" },
  postImage: { width: "100%", borderRadius: "0.5rem", marginBottom: "0.75rem" },
  actions: { display: "flex", gap: "1rem" },
  action: { cursor: "pointer", fontSize: "0.9rem" },
};
