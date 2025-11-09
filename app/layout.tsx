import "./globals.css";
import Navbar from "./components/Navbar";

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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
