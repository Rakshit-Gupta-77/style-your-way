import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Style Your Way",
  description: "AI-powered fashion designer",
};

// ✅ Create a Navigation component that knows the current route
function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "🏠 Home" },
    { href: "/about", label: "👗 About" },
    { href: "/generator", label: "🧥 Generator" },
    { href: "/contact", label: "📞 Contact" },
  ];

  return (
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
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: pathname === link.href ? "#d63384" : "#333",
            borderBottom:
              pathname === link.href ? "2px solid #d63384" : "2px solid transparent",
            paddingBottom: "0.25rem",
            transition: "all 0.3s ease",
          }}
        >
          {link.label}
        </Link>
      ))}
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
