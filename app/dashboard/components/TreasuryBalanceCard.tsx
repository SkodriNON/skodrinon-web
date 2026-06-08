"use client";

import {
  useTreasuryBalance,
} from "../hooks/useTreasuryBalance";

export default function TreasuryBalanceCard() {

  const {

    treasuryBalance,

    isLoading,

    error,

  } = useTreasuryBalance();

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Treasury Balance

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE TREASURY

        </div>

      </div>

      <div className="space-y-5">

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Treasury Status

          </p>

          <p className={`text-lg font-semibold ${
            isLoading

              ? "text-yellow-300"

              : error

              ? "text-red-300"

              : "text-green-300"
          }`}>

            {isLoading

              ? "Loading Treasury"

              : error

              ? "Treasury Read Failed"

              : "Treasury Connected"}
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Live Balance

          </p>

          <p className="text-lg font-semibold text-cyan-300 break-all">

            {treasuryBalance

              ? `${Number(treasuryBalance.value) / 1e18} ${treasuryBalance.symbol}`

              : "No treasury balance"}
          </p>

        </div>

      </div>

    </div>
  );
}