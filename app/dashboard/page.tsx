"use client";

import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
 Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import {
  useConnect,
  useAccount,
  useDisconnect,
  useBalance,
  useReadContract,
} from "wagmi";

import { erc20Abi } from "@/lib/erc20";

type ChartPoint = {
  time: string;
  price: number;
};

export default function Dashboard() {
  const { address, isConnected } = useAccount();

  const { connect, connectors } = useConnect();

  const { disconnect } = useDisconnect();

  const { data: ethBalance } = useBalance({
    address,
  });

  const { data: tokenBalance } = useReadContract({
    address: "0xE9380E2C0DFaA2b77691f4824AaCe6E4ca0132e5",
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address!],
    query: {
      enabled: !!address,
    },
  });

  const [ethPrice, setEthPrice] = useState(0);

  const [chartData, setChartData] = useState<ChartPoint[]>([]);

  const [transactions, setTransactions] = useState<string[]>([]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ETH PRICE
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );

        const data = await res.json();

        setEthPrice(data.ethereum.usd);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrice();
  }, []);

  // CHART
  useEffect(() => {
    const fetchChart = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7"
        );

        const data = await res.json();

        const formatted = data.prices.map((item: any) => ({
          time: new Date(item[0]).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          price: item[1],
        }));

        setChartData(formatted);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChart();
  }, []);

  // TRANSACTIONS
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!address) return;

      try {
        const res = await fetch(
          `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=4&sort=desc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API}`
        );

        const data = await res.json();

        if (Array.isArray(data.result)) {
          const txs = data.result.map(
            (tx: any) => `TX: ${tx.hash.slice(0, 10)}...`
          );

          setTransactions(txs);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, [address]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#020617] text-white">
      {/* MOBILE TOPBAR */}
      <div className="sticky top-0 z-50 lg:hidden backdrop-blur-xl bg-[#020617]/90 border-b border-blue-500/10 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            SkodriNΩN
          </h1>

          <button
            onClick={() =>
              isConnected
                ? disconnect()
                : connect({ connector: connectors[0] })
            }
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold"
          >
            {isConnected
              ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
              : "Connect"}
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* SIDEBAR */}
        <aside className="hidden lg:flex w-[260px] min-h-screen border-r border-blue-500/10 bg-[#040816] px-5 py-6 flex-col justify-between sticky top-0">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                △
              </div>

              <h1 className="text-3xl font-bold tracking-wide">
                SkodriNΩN
              </h1>
            </div>

            <div className="flex flex-col gap-3 text-gray-300">
              {[
                "Dashboard",
                "Portfolio",
                "Governance",
                "Staking",
                "DAO",
                "AI Insights",
                "Treasury",
                "Swap",
                "Bridge",
                "Analytics",
                "Settings",
              ].map((item, index) => (
                <button
                  key={item}
                  className={`text-left px-5 py-4 rounded-2xl transition duration-300 border ${
                    index === 0
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500/40 text-white shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                      : "border-transparent hover:border-blue-500/20 hover:bg-blue-500/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6">
            <h3 className="text-2xl font-bold mb-2 text-blue-400">
              SkodriNΩN AI
            </h3>

            <p className="text-gray-400 mb-6 text-sm">
              AI governance assistant connected to Ethereum.
            </p>

            <button className="w-full rounded-2xl py-4 bg-gradient-to-r from-blue-500 to-purple-500 font-semibold">
              Ask AI
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="w-full flex-1 px-4 sm:px-6 lg:px-8 py-5 lg:py-7">
          {/* TOP */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Welcome back 👋
              </h2>

              <p className="text-gray-400 text-sm sm:text-lg">
                Here's what's happening in your ecosystem today.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <button className="w-11 h-11 rounded-2xl border border-blue-500/10 bg-[#081020]">
                🔍
              </button>

              <button className="w-11 h-11 rounded-2xl border border-blue-500/10 bg-[#081020]">
                🔔
              </button>

              <button
                onClick={() =>
                  isConnected
                    ? disconnect()
                    : connect({ connector: connectors[0] })
                }
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold"
              >
                {isConnected
                  ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                  : "Connect Wallet"}
              </button>
            </div>
          </div>

          {/* MINI STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-8">
            {[
              [`$${ethPrice}`, "ETH Price"],
              ["$12.45M", "Market Cap"],
              ["$8.72M", "TVL"],
              ["12,458", "Holders"],
              ["Ethereum", "Network"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-5"
              >
                <p className="text-gray-500 mb-2 text-sm">
                  {label}
                </p>

                <h4 className="text-xl sm:text-2xl font-bold break-words">
                  {value}
                </h4>
              </div>
            ))}
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-7">
            {/* LEFT */}
            <div className="xl:col-span-9 flex flex-col gap-7">
              {/* TOP CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
                {[
                  ["12,543.78", "Total Portfolio"],
                  ["42,420.69", "Staked $SKNON"],
                  ["25,678.90", "Voting Power"],
                  ["$2.45M", "Treasury Balance"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-6"
                  >
                    <p className="text-gray-400 mb-4 text-sm">
                      {label}
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 break-words">
                      {value}
                    </h3>

                    <p className="text-green-400 font-semibold">
                      +12.45%
                    </p>
                  </div>
                ))}
              </div>

              {/* CHART + ALLOCATION */}
              <div className="grid grid-cols-1 2xl:grid-cols-3 gap-7">
                {/* CHART */}
                <div className="2xl:col-span-2 rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-4 sm:p-6 lg:p-8 overflow-hidden">
                  <div className="flex items-center justify-between mb-8 gap-4">
                    <h3 className="text-xl sm:text-3xl font-bold">
                      Portfolio Performance
                    </h3>

                    <button className="px-4 py-2 rounded-xl border border-blue-500/20 bg-blue-500/5 text-sm">
                      30D
                    </button>
                  </div>

                  <div className="w-full overflow-hidden h-[260px] sm:h-[350px] rounded-3xl bg-[#081222] border border-blue-500/10 p-2 sm:p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#1e293b"
                        />

                        <XAxis
                          dataKey="time"
                          tick={{ fill: "#94a3b8", fontSize: 10 }}
                        />

                        <YAxis
                          tick={{ fill: "#94a3b8", fontSize: 10 }}
                        />

                        <Tooltip
                          contentStyle={{
                            background: "#020617",
                            border: "1px solid #3b82f6",
                            borderRadius: "12px",
                            color: "white",
                          }}
                        />

                        <Line
                          type="monotone"
                          dataKey="price"
                          stroke="#3b82f6"
                          strokeWidth={3}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* ALLOCATION */}
                <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-10">
                    Portfolio Allocation
                  </h3>

                  <div className="w-40 h-40 sm:w-56 sm:h-56 mx-auto rounded-full border-[18px] border-blue-500/20 flex items-center justify-center mb-10">
                    <div className="text-center">
                      <p className="text-gray-400 mb-2">
                        Total
                      </p>

                      <h4 className="text-2xl sm:text-3xl font-bold">
                        $12,543
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-5 text-base sm:text-lg">
                    <div className="flex justify-between">
                      <span>$SKNON</span>
                      <span>60.2%</span>
                    </div>

                    <div className="flex justify-between">
                      <span>ETH</span>
                      <span>20.1%</span>
                    </div>

                    <div className="flex justify-between">
                      <span>USDC</span>
                      <span>10.4%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LOWER GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7">
                {/* AI */}
                <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-400">
                    AI Insights
                  </h3>

                  <div className="space-y-6">
                    <div className="flex justify-between">
                      <span>Market Sentiment</span>

                      <span className="text-green-400">
                        Bullish
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Risk Alert</span>

                      <span className="text-yellow-400">
                        Medium
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Governance</span>

                      <span className="text-blue-400">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* ACTIVITY */}
                <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8">
                    Activity Feed
                  </h3>

                  <div className="space-y-5 text-gray-300 break-all">
                    {transactions.length > 0 ? (
                      transactions.map((tx, index) => (
                        <div key={index}>{tx}</div>
                      ))
                    ) : (
                      <div>No recent transactions</div>
                    )}
                  </div>
                </div>

                {/* WALLET */}
                <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8">
                    Wallet
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-400 mb-2">
                        ETH Balance
                      </p>

                      <h4 className="text-2xl sm:text-3xl font-bold">
                        {ethBalance
                          ? (
                              Number(ethBalance.value) / 1e18
                            ).toFixed(4)
                          : "0"}{" "}
                        ETH
                      </h4>
                    </div>

                    <div>
                      <p className="text-gray-400 mb-2">
                        $SKNON Balance
                      </p>

                      <h4 className="text-2xl sm:text-3xl font-bold text-blue-400 break-all">
                        {tokenBalance
                          ? (
                              Number(tokenBalance) / 1e18
                            ).toLocaleString()
                          : "0"}
                      </h4>
                    </div>

                    <a
                      href={`https://sepolia.etherscan.io/address/${address}`}
                      target="_blank"
                      className="block text-blue-400 hover:text-blue-300 transition break-all"
                    >
                      View on Etherscan ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="xl:col-span-3">
              <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7">
                <h3 className="text-2xl sm:text-3xl font-bold mb-10">
                  Governance Power
                </h3>

                <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-[18px] border-purple-500/30 mx-auto flex items-center justify-center mb-10">
                  <div className="text-center">
                    <h4 className="text-3xl sm:text-4xl font-bold mb-2">
                      25,678
                    </h4>

                    <p className="text-green-400">
                      +15.32%
                    </p>
                  </div>
                </div>

                <button className="w-full rounded-2xl py-4 bg-purple-600 hover:bg-purple-500 transition duration-300 font-semibold">
                  Delegate Votes
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}