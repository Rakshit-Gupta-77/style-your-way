"use client";
import { useState } from "react";

export default function GeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError("");
    setIdea("");
    fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const t = await res.json().catch(() => ({}));
          throw new Error(t?.error || "Failed to generate outfit");
        }
        return res.json();
      })
      .then((data) => {
        setIdea(data?.result || "");
      })
      .catch((e: any) => {
        setError(e?.message || "Something went wrong");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="mx-auto max-w-3xl py-16 text-center">
      <h2 className="text-3xl font-bold text-purple-700">AI Outfit Generator</h2>
      <p className="mt-2 text-gray-600">Describe your vibe or event — get a unique fashion idea instantly ✨</p>

      <div className="mx-auto mt-6 flex max-w-md items-center gap-2">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. Dinner date outfit"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base shadow-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="shrink-0 rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white shadow transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Generating…" : "Generate 💫"}
        </button>
      </div>

      {error && (
        <div className="mx-auto mt-6 max-w-md rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {idea && (
        <div className="mx-auto mt-8 max-w-xl whitespace-pre-wrap rounded-xl border bg-white/70 p-6 text-left text-gray-800 shadow-sm backdrop-blur">
          {idea}
        </div>
      )}
    </section>
  );
}
