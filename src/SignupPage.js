import React, { useState } from "react";

export default function SignupPage({ onNavigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    onNavigate("home");
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <button onClick={() => onNavigate("login")} style={styles.link}>
          Log In
        </button>
      </p>
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
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "0.25rem",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "0.25rem",
    backgroundColor: "#42b72a",
    color: "#fff",
  },
  link: {
    background: "none",
    border: "none",
    color: "#1877f2",
    cursor: "pointer",
    textDecoration: "underline",
  },
};
