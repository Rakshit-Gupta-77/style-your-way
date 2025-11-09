"use client";
import { useState } from "react";

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setIdea("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setIdea(data.result);
    } catch (err) {
      setIdea("⚠️ Error: Failed to get outfit ideas.");
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
        placeholder="e.g. casual coffee date outfit"
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
        style={{
          background: "#d63384",
          color: "#fff",
          border: "none",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {loading ? "Generating..." : "Generate Outfit ✨"}
      </button>

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
    </main>
  );
}
