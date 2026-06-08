
"use client";

const metrics = [

  {
    label: "Sharpe Ratio",
    value: "2.84",
    status: "Excellent",
    color: "text-green-400",
  },

  {
    label: "Protocol Volatility",
    value: "12.4%",
    status: "Stable",
    color: "text-cyan-400",
  },

  {
    label: "Treasury Efficiency",
    value: "94%",
    status: "Optimized",
    color: "text-blue-400",
  },

  {
    label: "DAO Participation",
    value: "81%",
    status: "Active",
    color: "text-violet-400",
  },

  {
    label: "Liquidity Health",
    value: "9.1/10",
    status: "Strong",
    color: "text-emerald-400",
  },

  {
    label: "AI Confidence",
    value: "97%",
    status: "Learning",
    color: "text-pink-400",
  },

];

export default function QuantEngine() {

  return (

    <div className="rounded-[32px] border border-cyan-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">

            Quantitative Intelligence Layer

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">

            Quant Engine

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-sm font-semibold text-cyan-300">

            Analytics Live

          </span>

        </div>

      </div>

      {/* METRICS */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {metrics.map((metric) => (

          <div

            key={metric.label}

            className="rounded-3xl border border-cyan-500/10 bg-[#081222]/80 p-6 hover:border-cyan-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-6">

              <p className="text-sm text-gray-400">

                {metric.label}

              </p>

              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />

            </div>

            <h4 className={`text-4xl font-black mb-4 ${metric.color}`}>

              {metric.value}

            </h4>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">

              <span className="text-xs text-cyan-300">

                {metric.status}

              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}