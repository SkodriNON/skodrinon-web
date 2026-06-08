"use client";

import {
  useAccount,
} from "wagmi";

import {
  useTokenAllowance,
} from "../hooks/useTokenAllowance";

export default function AllowanceStatusCard() {

  const {
    address,
  } = useAccount();

  const {

    allowance,

    isLoading,

    error,

  } = useTokenAllowance(

    "0x0000000000000000000000000000000000000000",

    address
  );

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Allowance Status

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          ERC20 ALLOWANCE

        </div>

      </div>

      <div className="space-y-5">

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Allowance Reader

          </p>

          <p className={`text-lg font-semibold ${
            isLoading

              ? "text-yellow-300"

              : error

              ? "text-red-300"

              : "text-green-300"
          }`}>

            {isLoading

              ? "Loading Allowance"

              : error

              ? "Allowance Read Failed"

              : "Allowance Active"}
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Current Allowance

          </p>

          <p className="text-lg font-semibold text-cyan-300 break-all">

            {allowance

              ? allowance.toString()

              : "No allowance"}
          </p>

        </div>

      </div>

    </div>
  );
}