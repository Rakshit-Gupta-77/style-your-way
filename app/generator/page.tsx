"use client";
import { useState } from "react";

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [idea, setIdea] = useState("");

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIdea(
      `✨ Outfit idea for "${prompt}":\n• Soft pastel top\n• High-waisted jeans\n• White sneakers\n• Beige tote bag`
    );
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
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3rem)",
          color: "#d63384",
          marginBottom: "1rem",
        }}
      >
        🧥 Outfit Generator
      </h1>
      <p
        style={{
          fontSize: "clamp(1rem, 4vw, 1.2rem)",
          maxWidth: "600px",
          marginBottom: "1.5rem",
        }}
      >
        Type an occasion, mood, or event — and we’ll generate a fashion idea for you 💫
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. brunch date, winter party"
          style={{
            width: "100%",
            padding: "0.8rem 1rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleGenerate}
          style={{
            width: "100%",
            padding: "0.8rem",
            background: "#d63384",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Generate
        </button>
      </div>

      {idea && (
        <div
          style={{
            marginTop: "2rem",
            background: "#fff",
            borderRadius: "10px",
            padding: "1.5rem",
            maxWidth: "500px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            whiteSpace: "pre-wrap",
            fontSize: "1rem",
            lineHeight: 1.5,
          }}
        >
          {idea}
        </div>
      )}
    </main>
  );
}
