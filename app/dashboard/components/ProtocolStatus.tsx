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
    <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">
            Monitoring
          </p>

          <h3 className="text-lg font-semibold">
            Protocol Status
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Online
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-blue-500/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-blue-500/10 bg-[#081222]">
              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Service
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Status
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Latency
              </th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr
                key={service.name}
                className="border-b border-blue-500/5 hover:bg-[#081222]/60"
              >
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${service.color}`}
                    />

                    <span className="font-medium">
                      {service.name}
                    </span>
                  </div>
                </td>

                <td className="px-3 py-2 text-gray-300">
                  {service.status}
                </td>

                <td className="px-3 py-2 text-right text-gray-500">
                  {service.latency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}