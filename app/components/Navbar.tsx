"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Link
        href="/"
        style={{
          fontWeight: "bold",
          color: "#d63384",
          fontSize: "1.2rem",
          textDecoration: "none",
        }}
      >
        👗 StyleYourWay
      </Link>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          display: "block",
        }}
      >
        ☰
      </button>

      {/* Links */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          right: menuOpen ? "10px" : "-300px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          borderRadius: "8px",
          padding: "1rem",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "200px",
        }}
      >
        <Link href="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="/generator" onClick={() => setMenuOpen(false)}>
          Generator
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
