export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #fde2e4, #fff)",
        color: "#333",
        textAlign: "center",
        padding: "2rem 1rem",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3rem)",
          color: "#d63384",
          marginBottom: "1rem",
        }}
      >
        📞 Contact Us
      </h1>
      <p
        style={{
          fontSize: "clamp(1rem, 4vw, 1.2rem)",
          maxWidth: "600px",
          marginBottom: "2rem",
        }}
      >
        Have questions, ideas, or collaboration offers?  
        We’d love to hear from you 💌  
        <br />
        <strong>Email:</strong> support@styleyourway.com
      </p>
      <a
        href="mailto:support@styleyourway.com"
        style={{
          background: "#d63384",
          color: "#fff",
          textDecoration: "none",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          fontSize: "1rem",
        }}
      >
        Send Email
      </a>
    </main>
  );
}
