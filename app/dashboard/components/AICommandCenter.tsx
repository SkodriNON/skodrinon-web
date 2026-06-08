"use client";

import {
  useState,
} from "react";

const aiModules = [
  {
    name: "Treasury AI",
    description:
      "Treasury balancing and reserve optimization.",
    status: "Active",
  },
  {
    name: "Governance AI",
    description:
      "Proposal intelligence and DAO analytics.",
    status: "Learning",
  },
  {
    name: "Security AI",
    description:
      "Smart contract anomaly detection.",
    status: "Protected",
  },
  {
    name: "Liquidity AI",
    description:
      "Crosschain liquidity flow optimization.",
    status: "Synced",
  },
];

export default function AICommandCenter() {
  const [prompt, setPrompt] =
    useState("");

  const [response, setResponse] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function executeAI() {
    if (!prompt) {
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "/api/ai/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            prompt,
          }),
        }
      );

      const data = await res.json();

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
    <div className="rounded-xl border border-cyan-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">
            AI Layer
          </p>

          <h3 className="text-lg font-semibold">
            AI Command Center
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Online
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 xl:grid-cols-4">
        {aiModules.map((module) => (
          <div
            key={module.name}
            className="rounded-lg border border-cyan-500/10 bg-[#081222] p-3"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-sm font-semibold">
                {module.name}
              </p>

              <span className="text-[11px] text-cyan-300">
                {module.status}
              </span>
            </div>

            <p className="text-xs leading-5 text-gray-500">
              {module.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-lg border border-cyan-500/10 bg-[#081222] p-3">
          <p className="mb-2 text-sm font-semibold">
            Execute AI Analysis
          </p>

          <textarea
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
            placeholder="Analyze treasury risk, whale movement, governance sentiment..."
            className="h-[92px] w-full resize-none rounded-lg border border-cyan-500/10 bg-[#07101f] px-3 py-2 text-sm outline-none"
          />

          <button
            onClick={executeAI}
            disabled={loading}
            className="mt-3 h-10 w-full rounded-lg bg-cyan-600 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading
              ? "Running..."
              : "Execute AI Command"}
          </button>
        </div>

        <div className="rounded-lg border border-cyan-500/10 bg-[#081222] p-3">
          <p className="mb-2 text-sm font-semibold">
            AI Response
          </p>

          <div className="min-h-[145px] rounded-lg border border-cyan-500/10 bg-[#07101f] p-3">
            <p className="whitespace-pre-wrap text-sm leading-6 text-gray-300">
              {response ||
                "AI system ready for institutional protocol analysis."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}