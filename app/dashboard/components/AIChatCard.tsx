"use client";

import {
  useState,
} from "react";

export default function AIChatCard() {

  const [
    prompt,
    setPrompt,
  ] = useState("");

  const [
    response,
    setResponse,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function askAI() {

    if (!prompt) {
      return;
    }

    try {

      setLoading(true);

      const res =
        await fetch(

          "/api/ai/chat",

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({

                prompt,
              }),
          }
        );

      const data =
        await res.json();

      setResponse(
        data.response
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  }

  return (

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        SkodriNΩN AI

      </h3>

      <div className="space-y-4">

        <textarea

          value={prompt}

          onChange={(e) =>
            setPrompt(
              e.target.value
            )
          }

          placeholder="Ask AI about treasury, governance, risk..."

          className="w-full min-h-[120px] rounded-2xl bg-[#081222] border border-blue-500/10 px-4 py-4 outline-none resize-none"

        />

        <button

          onClick={askAI}

          disabled={loading}

          className="w-full rounded-2xl py-4 bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"

        >

          {loading

            ? "Thinking..."

            : "Ask AI"}

        </button>

        {response && (

          <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4 whitespace-pre-wrap text-sm leading-relaxed">

            {response}

          </div>
        )}

      </div>

    </div>
  );
}