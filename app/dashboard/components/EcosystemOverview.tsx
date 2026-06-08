"use client";

const ecosystemApps = [
  {
    name: "Governance",
    users: "18.4K",
    uptime: "99.99%",
    status: "Operational",
  },
  {
    name: "Treasury",
    users: "9.2K",
    uptime: "99.97%",
    status: "Stable",
  },
  {
    name: "AI Layer",
    users: "5.1K",
    uptime: "99.95%",
    status: "Learning",
  },
  {
    name: "Crosschain",
    users: "12.8K",
    uptime: "99.98%",
    status: "Connected",
  },
];

export default function EcosystemOverview() {
  return (
    <div className="rounded-xl border border-cyan-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">
            Ecosystem
          </p>

          <h3 className="text-lg font-semibold">
            Ecosystem Overview
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Online
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-cyan-500/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-cyan-500/10 bg-[#081222]">
              <th className="px-3 py-2 text-left font-medium text-gray-400">
                App
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Users
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Uptime
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {ecosystemApps.map((app) => (
              <tr
                key={app.name}
                className="border-b border-cyan-500/5 hover:bg-[#081222]/60"
              >
                <td className="px-3 py-2 font-medium">
                  {app.name}
                </td>

                <td className="px-3 py-2 text-gray-300">
                  {app.users}
                </td>

                <td className="px-3 py-2 text-gray-300">
                  {app.uptime}
                </td>

                <td className="px-3 py-2 text-right text-cyan-300">
                  {app.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}