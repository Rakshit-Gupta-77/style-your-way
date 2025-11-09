import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json(
      { error: "Missing prompt" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a fashion stylist AI assistant. Suggest stylish outfit ideas with descriptions of colors, materials, and accessories.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.9,
      }),
    });

    const data = await response.json();
    const aiText =
      data?.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate an outfit idea.";

    return NextResponse.json({ result: aiText });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate outfit" },
      { status: 500 }
    );
  }
}
