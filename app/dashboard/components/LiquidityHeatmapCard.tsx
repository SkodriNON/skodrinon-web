"use client";

import {
  mockPools,
} from "../data/mockPool";

export default function LiquidityHeatmapCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Liquidity Heatmap

        </h3>

        <div className="rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs text-pink-300">

          LIVE FLOW

        </div>

      </div>

      <div className="space-y-5">

        {mockPools.map((pool) => {

          const liquidity =

            Number(pool.reserveA) +
            Number(pool.reserveB);

          const concentration =

            liquidity /
            1e18;

          const intensity =

            concentration > 3000000

              ? "95%"

              : concentration > 1000000

              ? "70%"

              : "45%";

          return (

            <div

              key={pool.id}

              className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

            >

              <div className="flex items-center justify-between mb-4">

                <div>

                  <h4 className="font-bold text-lg">

                    {pool.id}

                  </h4>

                  <p className="text-xs text-gray-400 mt-1">

                    Liquidity Concentration

                  </p>

                </div>

                <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

                  ACTIVE

                </div>

              </div>

              <div className="mb-3">

                <div className="h-4 rounded-full bg-[#0f172a] overflow-hidden">

                  <div

                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500"

                    style={{

                      width:
                        intensity,
                    }}

                  />

                </div>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-xs text-gray-400">

                  Capital Density

                </p>

                <p className="text-sm font-semibold text-cyan-300">

                  {intensity}

                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}