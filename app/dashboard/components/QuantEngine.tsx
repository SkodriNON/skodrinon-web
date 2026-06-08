"use client";

const metrics = [
  {
    label: "Sharpe Ratio",
    value: "2.84",
    status: "Excellent",
    color: "text-green-400",
  },
  {
    label: "Protocol Volatility",
    value: "12.4%",
    status: "Stable",
    color: "text-cyan-400",
  },
  {
    label: "Treasury Efficiency",
    value: "94%",
    status: "Optimized",
    color: "text-blue-400",
  },
  {
    label: "DAO Participation",
    value: "81%",
    status: "Active",
    color: "text-violet-400",
  },
  {
    label: "Liquidity Health",
    value: "9.1/10",
    status: "Strong",
    color: "text-emerald-400",
  },
  {
    label: "AI Confidence",
    value: "97%",
    status: "Learning",
    color: "text-pink-400",
  },
];

export default function QuantEngine() {
  return (
    <div className="rounded-xl border border-cyan-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">
            Quant
          </p>

          <h3 className="text-lg font-semibold">
            Quant Engine
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
                Metric
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Value
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {metrics.map((metric) => (
              <tr
                key={metric.label}
                className="border-b border-cyan-500/5 hover:bg-[#081222]/60"
              >
                <td className="px-3 py-2 font-medium">
                  {metric.label}
                </td>

                <td
                  className={`px-3 py-2 font-semibold ${metric.color}`}
                >
                  {metric.value}
                </td>

                <td className="px-3 py-2 text-right text-gray-300">
                  {metric.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}