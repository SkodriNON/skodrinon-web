"use client";

import {
  formatEther,
} from "viem";

import {
  mockPools,
} from "../data/mockPool";

export default function PoolAnalyticsCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Pool Analytics

      </h3>

      <div className="space-y-4">

        {mockPools.map((pool) => {

          const tvl =

            Number(
              formatEther(
                pool.reserveA
              )
            ) +

            Number(
              formatEther(
                pool.reserveB
              )
            );

          const estimatedFees =

            tvl * 0.003;

          return (

            <div

              key={pool.id}

              className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

            >

              <div className="flex items-center justify-between mb-4">

                <h4 className="text-xl font-bold">

                  {pool.tokenA}
                  {" / "}
                  {pool.tokenB}

                </h4>

                <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

                  Active

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>

                  <p className="text-xs text-gray-400 mb-1">

                    TVL

                  </p>

                  <p className="text-lg font-bold text-cyan-300">

                    ${tvl.toFixed(2)}

                  </p>

                </div>

                <div>

                  <p className="text-xs text-gray-400 mb-1">

                    Estimated Fees

                  </p>

                  <p className="text-lg font-bold text-yellow-400">

                    ${estimatedFees.toFixed(2)}

                  </p>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}