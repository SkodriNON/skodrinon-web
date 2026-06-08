
"use client";

const pools = [

  {
    pair: "ETH / SKNON",
    tvl: "$4.8M",
    apr: "38%",
    volume: "$1.2M",
    color: "from-cyan-500 to-blue-500",
  },

  {
    pair: "USDC / SKNON",
    tvl: "$2.9M",
    apr: "24%",
    volume: "$860K",
    color: "from-emerald-500 to-green-400",
  },

  {
    pair: "ARB / SKNON",
    tvl: "$1.7M",
    apr: "31%",
    volume: "$640K",
    color: "from-violet-500 to-fuchsia-400",
  },

  {
    pair: "BASE / SKNON",
    tvl: "$1.1M",
    apr: "29%",
    volume: "$410K",
    color: "from-orange-500 to-yellow-400",
  },

];

export default function LiquidityMatrix() {

  return (

    <div className="rounded-[32px] border border-cyan-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">

            Global Liquidity Infrastructure

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">

            Liquidity Matrix

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-sm font-semibold text-cyan-300">

            Liquidity Synced

          </span>

        </div>

      </div>

      {/* POOLS */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {pools.map((pool) => (

          <div

            key={pool.pair}

            className="rounded-3xl border border-cyan-500/10 bg-[#081222]/80 p-6 hover:border-cyan-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-6">

              <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${pool.color} flex items-center justify-center text-sm font-black shadow-[0_0_25px_rgba(6,182,212,0.25)]`}>

                LP

              </div>

              <div className="text-right">

                <p className="text-xs text-gray-500 mb-1">

                  APR

                </p>

                <h5 className="text-2xl font-black text-cyan-300">

                  {pool.apr}

                </h5>

              </div>

            </div>

            <h4 className="text-2xl font-black mb-5">

              {pool.pair}

            </h4>

            <div className="space-y-3 text-sm text-gray-400 mb-6">

              <div className="flex items-center justify-between">

                <span>TVL</span>

                <span className="text-white">

                  {pool.tvl}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span>24H Volume</span>

                <span className="text-white">

                  {pool.volume}

                </span>

              </div>

            </div>

            <button className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 hover:border-cyan-500/40 transition-all duration-300">

              Open Pool Analytics

            </button>

          </div>
        ))}

      </div>

    </div>
  );
}