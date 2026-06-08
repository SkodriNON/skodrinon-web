"use client";

import {
  useState,
} from "react";

const aiModules = [

  {
    name: "Treasury AI",

    description:
      "Realtime treasury balancing and reserve optimization.",

    status: "Active",
  },

  {
    name: "Governance AI",

    description:
      "Proposal intelligence and DAO voting analytics.",

    status: "Learning",
  },

  {
    name: "Security AI",

    description:
      "Realtime smart contract anomaly detection.",

    status: "Protected",
  },

  {
    name: "Liquidity AI",

    description:
      "Crosschain liquidity flow optimization engine.",

    status: "Synced",
  },
];

export default function AICommandCenter() {

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

  async function executeAI() {

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

    <div className="rounded-[32px] border border-cyan-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">

            Autonomous Intelligence Layer

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

            AI Command Center

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-sm font-semibold text-cyan-300">

            AI Systems Operational

          </span>

        </div>

      </div>

      {/* MODULES */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {aiModules.map((module) => (

          <div

            key={module.name}

            className="rounded-3xl border border-cyan-500/10 bg-[#081222]/80 backdrop-blur-xl p-6 hover:border-cyan-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-5">

              <h4 className="text-2xl font-bold">

                {module.name}

              </h4>

              <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">

                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-xs text-cyan-300">

                  {module.status}

                </span>

              </div>

            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">

              {module.description}

            </p>

            <button className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 hover:border-cyan-500/40 transition-all duration-300">

              Open AI Module

            </button>

          </div>
        ))}

      </div>

      {/* EXECUTION PANEL */}

      <div className="relative z-10 mt-8 rounded-3xl border border-cyan-500/10 bg-[#081222]/80 p-6">

        <h4 className="text-2xl font-bold mb-5">

          Execute AI Analysis

        </h4>

        <textarea

          value={prompt}

          onChange={(e) =>
            setPrompt(
              e.target.value
            )
          }

          placeholder="Analyze treasury risk, whale movement, governance sentiment..."

          className="w-full min-h-[140px] rounded-2xl bg-[#07101f] border border-cyan-500/10 px-4 py-4 outline-none resize-none mb-5"

        />

        <button

          onClick={executeAI}

          disabled={loading}

          className="w-full rounded-2xl py-4 bg-gradient-to-r from-cyan-600 to-blue-600 font-bold"

        >

          {loading

            ? "Running AI Analysis..."

            : "Execute AI Command"}

        </button>

        <div className="mt-6 rounded-2xl border border-cyan-500/10 bg-[#07101f] p-5 min-h-[180px]">

          <p className="text-sm leading-relaxed whitespace-pre-wrap text-gray-300">

            {response ||

              "AI system ready for institutional protocol analysis."}

          </p>

        </div>

      </div>

    </div>
  );
}