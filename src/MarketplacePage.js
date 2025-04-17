import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function MarketplacePage({ onNavigate }) {
  const items = [
    { id: 1, name: "Vintage Lamp", price: "$20" },
    { id: 2, name: "Guitar", price: "$150" },
    { id: 3, name: "Bicycle", price: "$85" },
    { id: 4, name: "Desk Lamp", price: "$30" },
    { id: 5, name: "Headphones", price: "$60" },
    { id: 6, name: "Coffee Maker", price: "$45" },
    { id: 7, name: "Backpack", price: "$70" },
    { id: 8, name: "Sneakers", price: "$80" },
    { id: 9, name: "Smartphone", price: "$300" },
  ];

  return (
    <div style={styles.pageContainer}>
      <NavBar onNavigate={onNavigate} />
      <div style={styles.content}>
        <h2>Marketplace</h2>
        <div style={styles.grid}>
          {items.map((item) => (
            <div key={item.id} style={styles.card}>
              <p style={styles.itemName}>{item.name}</p>
              <p style={styles.itemPrice}>{item.price}</p>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  card: {
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  itemName: { fontWeight: "bold", marginBottom: "0.5rem" },
  itemPrice: { color: "#1877f2" },
};
