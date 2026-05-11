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
        console.error("ETH price fetch error:", error);
      }
    };

    fetchPrice();
  }, []);

  // CHART DATA
  useEffect(() => {
    const fetchChart = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7"
        );

        const data = await res.json();

        const formatted = data.prices.map((item: any) => ({
          time: new Date(item[0]).toLocaleDateString(),
          price: item[1],
        }));

        setChartData(formatted);
      } catch (error) {
        console.error("Chart fetch error:", error);
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
        console.error("Transaction fetch error:", error);
      }
    };

    fetchTransactions();
  }, [address]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#020617] text-white flex overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-[260px] min-h-screen border-r border-blue-500/10 bg-[#040816] px-5 py-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              △
            </div>

            <h1 className="text-4xl font-bold tracking-wide">
              SkodriNΩN
            </h1>
          </div>

          <div className="flex flex-col gap-3 text-gray-300">
            {[
              "Dashboard",
              "Portfolio",
              "Governance",
              "Staking",
              "DAO Proposals",
              "AI Insights",
              "Treasury",
              "Swap",
              "Bridge",
              "Contracts",
              "Security",
              "Audit",
              "Analytics",
              "Settings",
            ].map((item, index) => (
              <button
                key={item}
                className={`text-left px-5 py-4 rounded-2xl transition duration-300 border ${
                  index === 0
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500/40 shadow-[0_0_25px_rgba(59,130,246,0.4)] text-white"
                    : "border-transparent hover:border-blue-500/20 hover:bg-blue-500/5"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 shadow-[0_0_35px_rgba(59,130,246,0.25)]">
          <h3 className="text-2xl font-bold mb-2 text-blue-400">
            SkodriNΩN AI
          </h3>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            AI governance assistant connected to Ethereum ecosystem.
          </p>

          <button className="w-full rounded-2xl py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-[1.02] transition duration-300 font-semibold shadow-[0_0_35px_rgba(59,130,246,0.45)]">
            Ask SkodriNΩN AI
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <section className="flex-1 overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_30%)] px-8 py-7">
        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-5xl font-bold mb-4">
              Welcome back, SkodriNΩN 👋
            </h2>

            <p className="text-gray-400 text-lg">
              Here's what's happening in your ecosystem today.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button className="w-11 h-11 rounded-2xl border border-blue-500/10 bg-[#081020] hover:border-blue-500/30 transition">
              🔍
            </button>

            <button className="w-11 h-11 rounded-2xl border border-blue-500/10 bg-[#081020] hover:border-blue-500/30 transition">
              🔔
            </button>

            <button
              onClick={() =>
                isConnected
                  ? disconnect()
                  : connect({ connector: connectors[0] })
              }
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-105 transition duration-300"
            >
              {isConnected
                ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                : "Connect Wallet"}
            </button>
          </div>
        </div>

        {/* MINI STATS */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {[
            [`$${ethPrice}`, "ETH Price"],
            ["$12.45M", "Market Cap"],
            ["$8.72M", "TVL"],
            ["12,458", "Holders"],
            ["Ethereum", "Network"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-gray-500 mb-2">{label}</p>
              <h4 className="text-2xl font-bold">{value}</h4>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-7">
          {/* LEFT */}
          <div className="col-span-9 flex flex-col gap-7">
            {/* TOP CARDS */}
            <div className="grid grid-cols-4 gap-6">
              {[
                ["12,543.78", "Total Portfolio"],
                ["42,420.69", "Staked $SKNON"],
                ["25,678.90", "Voting Power"],
                ["$2.45M", "Treasury Balance"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-6 hover:border-blue-500/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)] transition duration-300"
                >
                  <p className="text-gray-400 mb-4">{label}</p>

                  <h3 className="text-4xl font-bold mb-3">{value}</h3>

                  <p className="text-green-400 font-semibold">
                    +12.45%
                  </p>
                </div>
              ))}
            </div>

            {/* CHART + DONUT */}
            <div className="grid grid-cols-3 gap-7">
              {/* CHART */}
              <div className="col-span-2 rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold">
                    Portfolio Performance
                  </h3>

                  <button className="px-5 py-2 rounded-xl border border-blue-500/20 bg-blue-500/5">
                    30D
                  </button>
                </div>

                <div className="h-[350px] rounded-3xl bg-[#081222] border border-blue-500/10 p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#1e293b"
                      />

                      <XAxis
                        dataKey="time"
                        tick={{ fill: "#94a3b8" }}
                      />

                      <YAxis
                        tick={{ fill: "#94a3b8" }}
                        domain={["auto", "auto"]}
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
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* DONUT */}
              <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-8">
                <h3 className="text-3xl font-bold mb-10">
                  Portfolio Allocation
                </h3>

                <div className="w-56 h-56 mx-auto rounded-full border-[18px] border-blue-500/20 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.15)] mb-10">
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">Total</p>
                    <h4 className="text-3xl font-bold">$12,543</h4>
                  </div>
                </div>

                <div className="space-y-5 text-lg">
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
            <div className="grid grid-cols-3 gap-7">
              <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-7">
                <h3 className="text-3xl font-bold mb-8 text-blue-400">
                  AI Insights
                </h3>

                <div className="space-y-6 text-lg">
                  <div className="flex justify-between">
                    <span>Market Sentiment</span>
                    <span className="text-green-400">Bullish</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Risk Alert</span>
                    <span className="text-yellow-400">Medium Risk</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Governance</span>
                    <span className="text-blue-400">Active</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-7">
                <h3 className="text-3xl font-bold mb-8">
                  Activity Feed
                </h3>

                <div className="space-y-6 text-gray-300">
                  {transactions.length > 0 ? (
                    transactions.map((tx, index) => (
                      <div key={index}>{tx}</div>
                    ))
                  ) : (
                    <div>No recent transactions</div>
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-7">
                <h3 className="text-3xl font-bold mb-8">
                  Wallet
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 mb-2">
                      ETH Balance
                    </p>

                    <h4 className="text-3xl font-bold">
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

                    <h4 className="text-3xl font-bold text-blue-400">
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
                    className="block text-blue-400 hover:text-blue-300 transition"
                  >
                    View on Etherscan ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-3 flex flex-col gap-7">
            <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-7">
              <h3 className="text-3xl font-bold mb-10">
                Governance Power
              </h3>

              <div className="w-56 h-56 rounded-full border-[18px] border-purple-500/30 mx-auto flex items-center justify-center mb-10">
                <div className="text-center">
                  <h4 className="text-4xl font-bold mb-2">
                    25,678
                  </h4>

                  <p className="text-green-400">
                    +15.32%
                  </p>
                </div>
              </div>

              <button className="w-full rounded-2xl py-4 bg-purple-600 hover:bg-purple-500 transition duration-300 font-semibold shadow-[0_0_30px_rgba(168,85,247,0.35)]">
                Delegate Votes
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}