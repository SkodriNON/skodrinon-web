"use client";

const chains = [
  {
    name: "Ethereum",
    tps: "14 TPS",
    liquidity: "$8.4M",
    status: "Connected",
  },
  {
    name: "Arbitrum",
    tps: "4,200 TPS",
    liquidity: "$3.1M",
    status: "Synced",
  },
  {
    name: "Base",
    tps: "2,900 TPS",
    liquidity: "$2.7M",
    status: "Operational",
  },
  {
    name: "Optimism",
    tps: "3,400 TPS",
    liquidity: "$1.9M",
    status: "Stable",
  },
];

export default function CrosschainCenter() {
  return (
    <div className="rounded-xl border border-violet-500/10 bg-[#07101f]/80 p-4">

      <div className="mb-4 flex items-center justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-violet-400">
            Crosschain
          </p>

          <h3 className="text-lg font-semibold">
            Crosschain Center
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-violet-300">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          Online
        </div>

      </div>

      <div className="overflow-hidden rounded-lg border border-violet-500/10">

        <table className="w-full text-sm">

          <thead>

            <tr className="border-b border-violet-500/10 bg-[#081222]">

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Chain
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                TPS
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Liquidity
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {chains.map((chain) => (

              <tr
                key={chain.name}
                className="border-b border-violet-500/5 hover:bg-[#081222]/60"
              >

                <td className="px-3 py-2 font-medium">
                  {chain.name}
                </td>

                <td className="px-3 py-2">
                  {chain.tps}
                </td>

                <td className="px-3 py-2">
                  {chain.liquidity}
                </td>

                <td className="px-3 py-2 text-right text-violet-300">
                  {chain.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}