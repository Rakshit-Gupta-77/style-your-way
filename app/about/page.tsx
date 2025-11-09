export default function AboutPage() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #fff0f5, #ffe4e1)",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>👗 About Us</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        <b>Style Your Way</b> is your AI-powered fashion companion. 
        We help you design, style, and express your personality 
        through smart outfit suggestions and custom looks.
      </p>
    </main>
  );
}
