
"use client";

const agents = [

  {
    name: "Treasury Agent",
    role: "Reserve optimization and yield balancing.",
    activity: "98%",
    color: "from-emerald-500 to-green-400",
  },

  {
    name: "Security Agent",
    role: "Realtime anomaly detection and threat monitoring.",
    activity: "99%",
    color: "from-red-500 to-orange-400",
  },

  {
    name: "Governance Agent",
    role: "DAO proposal analysis and sentiment evaluation.",
    activity: "94%",
    color: "from-blue-500 to-cyan-400",
  },

  {
    name: "Liquidity Agent",
    role: "Crosschain liquidity routing and optimization.",
    activity: "96%",
    color: "from-violet-500 to-fuchsia-400",
  },

];

export default function AgentNetwork() {

  return (

    <div className="rounded-[32px] border border-violet-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-3">

            Autonomous Intelligence Infrastructure

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">

            Agent Network

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-violet-400 animate-pulse" />

          <span className="text-sm font-semibold text-violet-300">

            AI Agents Active

          </span>

        </div>

      </div>

      {/* AGENTS */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {agents.map((agent) => (

          <div

            key={agent.name}

            className="rounded-3xl border border-violet-500/10 bg-[#081222]/80 p-6 hover:border-violet-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-6">

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-lg font-black shadow-[0_0_25px_rgba(139,92,246,0.25)]`}>

                AI

              </div>

              <div className="text-right">

                <p className="text-xs text-gray-500 mb-1">

                  Activity

                </p>

                <h5 className="text-2xl font-black text-violet-300">

                  {agent.activity}

                </h5>

              </div>

            </div>

            <h4 className="text-2xl font-black mb-4">

              {agent.name}

            </h4>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">

              {agent.role}

            </p>

            <button className="rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-300 hover:border-violet-500/40 transition-all duration-300">

              Open Agent Console

            </button>

          </div>
        ))}

      </div>

    </div>
  );
}