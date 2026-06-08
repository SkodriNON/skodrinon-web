
"use client";

const satellites = [

  {
    id: "SAT-01",
    sector: "Treasury Orbit",
    signal: "99.2%",
    status: "Linked",
    color: "from-cyan-500 to-blue-500",
  },

  {
    id: "SAT-02",
    sector: "Governance Relay",
    signal: "97.4%",
    status: "Active",
    color: "from-violet-500 to-fuchsia-400",
  },

  {
    id: "SAT-03",
    sector: "Liquidity Radar",
    signal: "95.8%",
    status: "Tracking",
    color: "from-emerald-500 to-green-400",
  },

  {
    id: "SAT-04",
    sector: "Security Shield",
    signal: "99.9%",
    status: "Protected",
    color: "from-red-500 to-orange-400",
  },

];

export default function SatelliteArray() {

  return (

    <div className="rounded-[32px] border border-cyan-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_40%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">

            Orbital Infrastructure Network

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">

            Satellite Array

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-sm font-semibold text-cyan-300">

            Orbital Network Stable

          </span>

        </div>

      </div>

      {/* SATELLITES */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {satellites.map((satellite) => (

          <div

            key={satellite.id}

            className="rounded-3xl border border-cyan-500/10 bg-[#081222]/80 p-6 hover:border-cyan-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-6">

              <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${satellite.color} flex items-center justify-center text-sm font-black shadow-[0_0_25px_rgba(6,182,212,0.25)]`}>

                SAT

              </div>

              <div className="text-right">

                <p className="text-xs text-gray-500 mb-1">

                  Signal

                </p>

                <h5 className="text-2xl font-black text-cyan-300">

                  {satellite.signal}

                </h5>

              </div>

            </div>

            <h4 className="text-2xl font-black mb-3">

              {satellite.id}

            </h4>

            <p className="text-sm text-gray-400 mb-5">

              {satellite.sector}

            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-xs text-cyan-300">

                {satellite.status}

              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
