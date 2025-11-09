"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const metadata = {
  title: "Style Your Way",
  description: "AI-powered fashion designer",
};

function Navbar() {
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

        {/* Hamburger icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem 0",
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
      )}

      {/* Mobile-specific styles */}
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#fff",
        }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
