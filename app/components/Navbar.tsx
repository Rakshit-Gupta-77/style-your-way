"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "🏠 Home" },
    { href: "/about", label: "👗 About" },
    { href: "/generator", label: "🧥 Generator" },
    { href: "/contact", label: "📞 Contact" },
  ];

  return (
    <nav
      style={{
        background: "linear-gradient(to right, #fde2e4, #fff0f5)",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 10,
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#d63384" }}>
          👗 Style Your Way
        </h2>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          style={{
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            cursor: "pointer",
            display: "none",
          }}
          className="hamburger"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="nav-links" style={{ display: "flex", gap: "2rem" }}>
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
                paddingBottom: "0.25rem",
                transition: "all 0.3s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        style={{
          maxHeight: menuOpen ? "300px" : "0px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          transition: "max-height 0.5s ease-in-out",
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
              transition: "color 0.3s ease",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Responsive styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
