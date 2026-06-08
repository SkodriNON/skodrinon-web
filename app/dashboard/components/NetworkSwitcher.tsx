"use client";

import {
  useState,
} from "react";

const networks = [
  {
    name: "Ethereum",
    symbol: "ETH",
    status: "Online",
  },
  {
    name: "Arbitrum",
    symbol: "ARB",
    status: "Synced",
  },
  {
    name: "Base",
    symbol: "BASE",
    status: "Ready",
  },
  {
    name: "Optimism",
    symbol: "OP",
    status: "Ready",
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    status: "Ready",
  },
];

export default function NetworkSwitcher() {
  const [
    activeNetwork,
    setActiveNetwork,
  ] = useState("Ethereum");

  return (
    <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">
            Network
          </p>

          <h3 className="text-lg font-semibold">
            Network Switcher
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Live
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5">
        {networks.map((network) => {
          const active =
            activeNetwork === network.name;

          return (
            <button
              key={network.name}
              onClick={() =>
                setActiveNetwork(network.name)
              }
              className={`rounded-lg border px-3 py-3 text-left transition ${
                active
                  ? "border-blue-500/40 bg-blue-500/10"
                  : "border-blue-500/10 bg-[#081222] hover:border-blue-500/25"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold">
                    {network.symbol}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {network.name}
                  </p>
                </div>

                <span
                  className={`h-2 w-2 rounded-full ${
                    active
                      ? "bg-green-400"
                      : "bg-gray-600"
                  }`}
                />
              </div>

              <p className="mt-2 text-[11px] text-gray-500">
                {active ? "Active" : network.status}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}