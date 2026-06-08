"use client";

import {
  useAccount,
} from "wagmi";

import {
  useSwapExecution,
} from "../hooks/useSwapExecution";

import {
  CONTRACTS,
} from "../../lib/contracts";

export default function SwapExecutionCard() {

  const {
    address,
  } = useAccount();

  const {

    executeSwap,

    isPending,

    error,

  } = useSwapExecution();

  async function handleExecution() {

  if (!address) {
    return;
  }

  await executeSwap(

    "1",

    "0.1",

    [
      process.env.NEXT_PUBLIC_WETH as `0x${string}`,

      CONTRACTS.ethereum.TOKEN,
    ],

    address,

    BigInt(
      Math.floor(
        Date.now() / 1000
      ) + 60 * 20
    )
  );
}

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Swap Execution

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          ONCHAIN EXECUTION

        </div>

      </div>

      <div className="space-y-5">

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Execution Status

          </p>

          <p className={`text-lg font-semibold ${
            isPending

              ? "text-yellow-300"

              : error

              ? "text-red-300"

              : "text-green-300"
          }`}>

            {isPending

              ? "Transaction Pending"

              : error

              ? "Execution Failed"

              : "Ready For Execution"}
          </p>

        </div>

        <button

          onClick={handleExecution}

          disabled={
            isPending ||
            !address
          }

          className="w-full rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all px-5 py-4 text-black font-bold disabled:opacity-50"

        >

          Execute Real Swap

        </button>

      </div>

    </div>
  );
}