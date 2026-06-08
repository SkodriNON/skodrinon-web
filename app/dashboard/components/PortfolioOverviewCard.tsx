"use client";

import {
  usePortfolioBalances,
} from "../hooks/usePortfolioBalances";

export default function PortfolioOverviewCard() {

  const {
    balances,
  } = usePortfolioBalances();

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Portfolio Overview

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE PORTFOLIO

        </div>

      </div>

      <div className="space-y-5">

        {balances.map((item) => (

          <div

            key={item.symbol}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Asset

                </p>

                <p className="text-lg font-semibold text-cyan-300">

                  {item.symbol}

                </p>

              </div>

              <div className="text-right">

                <p className="text-xs text-gray-400 mb-1">

                  Balance

                </p>

                <p className="text-lg font-semibold text-pink-300">

                  {item.balance.data

                    ? Number(
                        item.balance.data.value
                      ) / 1e18

                    : 0}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}