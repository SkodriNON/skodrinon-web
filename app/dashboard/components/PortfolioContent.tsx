"use client";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

const performanceData = [
  { day: "Mon", value: 12400 },
  { day: "Tue", value: 12800 },
  { day: "Wed", value: 12600 },
  { day: "Thu", value: 13200 },
  { day: "Fri", value: 13600 },
  { day: "Sat", value: 13900 },
  { day: "Sun", value: 14250 },
];

const assets = [
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: "0.524",
    value: "$1,245",
    change: "+4.25%",
  },
  {
    name: "SkodriNΩN",
    symbol: "SKNON",
    amount: "2,000,000",
    value: "$0",
    change: "+12.44%",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    amount: "1,240",
    value: "$1,240",
    change: "+0.01%",
  },
];

const transactions = [
  {
    type: "Swap",
    asset: "ETH → SKNON",
    amount: "$450",
    status: "Completed",
  },
  {
    type: "Stake",
    asset: "SKNON",
    amount: "$1200",
    status: "Active",
  },
  {
    type: "Bridge",
    asset: "ETH",
    amount: "$800",
    status: "Completed",
  },
];

export default function PortfolioContent() {
  return (
    <div className="space-y-7">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-xl sm:text-5xl font-bold mb-3">
            Portfolio
          </h1>

          <p className="text-gray-400 text-base sm:text-lg">
            Advanced portfolio analytics and DeFi infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="px-5 py-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 transition">
            24H
          </button>

          <button className="px-5 py-3 rounded-2xl border border-blue-500/20 bg-blue-500/10 hover:bg-blue-500/20 transition">
            7D
          </button>

          <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
            Export Report
          </button>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">
          <p className="text-gray-400 mb-3">
            Net Worth
          </p>

          <h3 className="text-xlfont-bold mb-2">
            $14,250
          </h3>

          <span className="text-green-400 font-semibold">
            +12.25%
          </span>
        </div>

        <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">
          <p className="text-gray-400 mb-3">
            Daily PNL
          </p>

          <h3 className="text-xlfont-bold mb-2 text-green-400">
            +$425
          </h3>

          <span className="text-gray-400">
            Last 24 hours
          </span>
        </div>

        <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">
          <p className="text-gray-400 mb-3">
            Assets
          </p>

          <h3 className="text-xlfont-bold mb-2">
            12
          </h3>

          <span className="text-gray-400">
            Active holdings
          </span>
        </div>

        <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">
          <p className="text-gray-400 mb-3">
            DeFi Positions
          </p>

          <h3 className="text-xlfont-bold mb-2">
            4
          </h3>

          <span className="text-gray-400">
            Across protocols
          </span>
        </div>
      </div>

      {/* CHART + AI */}
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-7">
        {/* PERFORMANCE CHART */}
        <div className="2xl:col-span-2 rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-xlfont-bold">
              Portfolio Performance
            </h3>

            <button className="px-4 py-2 rounded-xl border border-blue-500/20 bg-blue-500/10 text-sm">
              Live
            </button>
          </div>

          <div className="w-full h-[260px] sm:h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="fillBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

                <XAxis
                  dataKey="day"
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />

                <YAxis
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />

                <Tooltip
                  contentStyle={{
                    background: "#020617",
                    border: "1px solid #3b82f6",
                    borderRadius: "12px",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="url(#fillBlue)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI INSIGHTS */}
        <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7">
          <h3 className="text-2xl sm:text-xlfont-bold mb-8 text-blue-400">
            AI Insights
          </h3>

          <div className="space-y-6">
            <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5">
              <p className="text-gray-400 mb-2">
                Market Sentiment
              </p>

              <h4 className="text-xl font-bold text-green-400">
                Bullish
              </h4>
            </div>

            <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5">
              <p className="text-gray-400 mb-2">
                Risk Score
              </p>

              <h4 className="text-xl font-bold text-yellow-400">
                Medium
              </h4>
            </div>

            <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5">
              <p className="text-gray-400 mb-2">
                AI Recommendation
              </p>

              <h4 className="text-lg font-semibold">
                Increase ETH exposure by 5%
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* HOLDINGS */}
      <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7 overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl sm:text-xlfont-bold">
            Holdings
          </h3>

          <button className="px-5 py-3 rounded-2xl border border-blue-500/20 bg-blue-500/10">
            Manage Assets
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="text-left text-gray-400 border-b border-blue-500/10">
                <th className="pb-4">Asset</th>
                <th className="pb-4">Symbol</th>
                <th className="pb-4">Amount</th>
                <th className="pb-4">Value</th>
                <th className="pb-4">24H</th>
              </tr>
            </thead>

            <tbody>
              {assets.map((asset) => (
                <tr
                  key={asset.symbol}
                  className="border-b border-blue-500/5"
                >
                  <td className="py-5 font-semibold">
                    {asset.name}
                  </td>

                  <td className="py-5 text-gray-400">
                    {asset.symbol}
                  </td>

                  <td className="py-5">
                    {asset.amount}
                  </td>

                  <td className="py-5 font-semibold">
                    {asset.value}
                  </td>

                  <td className="py-5 text-green-400 font-semibold">
                    {asset.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TRANSACTIONS */}
      <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl sm:text-xlfont-bold">
            Recent Transactions
          </h3>

          <button className="px-5 py-3 rounded-2xl border border-blue-500/20 bg-blue-500/10">
            View All
          </button>
        </div>

        <div className="space-y-5">
          {transactions.map((tx, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-blue-500/10 bg-[#081222] p-5"
            >
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  {tx.type}
                </h4>

                <p className="text-gray-400">
                  {tx.asset}
                </p>
              </div>

              <div className="text-left md:text-right">
                <h4 className="text-lg font-semibold mb-1">
                  {tx.amount}
                </h4>

                <p className="text-green-400">
                  {tx.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}