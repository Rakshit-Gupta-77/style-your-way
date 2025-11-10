"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/generator", label: "Generator" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <Link href="/" className="text-[1.4rem] font-bold text-purple-600">
        👗 StyleYourWay
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl text-purple-600"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <div className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`border-b-2 pb-0.5 font-semibold transition-colors ${
              pathname === link.href
                ? "border-purple-600 text-purple-600"
                : "border-transparent text-gray-800 hover:text-purple-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {menuOpen && (
        <div className="absolute right-4 top-16 z-50 flex w-48 flex-col rounded-lg border bg-white p-3 shadow-md md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded px-2 py-2 font-medium transition-colors ${
                pathname === link.href ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

