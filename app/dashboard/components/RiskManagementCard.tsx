"use client";

import {
  mockRiskMetrics,
} from "../data/mockRiskMetrics";

export default function RiskManagementCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Risk Management

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE RISK ENGINE

        </div>

      </div>

      <div className="space-y-5">

        {mockRiskMetrics.map((risk) => (

          <div

            key={risk.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Risk Category

                </p>

                <p className="text-lg font-semibold text-cyan-300">

                  {risk.category}

                </p>

              </div>

              <div className={`rounded-full px-3 py-1 text-xs border ${
                risk.level === "Low"

                  ? "border-green-500/20 bg-green-500/10 text-green-300"

                  : risk.level === "Medium"

                  ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"

                  : "border-red-500/20 bg-red-500/10 text-red-300"
              }`}>

                {risk.level}

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Current Metric

                </p>

                <p className="text-sm font-semibold text-pink-300">

                  {risk.value}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Status

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  {risk.status}

                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}