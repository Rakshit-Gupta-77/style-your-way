export default function GeneratorPage() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #fdfbfb, #ebedee)",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🧥 Style Generator</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        Soon, you'll be able to upload photos or describe your style, 
        and our AI will generate your perfect outfit suggestions! 👠
      </p>
    </main>
  );
}
