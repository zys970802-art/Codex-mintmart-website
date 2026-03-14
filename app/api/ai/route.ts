import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ error: "prompt is required" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    // 如果没有配置 API Key，返回静态提示，保持 200 状态
    if (!apiKey) {
      return NextResponse.json({
        reply: "已收到，我们会尽快联系（AI 未启用）"
      });
    }

    // 有 API Key 时调用 OpenAI
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "你是 MintMart 官网的客服助手，用中文简洁回复。" },
          { role: "user", content: prompt },
        ],
        max_tokens: 120,
        temperature: 0.6,
      }),
    });

    if (!res.ok) {
      // AI 调用失败时也返回默认回复
      return NextResponse.json({
        reply: "已收到，我们会尽快联系（AI 未启用）"
      });
    }

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content?.trim();
    return NextResponse.json({ reply });
  } catch (error) {
    // 任何错误都返回默认回复
    return NextResponse.json({
      reply: "已收到，我们会尽快联系（AI 未启用）"
    });
  }
}
