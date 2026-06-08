
"use client";

const services = [

  {
    name: "Treasury Engine",
    status: "Operational",
    latency: "12ms",
    color: "bg-green-400",
  },

  {
    name: "Governance Layer",
    status: "Synced",
    latency: "28ms",
    color: "bg-cyan-400",
  },

  {
    name: "Staking Protocol",
    status: "Healthy",
    latency: "18ms",
    color: "bg-blue-400",
  },

  {
    name: "AI Consensus",
    status: "Learning",
    latency: "42ms",
    color: "bg-purple-400",
  },

  {
    name: "Crosschain Bridge",
    status: "Secured",
    latency: "33ms",
    color: "bg-pink-400",
  },

  {
    name: "Analytics Engine",
    status: "Realtime",
    latency: "16ms",
    color: "bg-yellow-400",
  },

];

export default function ProtocolStatus() {

  return (

    <div className="rounded-[32px] border border-blue-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">

            Infrastructure Monitoring

          </p>

          <h3 className="text-3xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

            Protocol Status

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm text-green-400 font-semibold">

            Systems Online

          </span>

        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {services.map((service) => (

          <div

            key={service.name}

            className="rounded-3xl border border-blue-500/10 bg-[#081222] p-5 hover:border-blue-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-5">

              <div className={`w-3 h-3 rounded-full ${service.color} animate-pulse`} />

              <p className="text-xs text-gray-500">

                {service.latency}

              </p>

            </div>

            <h4 className="text-xl font-bold mb-2">

              {service.name}

            </h4>

            <p className="text-sm text-gray-400">

              {service.status}

            </p>

          </div>
        ))}

      </div>

    </div>
  );
}
