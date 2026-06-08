export default function DAOCard() {

  return (

    <div className="rounded-[32px] border border-blue-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_45%)]" />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">

              Autonomous Governance Engine

            </p>

            <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

              DAO Intelligence

            </h3>

          </div>

          <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-[0_0_25px_rgba(74,222,128,0.8)]" />

        </div>

        {/* MAIN SCORE */}

        <div className="rounded-3xl border border-cyan-500/10 bg-[#081222] p-6 mb-8">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">

                AI Governance Score

              </p>

              <h4 className="text-5xl font-black text-cyan-300">

                94%

              </h4>

            </div>

            <div className="text-right">

              <p className="text-green-400 text-sm mb-2">

                Institutional Grade

              </p>

              <p className="text-xs text-gray-500">

                Autonomous monitoring active

              </p>

            </div>

          </div>

          {/* BAR */}

          <div className="w-full h-4 rounded-full bg-[#020617] overflow-hidden">

            <div

              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"

              style={{
                width: "94%",
              }}

            />

          </div>

        </div>

        {/* METRICS */}

        <div className="grid grid-cols-2 gap-4 mb-8">

          <div className="rounded-2xl border border-green-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-3">

              Treasury Security

            </p>

            <h4 className="text-3xl font-black text-green-400">

              98%

            </h4>

          </div>

          <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-3">

              AI Consensus

            </p>

            <h4 className="text-3xl font-black text-cyan-300">

              91%

            </h4>

          </div>

          <div className="rounded-2xl border border-purple-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-3">

              Proposal Success

            </p>

            <h4 className="text-3xl font-black text-purple-300">

              87%

            </h4>

          </div>

          <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-3">

              Governance State

            </p>

            <h4 className="text-2xl font-black text-blue-400">

              Stable

            </h4>

          </div>

        </div>

        {/* AI FEED */}

        <div className="space-y-4">

          <div className="rounded-2xl border border-white/5 bg-[#081222] p-5">

            <div className="flex items-center justify-between mb-3">

              <h4 className="text-lg font-bold text-cyan-400">

                Treasury Expansion Proposal

              </h4>

              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />

            </div>

            <p className="text-gray-400 text-sm leading-7">

              AI recommends reserve diversification into ETH yield positions.

            </p>

          </div>

          <div className="rounded-2xl border border-white/5 bg-[#081222] p-5">

            <div className="flex items-center justify-between mb-3">

              <h4 className="text-lg font-bold text-green-400">

                Governance Participation Rising

              </h4>

              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

            </div>

            <p className="text-gray-400 text-sm leading-7">

              DAO voting participation increased by 14% this week.

            </p>

          </div>

          <div className="rounded-2xl border border-white/5 bg-[#081222] p-5">

            <div className="flex items-center justify-between mb-3">

              <h4 className="text-lg font-bold text-blue-400">

                Liquidity Strategy Stable

              </h4>

              <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />

            </div>

            <p className="text-gray-400 text-sm leading-7">

              Protocol liquidity allocation remains within healthy thresholds.

            </p>

          </div>

          <div className="rounded-2xl border border-white/5 bg-[#081222] p-5">

            <div className="flex items-center justify-between mb-3">

              <h4 className="text-lg font-bold text-purple-400">

                AI Security Monitoring Active

              </h4>

              <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />

            </div>

            <p className="text-gray-400 text-sm leading-7">

              No governance anomalies detected across active proposals.

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}