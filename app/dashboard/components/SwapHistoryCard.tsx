"use client";

import {
  mockSwapHistory,
} from "../data/mockSwapHistory";

export default function SwapHistoryCard() {

  return (

    <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Swap History

      </h3>

      <div className="space-y-4">

        {mockSwapHistory.map(
          (swap) => (

            <div

              key={swap.id}

              className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4"

            >

              <div className="flex items-center justify-between mb-2">

                <p className="font-semibold">

                  {swap.tokenIn}
                  {" → "}
                  {swap.tokenOut}

                </p>

                <p className={`text-xs ${
                  swap.status ===
                  "Completed"

                    ? "text-green-400"

                    : "text-yellow-400"
                }`}>

                  {swap.status}

                </p>

              </div>

              <div className="flex items-center justify-between text-sm text-gray-400">

                <p>

                  {swap.amountIn}
                  {" "}
                  {swap.tokenIn}

                </p>

                <p>

                  {swap.amountOut}
                  {" "}
                  {swap.tokenOut}

                </p>

              </div>

              <p className="text-xs text-gray-500 mt-3">

                {swap.time}

              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}