"use client";

const pools = [
  {
    pair: "ETH / SKNON",
    tvl: "$4.8M",
    apr: "38%",
    volume: "$1.2M",
  },
  {
    pair: "USDC / SKNON",
    tvl: "$2.9M",
    apr: "24%",
    volume: "$860K",
  },
  {
    pair: "ARB / SKNON",
    tvl: "$1.7M",
    apr: "31%",
    volume: "$640K",
  },
  {
    pair: "BASE / SKNON",
    tvl: "$1.1M",
    apr: "29%",
    volume: "$410K",
  },
];

export default function LiquidityMatrix() {
  return (
    <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/80 p-4">

      <div className="flex items-center justify-between mb-4">

        <div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400">

            Liquidity

          </p>

          <h3 className="text-lg font-semibold">

            Liquidity Pools

          </h3>

        </div>

        <span className="text-xs text-green-400">

          Synced

        </span>

      </div>

      <div className="overflow-hidden rounded-lg border border-blue-500/10">

        <table className="w-full text-sm">

          <thead>

            <tr className="border-b border-blue-500/10 bg-[#081222]">

              <th className="px-3 py-2 text-left text-gray-400">

                Pair

              </th>

              <th className="px-3 py-2 text-left text-gray-400">

                TVL

              </th>

              <th className="px-3 py-2 text-left text-gray-400">

                APR

              </th>

              <th className="px-3 py-2 text-left text-gray-400">

                Volume

              </th>

              <th className="px-3 py-2 text-right text-gray-400">

                Action

              </th>

            </tr>

          </thead>

          <tbody>

            {pools.map((pool) => (

              <tr
                key={pool.pair}
                className="border-b border-blue-500/5 hover:bg-[#081222]/60"
              >

                <td className="px-3 py-2 font-medium">

                  {pool.pair}

                </td>

                <td className="px-3 py-2">

                  {pool.tvl}

                </td>

                <td className="px-3 py-2 text-cyan-400 font-semibold">

                  {pool.apr}

                </td>

                <td className="px-3 py-2">

                  {pool.volume}

                </td>

                <td className="px-3 py-2 text-right">

                  <button className="rounded-md border border-cyan-500/20 px-3 py-1 text-xs text-cyan-300">

                    View

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}