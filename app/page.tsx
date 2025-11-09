export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #fde2e4, #fff)",
        color: "#333",
        padding: "2rem 1rem",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.8rem, 6vw, 3rem)",
          marginBottom: "1rem",
        }}
      >
        👗 Style Your Way ✨
      </h1>

      <p
        style={{
          fontSize: "clamp(1rem, 4vw, 1.3rem)",
          maxWidth: "600px",
          lineHeight: 1.6,
        }}
      >
        Welcome to your AI-powered fashion designer!  
        Edit this page to start building your outfit design experience.
      </p>

      <button
        style={{
          marginTop: "2rem",
          padding: "0.8rem 1.5rem",
          backgroundColor: "#d63384",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Start Designing
      </button>
    </main>
  );
}
