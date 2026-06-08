"use client";

import {
  formatEther,
} from "viem";

import {
  useLiquidity,
} from "../hooks/useLiquidity";

export default function LPPositionCard() {

  const {

    lpBalance,

    totalLiquidity,

  } = useLiquidity();

  const ownership =

    totalLiquidity > BigInt(0)

      ? Number(
          lpBalance
        ) /

        Number(
          totalLiquidity
        ) *
        100

      : 0;

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        LP Position

      </h3>

      <div className="space-y-4">

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-4">

          <p className="text-sm text-gray-400 mb-2">

            LP Balance

          </p>

          <p className="text-xl font-bold text-cyan-300">

            {Number(
              formatEther(
                lpBalance
              )
            ).toFixed(2)}

          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-4">

          <p className="text-sm text-gray-400 mb-2">

            Pool Ownership

          </p>

          <p className="text-xl font-bold text-cyan-300">

            {ownership.toFixed(4)}%

          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-4">

          <p className="text-sm text-gray-400 mb-2">

            Total Liquidity

          </p>

          <p className="text-xl font-bold text-cyan-300">

            {Number(
              formatEther(
                totalLiquidity
              )
            ).toFixed(2)}

          </p>

        </div>

      </div>

    </div>
  );
}