export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(to bottom right, #fff0f5, #fde2e4)",
        color: "#333",
        padding: "2rem 1rem",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3rem)",
          marginBottom: "1rem",
          color: "#d63384",
        }}
      >
        👗 About Us
      </h1>
      <p
        style={{
          fontSize: "clamp(1rem, 4vw, 1.3rem)",
          maxWidth: "650px",
          lineHeight: 1.6,
        }}
      >
        <b>Style Your Way</b> is your AI-powered fashion partner. We help you design, visualize,
        and express your style — powered by advanced AI and creative design tools.  
        Our goal: make fashion more personal, creative, and inclusive.
      </p>
    </main>
  );
}
