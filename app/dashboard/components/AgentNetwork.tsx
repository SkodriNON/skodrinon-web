"use client";

const agents = [
  {
    name: "Treasury Agent",
    role: "Reserve optimization and yield balancing.",
    activity: "98%",
  },
  {
    name: "Security Agent",
    role: "Realtime anomaly detection and threat monitoring.",
    activity: "99%",
  },
  {
    name: "Governance Agent",
    role: "DAO proposal analysis and sentiment evaluation.",
    activity: "94%",
  },
  {
    name: "Liquidity Agent",
    role: "Crosschain liquidity routing and optimization.",
    activity: "96%",
  },
];

export default function AgentNetwork() {
  return (
    <div className="rounded-xl border border-violet-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-violet-400">
            AI Agents
          </p>

          <h3 className="text-lg font-semibold">
            Agent Network
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-violet-300">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          Active
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-violet-500/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-violet-500/10 bg-[#081222]">
              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Agent
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Role
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Activity
              </th>
            </tr>
          </thead>

          <tbody>
            {agents.map((agent) => (
              <tr
                key={agent.name}
                className="border-b border-violet-500/5 hover:bg-[#081222]/60"
              >
                <td className="px-3 py-2 font-medium">
                  {agent.name}
                </td>

                <td className="px-3 py-2 text-gray-300">
                  {agent.role}
                </td>

                <td className="px-3 py-2 text-right font-semibold text-violet-300">
                  {agent.activity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}