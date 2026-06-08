
"use client";

const ecosystemApps = [

  {
    name: "Governance",
    users: "18.4K",
    uptime: "99.99%",
    status: "Operational",
    color: "from-blue-500 to-cyan-400",
  },

  {
    name: "Treasury",
    users: "9.2K",
    uptime: "99.97%",
    status: "Stable",
    color: "from-emerald-500 to-green-400",
  },

  {
    name: "AI Layer",
    users: "5.1K",
    uptime: "99.95%",
    status: "Learning",
    color: "from-fuchsia-500 to-pink-400",
  },

  {
    name: "Crosschain",
    users: "12.8K",
    uptime: "99.98%",
    status: "Connected",
    color: "from-violet-500 to-purple-400",
  },

];

export default function EcosystemOverview() {

  return (

    <div className="rounded-[32px] border border-cyan-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">

            Global Ecosystem Infrastructure

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">

            Ecosystem Overview

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-sm font-semibold text-cyan-300">

            Ecosystem Online

          </span>

        </div>

      </div>

      {/* APPS */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        {ecosystemApps.map((app) => (

          <div

            key={app.name}

            className="rounded-3xl border border-cyan-500/10 bg-[#081222]/80 p-6 hover:border-cyan-500/30 transition-all duration-300"

          >

            <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${app.color} flex items-center justify-center text-lg font-black mb-6 shadow-[0_0_25px_rgba(6,182,212,0.25)]`}>

              {app.name.slice(0, 2)}

            </div>

            <h4 className="text-2xl font-black mb-5">

              {app.name}

            </h4>

            <div className="space-y-3 text-sm text-gray-400 mb-6">

              <div className="flex items-center justify-between">

                <span>Users</span>

                <span className="text-white">

                  {app.users}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span>Uptime</span>

                <span className="text-white">

                  {app.uptime}

                </span>

              </div>

            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-xs text-cyan-300">

                {app.status}

              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}