"use client";

import {
  mockPools,
} from "../data/mockPool";

export default function MarketDepthCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Market Depth

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE DEPTH

        </div>

      </div>

      <div className="space-y-5">

        {mockPools.map((pool) => {

          const liquidity =

            Number(pool.reserveA) +
            Number(pool.reserveB);

          const buyDepth =

            liquidity * 0.55;

          const sellDepth =

            liquidity * 0.45;

          return (

            <div

              key={pool.id}

              className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

            >

              <div className="flex items-center justify-between mb-4">

                <h4 className="font-bold text-lg">

                  {pool.id}

                </h4>

                <p className="text-xs text-cyan-300">

                  Active Pool

                </p>

              </div>

              <div className="space-y-3">

                <div>

                  <div className="flex items-center justify-between mb-2">

                    <p className="text-xs text-gray-400">

                      Buy Depth

                    </p>

                    <p className="text-xs text-green-400">

                      ${(buyDepth / 1e18).toFixed(2)}

                    </p>

                  </div>

                  <div className="h-3 rounded-full bg-[#0f172a] overflow-hidden">

                    <div

                      className="h-full rounded-full bg-green-400"

                      style={{

                        width: "55%",
                      }}

                    />

                  </div>

                </div>

                <div>

                  <div className="flex items-center justify-between mb-2">

                    <p className="text-xs text-gray-400">

                      Sell Depth

                    </p>

                    <p className="text-xs text-red-400">

                      ${(sellDepth / 1e18).toFixed(2)}

                    </p>

                  </div>

                  <div className="h-3 rounded-full bg-[#0f172a] overflow-hidden">

                    <div

                      className="h-full rounded-full bg-red-400"

                      style={{

                        width: "45%",
                      }}

                    />

                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}