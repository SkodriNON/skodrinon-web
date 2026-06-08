"use client";

import { useState } from "react";

import {
  parseEther,
  formatEther,
} from "viem";

import { useAccount } from "wagmi";

import { useSwapActions } from "../hooks/useSwapActions";
import { useSwapQuote } from "../hooks/useSwapQuote";
import { useSlippage } from "../hooks/useSlippage";
import { useAMMQuote } from "../hooks/useAMMQuote";
import { useLiquidity } from "../hooks/useLiquidity";

import { TOKENS } from "../data/tokens";

import PoolSelector from "./PoolSelector";

import { findBestPool } from "../../lib/router";

export default function SwapCard() {
  const { address } = useAccount();

  const [amount, setAmount] = useState("");
  const [slippage, setSlippage] = useState("1");

  const [tokenIn, setTokenIn] =
    useState<(typeof TOKENS)[number]>(TOKENS[0]);

  const [tokenOut, setTokenOut] =
    useState<(typeof TOKENS)[number]>(TOKENS[1]);

  const bestPool = findBestPool();

  const [selectedPool, setSelectedPool] =
    useState(bestPool.id);

  const parsedAmount =
    amount && Number(amount) > 0
      ? parseEther(amount)
      : BigInt(0);

  const { amountsOut } = useSwapQuote(parsedAmount, [
    tokenIn.address as `0x${string}`,
    tokenOut.address as `0x${string}`,
  ]);

  const {
    amountOut,
    priceImpact,
    riskLevel,
    whaleTrade,
  } = useAMMQuote(parsedAmount, selectedPool);

  const { minimumReceived } = useSlippage(
    amountsOut && Array.isArray(amountsOut)
      ? (amountsOut[amountsOut.length - 1] as bigint)
      : undefined,
    Number(slippage)
  );

  const {
    executeSwap,
    txLoading,
    txConfirming,
    txConfirmed,
  } = useSwapActions();

  const { executeSwap: executePoolSwap } =
    useLiquidity();

  const estimatedFee = "0.0021";

  async function handleSwap() {
    if (!address) return;

    executePoolSwap(parsedAmount, amountOut);

    await executeSwap(
      tokenIn.address as `0x${string}`,
      tokenOut.address as `0x${string}`,
      amount,
      address
    );
  }

  function reverseTokens() {
    setTokenIn(tokenOut);
    setTokenOut(tokenIn);
  }

  return (
    <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300">
            Exchange
          </p>

          <h3 className="text-xl font-bold">
            Swap
          </h3>
        </div>

        <div className="rounded-lg border border-cyan-500/10 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
          {bestPool.id}
        </div>
      </div>

      <div className="space-y-3">
        <PoolSelector
          selectedPool={selectedPool}
          setSelectedPool={setSelectedPool}
        />

        <div className="grid grid-cols-[1fr_42px_1fr] items-center gap-2">
          <select
            value={tokenIn.address}
            onChange={(e) =>
              setTokenIn(
                TOKENS.find(
                  (token) =>
                    token.address === e.target.value
                )!
              )
            }
            className="h-11 rounded-lg border border-blue-500/10 bg-[#081222] px-3 text-sm outline-none"
          >
            {TOKENS.map((token) => (
              <option
                key={token.symbol}
                value={token.address}
              >
                {token.symbol}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={reverseTokens}
            className="h-11 rounded-lg border border-blue-500/20 bg-[#081222] text-sm transition hover:border-blue-500/40"
          >
            ⇄
          </button>

          <select
            value={tokenOut.address}
            onChange={(e) =>
              setTokenOut(
                TOKENS.find(
                  (token) =>
                    token.address === e.target.value
                )!
              )
            }
            className="h-11 rounded-lg border border-blue-500/10 bg-[#081222] px-3 text-sm outline-none"
          >
            {TOKENS.map((token) => (
              <option
                key={token.symbol}
                value={token.address}
              >
                {token.symbol}
              </option>
            ))}
          </select>
        </div>

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.0"
          className="h-12 w-full rounded-lg border border-blue-500/10 bg-[#081222] px-3 text-sm outline-none"
        />

        <div className="rounded-lg border border-blue-500/10 bg-[#081222] p-3">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs text-gray-400">
              Slippage
            </p>

            <p className="text-xs text-blue-400">
              {slippage}%
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {["0.5", "1", "3"].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setSlippage(value)}
                className={`h-9 rounded-lg text-xs transition ${
                  slippage === value
                    ? "bg-blue-600 text-white"
                    : "border border-blue-500/10 bg-[#07101f] text-gray-300"
                }`}
              >
                {value}%
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-blue-500/10 bg-[#081222] p-3">
            <p className="text-[11px] text-gray-400">
              Estimated Output
            </p>

            <p className="mt-1 text-sm font-bold text-green-400">
              {Number(formatEther(amountOut)).toFixed(4)}{" "}
              {tokenOut.symbol}
            </p>
          </div>

          <div className="rounded-lg border border-blue-500/10 bg-[#081222] p-3">
            <p className="text-[11px] text-gray-400">
              Minimum Received
            </p>

            <p className="mt-1 text-sm font-bold text-cyan-400">
              {Number(formatEther(minimumReceived)).toFixed(4)}{" "}
              {tokenOut.symbol}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="rounded-lg border border-blue-500/10 bg-[#081222] p-3">
            <p className="text-[11px] text-gray-400">
              Price Impact
            </p>

            <p className="mt-1 text-sm font-semibold text-orange-400">
              {priceImpact}%
            </p>
          </div>

          <div className="rounded-lg border border-blue-500/10 bg-[#081222] p-3">
            <p className="text-[11px] text-gray-400">
              Risk
            </p>

            <p
              className={`mt-1 text-sm font-semibold ${
                riskLevel === "HIGH"
                  ? "text-red-400"
                  : riskLevel === "MEDIUM"
                  ? "text-yellow-400"
                  : "text-green-400"
              }`}
            >
              {riskLevel}
            </p>
          </div>

          <div className="rounded-lg border border-blue-500/10 bg-[#081222] p-3">
            <p className="text-[11px] text-gray-400">
              Gas Fee
            </p>

            <p className="mt-1 text-sm font-semibold text-yellow-400">
              {estimatedFee} ETH
            </p>
          </div>
        </div>

        {whaleTrade && (
          <div className="rounded-lg border border-orange-500/20 bg-orange-500/10 p-3">
            <p className="text-xs font-semibold text-orange-300">
              Whale activity detected
            </p>

            <p className="mt-1 text-xs leading-5 text-orange-200">
              Large swap size may affect pool liquidity and execution pricing.
            </p>
          </div>
        )}

        <button
          onClick={handleSwap}
          disabled={txLoading || txConfirming}
          className="h-12 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold disabled:opacity-50"
        >
          {txLoading || txConfirming
            ? "Swapping..."
            : txConfirmed
            ? "Swap Complete"
            : "Execute Swap"}
        </button>
      </div>
    </div>
  );
}