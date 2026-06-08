
"use client";

import {
  useState,
} from "react";

export default function AIChat() {

  const [
    message,
    setMessage,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    response,
    setResponse,
  ] = useState("");

  async function askAI() {

    if (!message.trim()) {
      return;
    }

    try {

      setLoading(true);

      setResponse("");

      const res =
        await fetch(
          "/api/ai/chat",
          {

            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              message,
            }),
          }
        );

const data =
  await res.json();

console.log(data);

if (data.error) {

  setResponse(
    `Error: ${data.error}`
  );

  return;
}

setResponse(
  data.response
);

    } catch {

      setResponse(
        "AI request failed"
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <div className="rounded-xl border border-cyan-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8">

      {/* HEADER */}

      <div className="mb-8">

        <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">

          Autonomous Intelligence Interface

        </p>

        <h3 className="text-xlsm:text-xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">

          AI Command Interface

        </h3>

      </div>

      {/* INPUT */}

      <div className="space-y-5">

        <textarea

          value={message}

          onChange={(e) =>
            setMessage(
              e.target.value
            )
          }

          placeholder="Ask SkodriNΩN AI about governance, treasury, DeFi, liquidity or protocol intelligence..."

          className="w-full h-40 rounded-xlborder border-cyan-500/10 bg-[#081222] p-5 text-white outline-none resize-none"

        />

        <button

          onClick={askAI}

          disabled={loading}

          className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"

        >

          {
            loading
              ? "Thinking..."
              : "Ask AI"
          }

        </button>

        {/* RESPONSE */}

        {response && (

          <div className="rounded-xlborder border-cyan-500/10 bg-[#081222] p-6 whitespace-pre-wrap leading-relaxed text-gray-300">

            {response}

          </div>

        )}

      </div>

    </div>
  );
}