
"use client";

const chains = [

  {
    name: "Ethereum",
    tps: "14 TPS",
    liquidity: "$8.4M",
    status: "Connected",
    color: "from-blue-500 to-cyan-400",
  },

  {
    name: "Arbitrum",
    tps: "4,200 TPS",
    liquidity: "$3.1M",
    status: "Synced",
    color: "from-cyan-500 to-blue-500",
  },

  {
    name: "Base",
    tps: "2,900 TPS",
    liquidity: "$2.7M",
    status: "Operational",
    color: "from-indigo-500 to-blue-500",
  },

  {
    name: "Optimism",
    tps: "3,400 TPS",
    liquidity: "$1.9M",
    status: "Stable",
    color: "from-red-500 to-pink-500",
  },

];

export default function CrosschainCenter() {

  return (

    <div className="rounded-[32px] border border-violet-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-3">

            Crosschain Infrastructure

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">

            Crosschain Center

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-violet-400 animate-pulse" />

          <span className="text-sm font-semibold text-violet-300">

            Multichain Online

          </span>

        </div>

      </div>

      {/* CHAIN GRID */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        {chains.map((chain) => (

          <div

            key={chain.name}

            className="rounded-3xl border border-violet-500/10 bg-[#081222]/80 p-6 hover:border-violet-500/30 transition-all duration-300"

          >

            <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${chain.color} flex items-center justify-center text-lg font-black mb-6 shadow-[0_0_25px_rgba(139,92,246,0.25)]`}>

              {chain.name.slice(0, 2)}

            </div>

            <h4 className="text-2xl font-black mb-4">

              {chain.name}

            </h4>

            <div className="space-y-3 text-sm text-gray-400 mb-6">

              <div className="flex items-center justify-between">

                <span>Speed</span>

                <span className="text-white">

                  {chain.tps}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span>Liquidity</span>

                <span className="text-white">

                  {chain.liquidity}

                </span>

              </div>

            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1">

              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />

              <span className="text-xs text-violet-300">

                {chain.status}

              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
