"use client";

import {
  mockStress,
} from "../data/mockStress";

export default function AILiquidityStressCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          AI Liquidity Stress

        </h3>

        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">

          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-xs text-cyan-300">

            AI MONITORING

          </span>

        </div>

      </div>

      <div className="space-y-5">

        {mockStress.map((item) => (

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

                  Liquidity Stress Monitoring

                </p>

              </div>

              <div className={`rounded-full px-3 py-1 text-xs border ${
                item.stress === "HIGH"

                  ? "border-red-500/20 bg-red-500/10 text-red-300"

                  : item.stress === "MEDIUM"

                  ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"

                  : "border-green-500/20 bg-green-500/10 text-green-300"
              }`}>

                {item.stress}

              </div>

            </div>

            <div className="mb-4">

              <div className="flex items-center justify-between mb-2">

                <p className="text-xs text-gray-400">

                  Liquidity Risk

                </p>

                <p className="text-xs text-cyan-300">

                  {item.liquidityRisk}

                </p>

              </div>

              <div className="h-3 rounded-full bg-[#0f172a] overflow-hidden">

                <div

                  className="h-full rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"

                  style={{

                    width:
                      item.liquidityRisk,
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

                  AI Status

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  ACTIVE

                </p>

              </div>

            </div>

            <div className="rounded-2xl border border-cyan-500/10 bg-[#07101f] px-4 py-3">

              <p className="text-sm text-cyan-200">

                {item.aiWarning}

              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}