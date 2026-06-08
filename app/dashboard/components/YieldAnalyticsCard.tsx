"use client";

import {
  mockYieldAnalytics,
} from "../data/mockYieldAnalytics";

export default function YieldAnalyticsCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Yield Analytics

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE YIELD DATA

        </div>

      </div>

      <div className="space-y-5">

        {mockYieldAnalytics.map((pool) => (

          <div

            key={pool.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Liquidity Pool

                </p>

                <p className="text-lg font-semibold text-cyan-300">

                  {pool.pair}

                </p>

              </div>

              <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-300">

                HIGH YIELD

              </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  APR

                </p>

                <p className="text-sm font-semibold text-pink-300">

                  {pool.apr}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  APY

                </p>

                <p className="text-sm font-semibold text-green-300">

                  {pool.apy}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Fees 24H

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  {pool.fees24h}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Volume 24H

                </p>

                <p className="text-sm font-semibold text-cyan-300">

                  {pool.volume24h}

                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}