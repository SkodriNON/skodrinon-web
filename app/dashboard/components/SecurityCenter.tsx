
"use client";

const securityFeeds = [

  {
    title: "Smart Contracts",
    status: "Audited",
    risk: "Low",
    color: "bg-green-400",
  },

  {
    title: "Treasury Vault",
    status: "Protected",
    risk: "Minimal",
    color: "bg-cyan-400",
  },

  {
    title: "Bridge Activity",
    status: "Monitoring",
    risk: "Medium",
    color: "bg-yellow-400",
  },

  {
    title: "Governance Security",
    status: "Secured",
    risk: "Low",
    color: "bg-blue-400",
  },

];

export default function SecurityCenter() {

  return (

    <div className="rounded-xl border border-red-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-3">

            Security Infrastructure

          </p>

          <h3 className="text-xlsm:text-xl font-black bg-gradient-to-r from-white via-red-200 to-orange-300 bg-clip-text text-transparent">

            Security Center

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm font-semibold text-green-300">

            All Systems Secure

          </span>

        </div>

      </div>

      {/* GRID */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {securityFeeds.map((item) => (

          <div

            key={item.title}

            className="rounded-xlborder border-red-500/10 bg-[#081222]/80 p-6 hover:border-red-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-5">

              <div className="flex items-center gap-3">

                <div className={`w-3 h-3 rounded-full ${item.color} animate-pulse`} />

                <h4 className="text-2xl font-bold">

                  {item.title}

                </h4>

              </div>

              <span className="text-xs text-gray-500">

                Risk: {item.risk}

              </span>

            </div>

            <p className="text-gray-400 mb-6">

              Realtime monitoring and anomaly detection active.

            </p>

            <button className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-300 hover:border-red-500/40 transition-all duration-300">

              Open Security Feed

            </button>

          </div>
        ))}

      </div>

    </div>
  );
}