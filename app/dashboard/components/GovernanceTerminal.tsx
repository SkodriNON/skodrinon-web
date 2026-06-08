
"use client";

const governanceFeed = [

  {
    title: "Treasury Expansion Proposal",
    votes: "84%",
    status: "Passing",
    color: "text-green-400",
  },

  {
    title: "AI Treasury Allocation",
    votes: "72%",
    status: "Review",
    color: "text-cyan-400",
  },

  {
    title: "Crosschain Deployment",
    votes: "91%",
    status: "Approved",
    color: "text-blue-400",
  },

  {
    title: "Liquidity Incentives",
    votes: "64%",
    status: "Active",
    color: "text-violet-400",
  },

];

export default function GovernanceTerminal() {

  return (

    <div className="rounded-[32px] border border-blue-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-3">

            Autonomous Governance Layer

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">

            Governance Terminal

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />

          <span className="text-sm font-semibold text-blue-300">

            DAO Governance Live

          </span>

        </div>

      </div>

      {/* PROPOSALS */}

      <div className="relative z-10 space-y-5">

        {governanceFeed.map((proposal) => (

          <div

            key={proposal.title}

            className="rounded-3xl border border-blue-500/10 bg-[#081222]/80 p-6 hover:border-blue-500/30 transition-all duration-300"

          >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              <div>

                <h4 className="text-2xl font-black mb-3">

                  {proposal.title}

                </h4>

                <p className="text-sm text-gray-400">

                  AI-assisted governance monitoring and realtime DAO voting analysis.

                </p>

              </div>

              <div className="flex flex-col items-start lg:items-end gap-3">

                <h5 className={`text-4xl font-black ${proposal.color}`}>

                  {proposal.votes}

                </h5>

                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1">

                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

                  <span className="text-xs text-blue-300">

                    {proposal.status}

                  </span>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}