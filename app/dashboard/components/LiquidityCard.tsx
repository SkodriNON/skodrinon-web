"use client";

import { useState } from "react";

import {
  parseEther,
  formatEther,
} from "viem";

import { useLiquidity } from "../hooks/useLiquidity";

export default function LiquidityCard() {
  const [ethAmount, setEthAmount] = useState("");
  const [sknonAmount, setSknonAmount] = useState("");

  const {
    reserveETH,
    reserveSKNON,
    addLiquidity,
  } = useLiquidity();

  function handleAddLiquidity() {
    if (!ethAmount || !sknonAmount) {
      return;
    }

    addLiquidity(
      parseEther(ethAmount),
      parseEther(sknonAmount)
    );

    setEthAmount("");
    setSknonAmount("");
  }

  return (
    <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300">
            Liquidity
          </p>

          <h3 className="text-lg font-semibold">
            Add Liquidity
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_auto]">
        <input
          value={ethAmount}
          onChange={(e) => setEthAmount(e.target.value)}
          placeholder="ETH amount"
          className="h-11 rounded-lg border border-blue-500/10 bg-[#081222] px-3 text-sm outline-none"
        />

        <input
          value={sknonAmount}
          onChange={(e) => setSknonAmount(e.target.value)}
          placeholder="SKNON amount"
          className="h-11 rounded-lg border border-blue-500/10 bg-[#081222] px-3 text-sm outline-none"
        />

        <button
          onClick={handleAddLiquidity}
          className="h-11 rounded-lg bg-cyan-600 px-5 text-sm font-semibold text-white hover:bg-cyan-500"
        >
          Add
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-blue-500/10 bg-[#081222] p-3">
          <p className="text-[11px] text-gray-400">
            ETH Reserve
          </p>

          <p className="mt-1 text-sm font-semibold text-cyan-300">
            {Number(formatEther(reserveETH)).toFixed(2)}
          </p>
        </div>

        <div className="rounded-lg border border-blue-500/10 bg-[#081222] p-3">
          <p className="text-[11px] text-gray-400">
            SKNON Reserve
          </p>

          <p className="mt-1 text-sm font-semibold text-cyan-300">
            {Number(formatEther(reserveSKNON)).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}