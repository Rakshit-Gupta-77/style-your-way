"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Define the nav links
  const links = [
    { href: "/", label: "🏠 Home" },
    { href: "/about", label: "👗 About" },
    { href: "/generator", label: "🧥 Generator" },
    { href: "/contact", label: "📞 Contact" },
  ];

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
      {/* Logo */}
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

      {/* Dropdown Menu (Mobile) */}
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
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: pathname === link.href ? "#d63384" : "#333",
              borderBottom:
                pathname === link.href
                  ? "2px solid #d63384"
                  : "2px solid transparent",
              paddingBottom: "0.2rem",
              transition: "all 0.2s ease",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Menu */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
        className="desktop-menu"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: pathname === link.href ? "#d63384" : "#333",
              borderBottom:
                pathname === link.href
                  ? "2px solid #d63384"
                  : "2px solid transparent",
              paddingBottom: "0.2rem",
              transition: "all 0.3s ease",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
