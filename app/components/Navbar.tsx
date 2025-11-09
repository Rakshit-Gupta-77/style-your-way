"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll position for blur + shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none", // ✅ Fixed line
        background: scrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "linear-gradient(to right, #fde2e4, #fff0f5)",
        boxShadow: scrolled
          ? "0 4px 20px rgba(0,0,0,0.1)"
          : "0 2px 10px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease-in-out",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
          transition: "opacity 0.3s",
        }}
      >
        👗 StyleYourWay
      </Link>

      {/* Hamburger Icon (Mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
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

      {/* Mobile Dropdown Menu */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          right: menuOpen ? "10px" : "-300px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          borderRadius: "10px",
          padding: "1rem",
          transition: "right 0.3s ease",
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

      {/* Responsive Styles */}
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
