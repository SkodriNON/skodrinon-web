"use client";

import {
  mockVolatility,
} from "../data/mockVolatility";

export default function AIVolatilityCard() {

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          AI Volatility Engine

        </h3>

        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">

          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-xs text-cyan-300">

            AI ACTIVE

          </span>

        </div>

      </div>

      <div className="space-y-5">

        {mockVolatility.map((item) => (

          <div

            key={item.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <h4 className="font-bold text-lg">

                  {item.pair}

                </h4>

                <p className="text-xs text-gray-400 mt-1">

                  Predictive Volatility Analysis

                </p>

              </div>

              <div className={`rounded-full px-3 py-1 text-xs border ${
                item.volatility === "HIGH"

                  ? "border-red-500/20 bg-red-500/10 text-red-300"

                  : item.volatility === "MEDIUM"

                  ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"

                  : "border-green-500/20 bg-green-500/10 text-green-300"
              }`}>

                {item.volatility}

              </div>

            </div>

            <div className="mb-4">

              <div className="flex items-center justify-between mb-2">

                <p className="text-xs text-gray-400">

                  Volatility Score

                </p>

                <p className="text-xs text-cyan-300">

                  {item.score}/100

                </p>

              </div>

              <div className="h-3 rounded-full bg-[#0f172a] overflow-hidden">

                <div

                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500"

                  style={{

                    width:
                      `${item.score}%`,
                  }}

                />

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Market Pressure

                </p>

                <p className="text-sm font-semibold text-pink-300">

                  {item.pressure}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  AI Prediction

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  ACTIVE

                </p>

              </div>

            </div>

            <div className="rounded-2xl border border-cyan-500/10 bg-[#07101f] px-4 py-3">

              <p className="text-sm text-cyan-200">

                {item.aiPrediction}

              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}