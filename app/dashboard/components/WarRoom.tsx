"use client";

const warSignals = [
  {
    title: "Treasury Defense",
    severity: "Stable",
    status: "Protected",
  },
  {
    title: "Liquidity Pressure",
    severity: "Medium",
    status: "Monitoring",
  },
  {
    title: "Governance Stability",
    severity: "Low",
    status: "Healthy",
  },
  {
    title: "Bridge Security",
    severity: "Critical",
    status: "Secured",
  },
];

export default function WarRoom() {
  return (
    <div className="rounded-xl border border-red-500/10 bg-[#07101f]/80 p-4">

      <div className="mb-4 flex items-center justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-red-400">
            Operations
          </p>

          <h3 className="text-lg font-semibold">
            Protocol War Room
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-red-300">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          Monitoring
        </div>

      </div>

      <div className="overflow-hidden rounded-lg border border-red-500/10">

        <table className="w-full text-sm">

          <thead>

            <tr className="border-b border-red-500/10 bg-[#081222]">

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Signal
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Severity
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {warSignals.map((signal) => (

              <tr
                key={signal.title}
                className="border-b border-red-500/5 hover:bg-[#081222]/60"
              >

                <td className="px-3 py-2 font-medium">
                  {signal.title}
                </td>

                <td className="px-3 py-2 text-red-300">
                  {signal.severity}
                </td>

                <td className="px-3 py-2 text-right text-gray-300">
                  {signal.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}