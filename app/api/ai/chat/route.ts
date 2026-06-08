import OpenAI from "openai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const apiKey =
      process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          response:
            "AI module is not configured. OPENAI_API_KEY is missing.",
        },
        {
          status: 200,
        }
      );
    }

    const {
      prompt,
    } = await req.json();

    const openai =
      new OpenAI({
        apiKey,
      });

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content:
              "You are SkodriNΩN AI, an institutional crypto governance and treasury intelligence assistant.",
          },
          {
            role: "user",
            content:
              prompt || "Analyze protocol status.",
          },
        ],
      });

    return Response.json({
      response:
        completion.choices?.[0]?.message?.content ||
        "AI response unavailable.",
    });
  } catch (error) {
    console.error("AI route error:", error);

    return Response.json(
      {
        response:
          "AI request failed temporarily. Please try again later.",
      },
      {
        status: 200,
      }
    );
  }
}