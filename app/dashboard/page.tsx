"use client";
import { useConnect, useAccount, useDisconnect } from "wagmi";
import { useReadContract } from "wagmi";
import { erc20Abi } from "@/lib/erc20";
export default function Dashboard() {
  const { address, isConnected } = useAccount();

  const { connect, connectors } = useConnect();

  const { disconnect } = useDisconnect();
  const { data: tokenBalance } = useReadContract({
  address: "0xE9380E2C0DFaA2b77691f4824AaCe6E4ca0132e5",
  abi: erc20Abi,
  functionName: "balanceOf",
  args: [address!],
  query: {
    enabled: !!address,
  },
});

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
              'Dashboard',
              'Portfolio',
              'Governance',
              'Staking',
              'DAO Proposals',
              'AI Insights',
              'Treasury',
              'Swap',
              'Bridge',
              'Contracts',
              'Security',
              'Audit',
              'Analytics',
              'Settings',
            ].map((item, index) => (
              <button
                key={item}
                className={`text-left px-5 py-4 rounded-2xl transition duration-300 border ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500/40 shadow-[0_0_25px_rgba(59,130,246,0.4)] text-white'
                    : 'border-transparent hover:border-blue-500/20 hover:bg-blue-500/5'
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
            ['0.01245', '$SKNON Price'],
            ['$12.45M', 'Market Cap'],
            ['$8.72M', 'TVL'],
            ['12,458', 'Holders'],
            ['Ethereum', 'Network'],
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
                ['12,543.78', 'Total Portfolio'],
                ['42,420.69', 'Staked $SKNON'],
                ['25,678.90', 'Voting Power'],
                ['$2.45M', 'Treasury Balance'],
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
              <div className="col-span-2 rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold">
                    Portfolio Performance
                  </h3>

                  <button className="px-5 py-2 rounded-xl border border-blue-500/20 bg-blue-500/5">
                    30D
                  </button>
                </div>

                <div className="h-[350px] rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-blue-500/10 flex items-center justify-center text-gray-500 text-2xl">
                  Advanced Analytics Chart
                </div>
              </div>

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

                <button className="mt-10 w-full rounded-2xl py-4 border border-purple-500/40 hover:bg-purple-500/10 transition duration-300 font-semibold">
                  Ask AI Assistant
                </button>
              </div>

              <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-7">
                <h3 className="text-3xl font-bold mb-8">
                  Staking Overview
                </h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-gray-400 mb-2">Total Staked</p>
                    <h4 className="text-4xl font-bold">42,420.69</h4>
                  </div>

                  <div>
                    <p className="text-gray-400 mb-2">Current APY</p>
                    <h4 className="text-4xl font-bold text-green-400">8.21%</h4>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 rounded-2xl py-4 bg-blue-500 hover:bg-blue-400 transition font-semibold">
                    Stake More
                  </button>

                  <button className="flex-1 rounded-2xl py-4 border border-blue-500/30 hover:bg-blue-500/10 transition font-semibold">
                    Manage
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-7">
                <h3 className="text-3xl font-bold mb-8">
                  Activity Feed
                </h3>

                <div className="space-y-6 text-gray-300">
                  <div>Staked 1,000 $SKNON</div>
                  <div>Voted on Proposal #12</div>
                  <div>Claimed rewards</div>
                  <div>Delegated votes</div>
                </div>

                <button className="mt-10 w-full rounded-2xl py-4 border border-purple-500/30 hover:bg-purple-500/10 transition duration-300 font-semibold">
                  View All Activity
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-3 flex flex-col gap-7">
            <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-7">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">Wallet</h3>
                <span className="text-blue-400">View on Etherscan ↗</span>
              </div>

              <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5 mb-8">
  <p className="text-gray-400 mb-2">Connected Wallet</p>

  <h4 className="text-2xl font-bold">
    {address
      ? `${address.slice(0, 6)}...${address.slice(-4)}`
      : "Not Connected"}
  </h4>
</div>

              <div className="grid grid-cols-3 gap-4">
                <button className="rounded-2xl py-3 border border-blue-500/30 hover:bg-blue-500/10 transition">
                  Send
                </button>

                <button className="rounded-2xl py-3 border border-blue-500/30 hover:bg-blue-500/10 transition">
                  Receive
                </button>

                <button className="rounded-2xl py-3 border border-blue-500/30 hover:bg-blue-500/10 transition">
                  Buy
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-7">
              <h3 className="text-3xl font-bold mb-10">
                Governance Power
              </h3>

              <div className="w-56 h-56 rounded-full border-[18px] border-purple-500/30 mx-auto flex items-center justify-center mb-10">
                <div className="text-center">
                  <h4 className="text-4xl font-bold mb-2">25,678</h4>
                  <p className="text-green-400">+15.32%</p>
                </div>
              </div>

              <button className="w-full rounded-2xl py-4 bg-purple-600 hover:bg-purple-500 transition duration-300 font-semibold shadow-[0_0_30px_rgba(168,85,247,0.35)]">
                Delegate Votes
              </button>
            </div>

            <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-7">
              <h3 className="text-3xl font-bold mb-8">
                Recent Proposals
              </h3>

              <div className="space-y-6 text-lg">
                <div className="flex justify-between">
                  <span>Treasury Fund Allocation</span>
                  <span className="text-green-400">Active</span>
                </div>

                <div className="flex justify-between">
                  <span>Staking Rewards Update</span>
                  <span className="text-green-400">Active</span>
                </div>

                <div className="flex justify-between">
                  <span>ChainLink Partnership</span>
                  <span className="text-blue-400">Passed</span>
                </div>
              </div>

              <button className="mt-10 w-full rounded-2xl py-4 border border-blue-500/30 hover:bg-blue-500/10 transition duration-300 font-semibold">
                View All Proposals
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
