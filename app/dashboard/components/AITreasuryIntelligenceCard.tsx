"use client";

import {
  mockTreasuryAI,
} from "../data/mockTreasuryAI";

export default function AITreasuryIntelligenceCard() {

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          AI Treasury Intelligence

        </h3>

        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">

          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-xs text-cyan-300">

            TREASURY AI

          </span>

        </div>

      </div>

      <div className="space-y-5">

        {mockTreasuryAI.map((item) => (

          <div

            key={item.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <h4 className="font-bold text-lg">

                  {item.strategy}

                </h4>

                <p className="text-xs text-gray-400 mt-1">

                  Treasury Optimization Strategy

                </p>

              </div>

              <div className={`rounded-full px-3 py-1 text-xs border ${
                item.risk === "Low"

                  ? "border-green-500/20 bg-green-500/10 text-green-300"

                  : "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"
              }`}>

                {item.risk} Risk

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Allocation

                </p>

                <p className="text-sm font-semibold text-cyan-300">

                  {item.allocation}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Efficiency

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  {item.efficiency}

                </p>

              </div>

            </div>

            <div className="mb-4">

              <div className="h-3 rounded-full bg-[#0f172a] overflow-hidden">

                <div

                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400"

                  style={{

                    width:
                      item.efficiency,
                  }}

                />

              </div>

            </div>

            <div className="rounded-2xl border border-cyan-500/10 bg-[#07101f] px-4 py-3">

              <p className="text-sm text-cyan-200">

                {item.aiInsight}

              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}