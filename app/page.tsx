export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #fde2e4, #fff)",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>👗 Style Your Way</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        Welcome to your AI-powered fashion designer!  
        Edit this page to start building your outfit-design experience.
      </p>
    </main>
  );
}
