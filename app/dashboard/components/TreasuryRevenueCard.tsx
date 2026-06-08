"use client";

import {
  formatEther,
} from "viem";

import {
  useLiquidity,
} from "../hooks/useLiquidity";

export default function TreasuryRevenueCard() {

  const {
    protocolFees,
  } = useLiquidity();

  return (

    <div className="rounded-xlborder border-yellow-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Treasury Revenue

      </h3>

      <div className="space-y-4">

        <div className="rounded-2xl border border-yellow-500/10 bg-[#081222] p-5">

          <p className="text-sm text-gray-400 mb-2">

            Protocol Fees Earned

          </p>

          <p className="text-xlfont-black text-yellow-400">

            {Number(
              formatEther(
                protocolFees
              )
            ).toFixed(4)}{" "}

            ETH

          </p>

        </div>

        <div className="rounded-2xl border border-yellow-500/10 bg-[#081222] p-5">

          <p className="text-sm text-gray-400 mb-2">

            Revenue Source

          </p>

          <p className="text-sm text-yellow-300 leading-relaxed">

            Generated from AMM swap execution fees and liquidity routing activity.

          </p>

        </div>

      </div>

    </div>
  );
}