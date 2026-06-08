import OpenAI
from "openai";

const openai =
  new OpenAI({

    apiKey:
      process.env.OPENAI_API_KEY,
  });

export async function POST(
  req: Request
) {

  try {

    const {
      prompt,
    } = await req.json();

    const completion =
      await openai.chat.completions.create({

        model:
          "gpt-4.1-mini",

        messages: [

          {
            role: "system",

            content:
              "You are SkodriNΩN AI, an institutional crypto governance and treasury intelligence assistant.",
          },

          {
            role: "user",

            content:
              prompt,
          },
        ],
      });

    return Response.json({

      response:

        completion
          .choices?.[0]
          ?.message
          ?.content || "",
    });

  } catch (error) {

    console.error(error);

    return Response.json(

      {
        error:
          "AI request failed",
      },

      {
        status: 500,
      }
    );
  }
}