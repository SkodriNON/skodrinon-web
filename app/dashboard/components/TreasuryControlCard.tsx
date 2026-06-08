"use client";

import {
  mockTreasuryAllocations,
} from "../data/mockTreasuryAllocations";

export default function TreasuryControlCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Treasury Control

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE TREASURY ENGINE

        </div>

      </div>

      <div className="space-y-5">

        {mockTreasuryAllocations.map((allocation) => (

          <div

            key={allocation.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Treasury Asset

                </p>

                <p className="text-lg font-semibold text-cyan-300">

                  {allocation.asset}

                </p>

              </div>

              <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-300">

                {allocation.allocation}

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Asset Value

                </p>

                <p className="text-sm font-semibold text-pink-300">

                  {allocation.value}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Strategy

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  {allocation.strategy}

                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}