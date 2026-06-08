"use client";

import {
  useState,
} from "react";

import {
  parseEther,
  formatEther,
} from "viem";

import {
  useAccount,
} from "wagmi";

import {
  useSwapActions,
} from "../hooks/useSwapActions";

import {
  useSwapQuote,
} from "../hooks/useSwapQuote";

import {
  useSlippage,
} from "../hooks/useSlippage";

import { TOKENS }
from "../data/tokens";

import {
  usePriceImpact,
} from "../hooks/usePriceImpact";

import {
  useAMMQuote,
} from "../hooks/useAMMQuote";

import {
  useLiquidity,
} from "../hooks/useLiquidity";

import PoolSelector
from "./PoolSelector";

import {
  findBestPool,
} from "../../lib/router";

export default function SwapCard() {

  const {
    address,
  } = useAccount();

  const [
    amount,
    setAmount,
  ] = useState("");

  const [
    slippage,
    setSlippage,
  ] = useState("1");

  const [
    tokenIn,
    setTokenIn,
  ] = useState<
    (typeof TOKENS)[number]
  >(
    TOKENS[0]
  );

  const [
    tokenOut,
    setTokenOut,
  ] = useState<
    (typeof TOKENS)[number]
  >(
    TOKENS[1]
  );

const bestPool =
  findBestPool();

const [
  selectedPool,
  setSelectedPool,
] = useState(
  bestPool.id
);

  const parsedAmount =

    amount &&
    Number(amount) > 0

      ? parseEther(amount)

      : BigInt(0);

  const {
    amountsOut,
  } = useSwapQuote(

    parsedAmount,

    [

      tokenIn.address as `0x${string}`,

      tokenOut.address as `0x${string}`,
    ]
  );

  const {

  amountOut,

  priceImpact,

  riskLevel,

  whaleTrade,

} = useAMMQuote(

  parsedAmount,

  selectedPool
);

  const {
    minimumReceived,
  } = useSlippage(

    amountsOut &&
    Array.isArray(amountsOut)

      ? amountsOut[
          amountsOut.length - 1
        ] as bigint

      : undefined,

    Number(slippage)
  );

  const {

    executeSwap,

    txLoading,

    txConfirming,

    txConfirmed,

  } = useSwapActions();

  const {
  executeSwap:
    executePoolSwap,
} = useLiquidity();

  const estimatedFee =
    "0.0021";

  async function handleSwap() {

    if (!address) {
      return;
    }

    executePoolSwap(

  parsedAmount,

  amountOut
);

    await executeSwap(

      tokenIn.address as `0x${string}`,

      tokenOut.address as `0x${string}`,

      amount,

      address
    );
  }

  function reverseTokens() {

    const currentIn =
      tokenIn;

    const currentOut =
      tokenOut;

    setTokenIn(
      currentOut
    );

    setTokenOut(
      currentIn
    );
  }

  return (

    <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">
        Swap
      </h3>

      <div className="space-y-4">

        <PoolSelector

  selectedPool={
    selectedPool
  }

  setSelectedPool={
    setSelectedPool
  }

/>

<div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-4">

  <p className="text-xs text-gray-400 mb-2">

    Smart Routing

  </p>

  <p className="text-sm font-semibold text-cyan-300">

    Best Pool:
    {" "}

    {bestPool.id}

  </p>

</div>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">

          <select

            value={tokenIn.address}

            onChange={(e) =>

              setTokenIn(

                TOKENS.find(
                  (token) =>

                    token.address ===
                    e.target.value

                )!
              )
            }

            className="rounded-2xl bg-[#081222] border border-blue-500/10 px-4 py-4"

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

            className="w-12 h-12 rounded-2xl border border-blue-500/20 bg-[#081222] hover:border-blue-500/40 transition-all duration-300"

          >

            ⇄

          </button>

          <select

            value={tokenOut.address}

            onChange={(e) =>

              setTokenOut(

                TOKENS.find(
                  (token) =>

                    token.address ===
                    e.target.value

                )!
              )
            }

            className="rounded-2xl bg-[#081222] border border-blue-500/10 px-4 py-4"

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

          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }

          placeholder="0.0"

          className="w-full rounded-2xl bg-[#081222] border border-blue-500/10 px-4 py-4 outline-none"

        />

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4">

          <div className="flex items-center justify-between mb-3">

            <p className="text-sm text-gray-400">

              Slippage

            </p>

            <p className="text-sm text-blue-400">

              {slippage}%

            </p>

          </div>

          <div className="flex gap-2">

            {["0.5", "1", "3"].map(
              (value) => (

                <button

                  key={value}

                  type="button"

                  onClick={() =>
                    setSlippage(
                      value
                    )
                  }

                  className={`flex-1 rounded-xl py-2 text-sm transition-all duration-300 ${
                    slippage === value

                      ? "bg-blue-600 text-white"

                      : "bg-[#07101f] border border-blue-500/10 text-gray-300"
                  }`}

                >

                  {value}%

                </button>
              )
            )}

          </div>

        </div>

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] px-4 py-3">

          <p className="text-xs text-gray-400 mb-1">

            Estimated Output

          </p>

          <p className="text-lg font-bold text-green-400">

  {Number(
    formatEther(
      amountOut
    )
  ).toFixed(4)}{" "}

  {tokenOut.symbol}

</p>

        </div>

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] px-4 py-3">

          <p className="text-xs text-gray-400 mb-1">

            Minimum Received

          </p>

          <p className="text-lg font-bold text-cyan-400">

            {Number(
              formatEther(
                minimumReceived
              )
            ).toFixed(4)}{" "}

            {tokenOut.symbol}

          </p>

        </div>

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] px-4 py-3">

  <div className="flex items-center justify-between">

    <p className="text-sm text-gray-400">

      Price Impact

    </p>

    <p className="text-sm font-semibold text-orange-400">

      {priceImpact}%

    </p>

  </div>

</div>

<div className="rounded-2xl border border-red-500/10 bg-[#081222] px-4 py-3">

  <div className="flex items-center justify-between">

    <p className="text-sm text-gray-400">

      Execution Risk

    </p>

    <p className={`text-sm font-semibold ${
      riskLevel === "HIGH"

        ? "text-red-400"

        : riskLevel === "MEDIUM"

        ? "text-yellow-400"

        : "text-green-400"
    }`}>

      {riskLevel}

    </p>

  </div>

</div>

{whaleTrade && (

  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-4">

    <div className="flex items-center justify-between">

      <p className="text-sm font-semibold text-orange-300">

        Whale Activity Detected

      </p>

      <div className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-300">

        HIGH SIZE

      </div>

    </div>

    <p className="text-xs text-orange-200 mt-2 leading-relaxed">

      Large swap size detected. This trade may significantly impact pool liquidity and execution pricing.

    </p>

  </div>
)}

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] px-4 py-3">

          <div className="flex items-center justify-between">

            <p className="text-sm text-gray-400">

              Estimated Gas Fee

            </p>

            <p className="text-sm font-semibold text-yellow-400">

              {estimatedFee} ETH

            </p>

          </div>

        </div>

        <button

          onClick={handleSwap}

          disabled={
            txLoading ||
            txConfirming
          }

          className="w-full rounded-2xl py-4 bg-gradient-to-r from-blue-600 to-purple-600 font-semibold disabled:opacity-50"

        >

          {txLoading ||
          txConfirming

            ? "Swapping..."

            : txConfirmed

            ? "Swap Complete"

            : "Execute Swap"}

        </button>

      </div>

    </div>
  );
}