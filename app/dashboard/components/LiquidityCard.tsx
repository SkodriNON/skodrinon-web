"use client";

import {
  useState,
} from "react";

import {
  parseEther,
  formatEther,
} from "viem";

import {
  useLiquidity,
} from "../hooks/useLiquidity";

export default function LiquidityCard() {

  const [
    ethAmount,
    setEthAmount,
  ] = useState("");

  const [
    sknonAmount,
    setSknonAmount,
  ] = useState("");

  const {

    reserveETH,

    reserveSKNON,

    addLiquidity,

  } = useLiquidity();

  function handleAddLiquidity() {

    if (
      !ethAmount ||
      !sknonAmount
    ) {

      return;
    }

    addLiquidity(

      parseEther(
        ethAmount
      ),

      parseEther(
        sknonAmount
      )
    );

    setEthAmount("");

    setSknonAmount("");
  }

  return (

    <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Add Liquidity

      </h3>

      <div className="space-y-4">

        <input

          value={ethAmount}

          onChange={(e) =>
            setEthAmount(
              e.target.value
            )
          }

          placeholder="ETH Amount"

          className="w-full rounded-2xl bg-[#081222] border border-blue-500/10 px-4 py-4 outline-none"

        />

        <input

          value={sknonAmount}

          onChange={(e) =>
            setSknonAmount(
              e.target.value
            )
          }

          placeholder="SKNON Amount"

          className="w-full rounded-2xl bg-[#081222] border border-blue-500/10 px-4 py-4 outline-none"

        />

        <button

          onClick={
            handleAddLiquidity
          }

          className="w-full rounded-2xl py-4 bg-gradient-to-r from-cyan-600 to-blue-600 font-bold"

        >

          Add Liquidity

        </button>

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4">

          <p className="text-sm text-gray-400 mb-2">

            Pool Reserves

          </p>

          <p className="text-sm text-cyan-300">

            ETH:
            {" "}

            {Number(
              formatEther(
                reserveETH
              )
            ).toFixed(2)}

          </p>

          <p className="text-sm text-cyan-300 mt-2">

            SKNON:
            {" "}

            {Number(
              formatEther(
                reserveSKNON
              )
            ).toFixed(2)}

          </p>

        </div>

      </div>

    </div>
  );
}