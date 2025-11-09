"use client";
import { useState } from "react";

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [idea, setIdea] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // 👈 New: For image
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setIdea("");
    setImageUrl("");

    try {
      // 1️⃣ Text generation
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setIdea(data.result);

      // 2️⃣ Image generation
      const imgRes = await fetch("/api/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const imgData = await imgRes.json();
      setImageUrl(imgData.imageUrl);
    } catch (err) {
      setIdea("⚠️ Error: Failed to generate outfit idea or image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #fff, #fde2e4)",
        textAlign: "center",
        padding: "2rem 1rem",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", color: "#d63384" }}>
        🧥 AI Outfit Generator
      </h1>
      <p style={{ maxWidth: "600px", margin: "1rem 0 2rem", fontSize: "1.1rem" }}>
        Describe your mood, event, or style — and our AI stylist will design your outfit 💫
      </p>

      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. elegant dinner outfit in Paris"
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "0.8rem 1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          background: loading ? "#aaa" : "#d63384",
          color: "#fff",
          border: "none",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
          transition: "0.2s",
        }}
      >
        {loading ? "Generating..." : "Generate Outfit ✨"}
      </button>

      {/* Show outfit idea */}
      {idea && (
        <div
          style={{
            marginTop: "2rem",
            background: "#fff",
            borderRadius: "10px",
            padding: "1.5rem",
            maxWidth: "600px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            whiteSpace: "pre-wrap",
            textAlign: "left",
          }}
        >
          {idea}
        </div>
      )}

      {/* Show AI-generated outfit image */}
      {imageUrl && (
        <div style={{ marginTop: "2rem" }}>
          <img
            src={imageUrl}
            alt="AI generated outfit"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
          <a
            href={imageUrl}
            download="ai-outfit.png"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              color: "#d63384",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            ⬇️ Download Image
          </a>
        </div>
      )}
    </main>
  );
}
