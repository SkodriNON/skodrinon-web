"use client";

import {
  protocolConfig,
} from "../config/chains";

import {
  useProtocolWallet,
} from "../hooks/useProtocolWallet";

export default function ProtocolStatusCard() {

  const {

    walletAddress,

    isConnected,

  } = useProtocolWallet();

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Protocol Status

        </h3>

        <div className={`rounded-full px-3 py-1 text-xs border ${
          isConnected

            ? "border-green-500/20 bg-green-500/10 text-green-300"

            : "border-red-500/20 bg-red-500/10 text-red-300"
        }`}>

          {isConnected

            ? "WALLET CONNECTED"

            : "WALLET DISCONNECTED"}
        </div>

      </div>

      <div className="space-y-5">

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Protocol

          </p>

          <p className="text-lg font-semibold text-cyan-300">

            {protocolConfig.protocolName}

          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Active Chain

          </p>

          <p className="text-lg font-semibold text-pink-300">

            {protocolConfig.chainName}

          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Wallet Address

          </p>

          <p className="text-sm font-semibold text-yellow-300 break-all">

            {walletAddress ||

              "No wallet connected"}
          </p>

        </div>

      </div>

    </div>
  );
}