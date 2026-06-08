"use client";

const treasuryAssets = [
  {
    asset: "ETH",
    allocation: "42%",
    value: "$4.2M",
    status: "Strong",
  },
  {
    asset: "USDC",
    allocation: "28%",
    value: "$2.1M",
    status: "Stable",
  },
  {
    asset: "SKNON",
    allocation: "18%",
    value: "$1.4M",
    status: "Growing",
  },
  {
    asset: "LP Positions",
    allocation: "12%",
    value: "$860K",
    status: "Yielding",
  },
];

export default function TreasuryRadar() {
  return (
    <div className="rounded-xl border border-emerald-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-400">
            Treasury
          </p>

          <h3 className="text-lg font-semibold">
            Treasury Radar
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Healthy
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-emerald-500/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-emerald-500/10 bg-[#081222]">
              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Asset
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Value
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Allocation
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {treasuryAssets.map((asset) => (
              <tr
                key={asset.asset}
                className="border-b border-emerald-500/5 hover:bg-[#081222]/60"
              >
                <td className="px-3 py-2 font-medium">
                  {asset.asset}
                </td>

                <td className="px-3 py-2 text-emerald-300">
                  {asset.value}
                </td>

                <td className="px-3 py-2 text-gray-300">
                  {asset.allocation}
                </td>

                <td className="px-3 py-2 text-right text-emerald-300">
                  {asset.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}