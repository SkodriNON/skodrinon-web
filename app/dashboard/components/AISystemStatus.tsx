"use client";

const systems = [

  {
    name:
      "Treasury Engine",

    status:
      "Operational",
  },

  {
    name:
      "Governance Core",

    status:
      "Synced",
  },

  {
    name:
      "Liquidity Router",

    status:
      "Realtime",
  },

  {
    name:
      "AI Oracle",

    status:
      "Learning",
  },

  {
    name:
      "Security Shield",

    status:
      "Protected",
  },

  {
    name:
      "Whale Tracker",

    status:
      "Tracking",
  },
];

export default function AISystemStatus() {

  return (

    <div className="rounded-[32px] border border-cyan-500/10 bg-[#07101f]/80 p-6 sm:p-7">

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-2">

            Infrastructure Status

          </p>

          <h3 className="text-3xl font-black">

            AI Systems Grid

          </h3>

        </div>

        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-sm text-cyan-300">

            Live

          </span>

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {systems.map((system) => (

          <div

            key={system.name}

            className="rounded-3xl border border-cyan-500/10 bg-[#081222]/80 p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <p className="font-bold">

                {system.name}

              </p>

              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

            </div>

            <p className="text-sm text-cyan-300">

              {system.status}

            </p>

          </div>
        ))}

      </div>

    </div>
  );
}