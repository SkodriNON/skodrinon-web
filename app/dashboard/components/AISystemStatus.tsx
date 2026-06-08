"use client";

const systems = [
  {
    name: "Treasury Engine",
    status: "Operational",
  },
  {
    name: "Governance Core",
    status: "Synced",
  },
  {
    name: "Liquidity Router",
    status: "Realtime",
  },
  {
    name: "AI Oracle",
    status: "Learning",
  },
  {
    name: "Security Shield",
    status: "Protected",
  },
  {
    name: "Whale Tracker",
    status: "Tracking",
  },
];

export default function AISystemStatus() {
  return (
    <div className="rounded-xl border border-cyan-500/10 bg-[#07101f]/80 p-4">

      <div className="mb-4 flex items-center justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">
            AI Systems
          </p>

          <h3 className="text-lg font-semibold">
            System Status
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Live
        </div>

      </div>

      <div className="overflow-hidden rounded-lg border border-cyan-500/10">

        <table className="w-full text-sm">

          <thead>

            <tr className="border-b border-cyan-500/10 bg-[#081222]">

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                System
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {systems.map((system) => (

              <tr
                key={system.name}
                className="border-b border-cyan-500/5 hover:bg-[#081222]/60"
              >

                <td className="px-3 py-2 font-medium">
                  {system.name}
                </td>

                <td className="px-3 py-2 text-right text-cyan-300">
                  {system.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}