export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}
      <aside className="w-72 border-r border-blue-500/10 bg-zinc-950 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-10 text-blue-400">
            SkodriNΩN
          </h1>

          <nav className="flex flex-col gap-3 text-gray-300">
            {[
              "Dashboard",
              "Portfolio",
              "Governance",
              "Staking",
              "AI Insights",
              "Treasury",
              "Contracts",
              "Security",
              "Analytics",
              "Settings",
            ].map((item) => (
              <button
                key={item}
                className="text-left px-5 py-4 rounded-2xl bg-zinc-900/40 hover:bg-blue-500/10 hover:border hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition duration-300"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="border border-blue-500/20 rounded-3xl p-6 bg-blue-500/10 shadow-[0_0_35px_rgba(59,130,246,0.2)]">
          <h3 className="text-xl font-semibold mb-2">
            SkodriNΩN AI
          </h3>

          <p className="text-sm text-gray-400 mb-5">
            AI governance assistant connected to Ethereum.
          </p>

          <button className="w-full py-3 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            Launch AI
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <section className="flex-1 p-8 overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%)]">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-5xl font-bold mb-3">
              Welcome back
            </h2>

            <p className="text-gray-400 text-lg">
              Governance-first AI & Web3 ecosystem dashboard.
            </p>
          </div>

          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition duration-300 font-semibold shadow-[0_0_40px_rgba(59,130,246,0.5)]">
            Connect Wallet
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            ["$12.4M", "Market Cap"],
            ["24M", "LP Lock"],
            ["100%", "Verified"],
            ["12,458", "Holders"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border border-blue-500/10 rounded-3xl p-8 bg-zinc-900/50 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-3">
                {value}
              </h3>

              <p className="text-gray-400 text-lg">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="xl:col-span-2 flex flex-col gap-8">

            {/* PORTFOLIO */}
            <div className="border border-blue-500/10 rounded-3xl p-8 bg-zinc-900/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">
                  Portfolio Overview
                </h3>

                <div className="text-green-400 font-semibold text-lg">
                  +14.2%
                </div>
              </div>

              <div className="h-72 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/10 flex items-center justify-center text-gray-500 text-xl">
                Live Analytics Chart
              </div>
            </div>

            {/* AI + STAKING */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="border border-blue-500/10 rounded-3xl p-8 bg-zinc-900/50 hover:border-blue-500/40 transition duration-300">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">
                  AI Insights
                </h3>

                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between">
                    <span>Market Sentiment</span>
                    <span className="text-green-400">Bullish</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Risk Level</span>
                    <span className="text-yellow-400">Medium</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Governance</span>
                    <span className="text-blue-400">Active</span>
                  </div>
                </div>

                <button className="mt-8 w-full py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 transition font-semibold shadow-[0_0_30px_rgba(59,130,246,0.45)]">
                  Ask AI Assistant
                </button>
              </div>

              <div className="border border-blue-500/10 rounded-3xl p-8 bg-zinc-900/50 hover:border-blue-500/40 transition duration-300">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">
                  Staking
                </h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-gray-400 mb-2">
                      Total Staked
                    </p>

                    <h4 className="text-4xl font-bold">
                      42,420 NΩN
                    </h4>
                  </div>

                  <div>
                    <p className="text-gray-400 mb-2">
                      Current APY
                    </p>

                    <h4 className="text-3xl font-bold text-green-400">
                      8.2%
                    </h4>
                  </div>
                </div>

                <button className="mt-8 w-full py-4 rounded-2xl border border-blue-500/30 hover:bg-blue-500/10 transition font-semibold">
                  Stake Tokens
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8">

            {/* WALLET */}
            <div className="border border-blue-500/10 rounded-3xl p-8 bg-zinc-900/50 hover:border-blue-500/40 transition duration-300">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">
                  Wallet
                </h3>

                <div className="text-sm text-green-400">
                  Connected
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-gray-400 mb-2">
                    Address
                  </p>

                  <p className="break-all text-blue-400">
                    0x3F...A7bC
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">
                    ETH Balance
                  </p>

                  <h4 className="text-3xl font-bold">
                    2.45 ETH
                  </h4>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">
                    NΩN Balance
                  </p>

                  <h4 className="text-3xl font-bold text-blue-400">
                    25,678
                  </h4>
                </div>
              </div>
            </div>

            {/* GOVERNANCE */}
            <div className="border border-blue-500/10 rounded-3xl p-8 bg-zinc-900/50 hover:border-blue-500/40 transition duration-300">
              <h3 className="text-2xl font-bold mb-8">
                Governance
              </h3>

              <div className="space-y-5 text-gray-300">
                <div className="flex justify-between">
                  <span>Voting Power</span>
                  <span className="text-blue-400">25,678</span>
                </div>

                <div className="flex justify-between">
                  <span>Active Proposals</span>
                  <span className="text-green-400">4</span>
                </div>

                <div className="flex justify-between">
                  <span>Treasury Status</span>
                  <span className="text-green-400">Secure</span>
                </div>
              </div>

              <button className="mt-8 w-full py-4 rounded-2xl bg-purple-500 hover:bg-purple-400 transition font-semibold shadow-[0_0_30px_rgba(168,85,247,0.45)]">
                View Proposals
              </button>
            </div>

            {/* CONTRACTS */}
            <div className="border border-blue-500/10 rounded-3xl p-8 bg-zinc-900/50 hover:border-blue-500/40 transition duration-300">
              <h3 className="text-2xl font-bold mb-8">
                Smart Contracts
              </h3>

              <div className="space-y-6 text-sm">
                <div>
                  <p className="text-gray-400 mb-2">
                    Token Contract
                  </p>

                  <p className="text-blue-400 break-all">
                    0xE9380E2C0DFaA2b77691f4824AaCe6E4ca0132e5
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">
                    LP Timelock
                  </p>

                  <p className="text-blue-400 break-all">
                    0x7818AD63a64771e3c8fD2e5CEd0A5d0Ca199BFDe
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">
                    Multisig
                  </p>

                  <p className="text-blue-400 break-all">
                    0x83a962B986aB12a6316a4E7Dccf8261221A7C068
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
