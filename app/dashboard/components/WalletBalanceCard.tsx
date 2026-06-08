"use client";

import {
  useWalletTokenBalance,
} from "../hooks/useWalletTokenBalance";

export default function WalletBalanceCard() {

  const {

    walletBalance,

    walletAddress,

    isLoading,

    error,

  } = useWalletTokenBalance();

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Wallet Balance

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE WALLET

        </div>

      </div>

      <div className="space-y-5">

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Wallet Status

          </p>

          <p className={`text-lg font-semibold ${
            isLoading

              ? "text-yellow-300"

              : error

              ? "text-red-300"

              : walletAddress

              ? "text-green-300"

              : "text-cyan-300"
          }`}>

            {isLoading

              ? "Loading Wallet"

              : error

              ? "Wallet Read Failed"

              : walletAddress

              ? "Wallet Connected"

              : "No Wallet Connected"}
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Wallet Address

          </p>

          <p className="text-xs font-semibold text-pink-300 break-all">

            {walletAddress ||

              "No wallet address"}
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Live Balance

          </p>

          <p className="text-lg font-semibold text-cyan-300">

            {walletBalance

              ? `${Number(walletBalance.value) / 1e18} ${walletBalance.symbol}`

              : "No balance"}
          </p>

        </div>

      </div>

    </div>
  );
}