"use client";

import {
  formatEther,
} from "viem";

import {
  useLiquidity,
} from "../hooks/useLiquidity";

export default function VolumeAnalyticsCard() {

  const {

    totalVolume,

    protocolFees,

  } = useLiquidity();

  const estimatedDailyVolume =

    Number(
      formatEther(
        totalVolume
      )
    ) * 24;

  return (

    <div className="rounded-xlborder border-green-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Volume Analytics

      </h3>

      <div className="space-y-4">

        <div className="rounded-2xl border border-green-500/10 bg-[#081222] p-5">

          <p className="text-sm text-gray-400 mb-2">

            Total Swap Volume

          </p>

          <p className="text-xlfont-black text-green-400">

            {Number(
              formatEther(
                totalVolume
              )
            ).toFixed(4)}{" "}

            ETH

          </p>

        </div>

        <div className="rounded-2xl border border-green-500/10 bg-[#081222] p-5">

          <p className="text-sm text-gray-400 mb-2">

            Estimated Daily Volume

          </p>

          <p className="text-2xl font-bold text-cyan-300">

            ${estimatedDailyVolume.toFixed(2)}

          </p>

        </div>

        <div className="rounded-2xl border border-green-500/10 bg-[#081222] p-5">

          <p className="text-sm text-gray-400 mb-2">

            Protocol Revenue

          </p>

          <p className="text-2xl font-bold text-yellow-400">

            {Number(
              formatEther(
                protocolFees
              )
            ).toFixed(4)}{" "}

            ETH

          </p>

        </div>

      </div>

    </div>
  );
}