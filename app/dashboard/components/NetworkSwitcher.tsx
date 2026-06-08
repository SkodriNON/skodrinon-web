
"use client";

import {
  useState,
} from "react";

const networks = [

  {
    name: "Ethereum",
    symbol: "ETH",
    color: "from-blue-500 to-cyan-400",
  },

  {
    name: "Arbitrum",
    symbol: "ARB",
    color: "from-cyan-500 to-blue-500",
  },

  {
    name: "Base",
    symbol: "BASE",
    color: "from-blue-600 to-indigo-500",
  },

  {
    name: "Optimism",
    symbol: "OP",
    color: "from-red-500 to-pink-500",
  },

  {
    name: "Polygon",
    symbol: "MATIC",
    color: "from-purple-500 to-fuchsia-500",
  },

];

export default function NetworkSwitcher() {

  const [
    activeNetwork,
    setActiveNetwork,
  ] = useState(
    "Ethereum"
  );

  return (

    <div className="rounded-[32px] border border-blue-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">

            Multichain Infrastructure

          </p>

          <h3 className="text-3xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

            Network Switcher

          </h3>

        </div>

        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

      </div>

      {/* NETWORKS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">

        {networks.map((network) => {

          const active =
            activeNetwork ===
            network.name;

          return (

            <button

              key={network.name}

              onClick={() =>
                setActiveNetwork(
                  network.name
                )
              }

              className={`relative overflow-hidden rounded-3xl border transition-all duration-300 p-5 text-left hover:scale-[1.02] ${
                active
                  ? "border-blue-500/40 bg-blue-500/10"
                  : "border-blue-500/10 bg-[#081222]"
              }`}

            >

              {/* GLOW */}

              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${network.color}`} />

              {/* CONTENT */}

              <div className="relative z-10">

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${network.color} flex items-center justify-center text-lg font-black mb-5 shadow-[0_0_25px_rgba(59,130,246,0.25)]`}>

                  {network.symbol}

                </div>

                <h4 className="text-xl font-bold mb-2">

                  {network.name}

                </h4>

                <p className="text-xs text-gray-500">

                  Institutional Network Layer

                </p>

                {active && (

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">

                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                    Active

                  </div>

                )}

              </div>

            </button>
          );
        })}

      </div>

    </div>
  );
}
