"use client";

import {
  mockLiquidityPositions,
} from "../data/mockLiquidityPositions";

export default function LiquidityPositionsCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Liquidity Positions

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE LP POSITIONS

        </div>

      </div>

      <div className="space-y-5">

        {mockLiquidityPositions.map((position) => (

          <div

            key={position.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Liquidity Pair

                </p>

                <p className="text-lg font-semibold text-cyan-300">

                  {position.pair}

                </p>

              </div>

              <div className={`rounded-full px-3 py-1 text-xs border ${
                position.status === "Active"

                  ? "border-green-500/20 bg-green-500/10 text-green-300"

                  : "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"
              }`}>

                {position.status}

              </div>

            </div>

            <div className="grid grid-cols-3 gap-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Pool Share

                </p>

                <p className="text-sm font-semibold text-pink-300">

                  {position.share}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Position Value

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  {position.value}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Yield

                </p>

                <p className="text-sm font-semibold text-green-300">

                  {position.yield}

                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}