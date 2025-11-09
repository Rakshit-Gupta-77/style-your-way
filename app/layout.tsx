import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Style Your Way",
  description: "AI-powered fashion designer",
};

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
        {/* Navigation Bar */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            padding: "1rem",
            background: "linear-gradient(to right, #fde2e4, #fff0f5)",
            borderBottom: "1px solid #ddd",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <Link href="/" style={linkStyle}>
            🏠 Home
          </Link>
          <Link href="/about" style={linkStyle}>
            👗 About
          </Link>
          <Link href="/generator" style={linkStyle}>
            🧥 Generator
          </Link>
          <Link href="/contact" style={linkStyle}>
            📞 Contact
          </Link>
        </nav>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
  transition: "color 0.2s ease",
};

