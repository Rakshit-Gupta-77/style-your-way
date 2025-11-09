export default function ContactPage() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #e6f0ff, #ffffff)",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>📞 Contact Us</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Got ideas or feedback? We’d love to hear from you!
      </p>
      <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
        Email: <b>support@styleyourway.ai</b>
      </p>
    </main>
  );
}
