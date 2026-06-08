"use client";

import {
  mockSwapHistory,
} from "../data/mockSwapHistory";

export default function SwapHistoryCard() {

  return (

    <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/80 p-4">

      <div className="flex items-center justify-between mb-4">

        <h3 className="text-lg font-semibold">

          Swap History

        </h3>

        <span className="text-xs text-gray-500">

          {mockSwapHistory.length} Trades

        </span>

      </div>

      <div className="overflow-hidden rounded-lg border border-blue-500/10">

        <table className="w-full text-sm">

          <thead>

            <tr className="border-b border-blue-500/10 bg-[#081222]">

              <th className="px-3 py-2 text-left text-gray-400 font-medium">

                Pair

              </th>

              <th className="px-3 py-2 text-left text-gray-400 font-medium">

                Amount

              </th>

              <th className="px-3 py-2 text-left text-gray-400 font-medium">

                Received

              </th>

              <th className="px-3 py-2 text-left text-gray-400 font-medium">

                Status

              </th>

              <th className="px-3 py-2 text-right text-gray-400 font-medium">

                Time

              </th>

            </tr>

          </thead>

          <tbody>

            {mockSwapHistory.map((swap) => (

              <tr
                key={swap.id}
                className="border-b border-blue-500/5 hover:bg-[#081222]/60 transition"
              >

                <td className="px-3 py-2 font-medium">

                  {swap.tokenIn} → {swap.tokenOut}

                </td>

                <td className="px-3 py-2 text-gray-300">

                  {swap.amountIn}

                </td>

                <td className="px-3 py-2 text-gray-300">

                  {swap.amountOut}

                </td>

                <td className="px-3 py-2">

                  <span
                    className={`text-xs font-medium ${
                      swap.status === "Completed"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >

                    {swap.status}

                  </span>

                </td>

                <td className="px-3 py-2 text-right text-gray-500 text-xs">

                  {swap.time}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}