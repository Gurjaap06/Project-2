import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PostCard from "./PostCard";
import NewsCard from "./NewsCard";

export default function HomePage({ onNavigate }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Alice",
      avatar: "/avatars/alice.jpg",
      content: "Hello world!",
    },
    {
      id: 2,
      user: "Bob",
      avatar: "/avatars/bob.jpg",
      content: "Enjoying React! 😊",
    },
  ]);
  const [newPost, setNewPost] = useState("");
  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    const nextId = posts.length ? posts[posts.length - 1].id + 1 : 1;
    setPosts([
      ...posts,
      {
        id: nextId,
        user: "You",
        avatar: "/avatars/you.jpg",
        content: newPost,
        image: newImage,
      },
    ]);
    setNewPost("");
    setNewImage(null);
  };

  const newsItems = [
    {
      id: 1,
      title: "React v18 Released",
      summary: "Learn about concurrent features.",
    },
    { id: 2, title: "JavaScript Trends 2025", summary: "What's next for JS?" },
    { id: 3, title: "VS Code Tips", summary: "Boost your productivity." },
  ];

  return (
    <div style={styles.pageContainer}>
      <NavBar onNavigate={onNavigate} />
      <div style={styles.mainContent}>
        <section style={styles.feedSection}>
          <div style={styles.postInputContainer}>
            <form onSubmit={handlePostSubmit} style={styles.postForm}>
              <textarea
                style={styles.postTextarea}
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={styles.fileInput}
              />
              <button type="submit" style={styles.postButton}>
                Post
              </button>
            </form>
          </div>
          <div style={styles.postsList}>
            {posts.map((p) => (
              <PostCard
                key={p.id}
                profileSrc={p.avatar}
                username={p.user}
                content={p.content}
                image={p.image}
              />
            ))}
          </div>
        </section>
        <aside style={styles.newsSection}>
          <h3>News</h3>
          {newsItems.map((n) => (
            <NewsCard key={n.id} title={n.title} summary={n.summary} />
          ))}
        </aside>
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
  mainContent: {
    display: "flex",
    flex: 1,
    padding: "1rem",
    gap: "1rem",
  },
  feedSection: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  postInputContainer: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
  },
  postForm: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  postTextarea: {
    width: "100%",
    height: "5rem",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "0.25rem",
    border: "1px solid #ccc",
    resize: "vertical",
  },
  fileInput: {
    fontSize: "0.9rem",
  },
  postButton: {
    alignSelf: "flex-end",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "0.25rem",
    backgroundColor: "#1877f2",
    color: "#fff",
  },
  postsList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  newsSection: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    height: "fit-content",
  },
};
