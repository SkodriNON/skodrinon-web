"use client";

const warSignals = [

  {
    title: "Treasury Defense",
    severity: "Stable",
    status: "Protected",
    color: "from-green-500 to-emerald-400",
  },

  {
    title: "Liquidity Pressure",
    severity: "Medium",
    status: "Monitoring",
    color: "from-yellow-500 to-orange-400",
  },

  {
    title: "Governance Stability",
    severity: "Low",
    status: "Healthy",
    color: "from-cyan-500 to-blue-400",
  },

  {
    title: "Bridge Security",
    severity: "Critical",
    status: "Secured",
    color: "from-red-500 to-pink-500",
  },

];

export default function WarRoom() {

  return (

    <div className="rounded-[32px] border border-red-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-3">

            Strategic Protocol Operations

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-red-200 to-orange-300 bg-clip-text text-transparent">

            Protocol War Room

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />

          <span className="text-sm font-semibold text-red-300">

            Strategic Monitoring Active

          </span>

        </div>

      </div>

      {/* SIGNALS */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {warSignals.map((signal) => (

          <div

            key={signal.title}

            className="rounded-3xl border border-red-500/10 bg-[#081222]/80 p-6 hover:border-red-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-6">

              <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${signal.color} flex items-center justify-center text-sm font-black shadow-[0_0_25px_rgba(239,68,68,0.25)]`}>

                OPS

              </div>

              <div className="text-right">

                <p className="text-xs text-gray-500 mb-1">

                  Severity

                </p>

                <h5 className="text-2xl font-black text-red-300">

                  {signal.severity}

                </h5>

              </div>

            </div>

            <h4 className="text-2xl font-black mb-4">

              {signal.title}

            </h4>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">

              Realtime institutional protocol operations monitoring active.

            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1">

              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />

              <span className="text-xs text-red-300">

                {signal.status}

              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}