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
    <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-blue-400">
            Governance
          </p>

          <h3 className="text-lg font-semibold">
            Governance Terminal
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-blue-300">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Live
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-blue-500/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-blue-500/10 bg-[#081222]">
              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Proposal
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Votes
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {governanceFeed.map((proposal) => (
              <tr
                key={proposal.title}
                className="border-b border-blue-500/5 hover:bg-[#081222]/60"
              >
                <td className="px-3 py-2 font-medium">
                  {proposal.title}
                </td>

                <td
                  className={`px-3 py-2 font-semibold ${proposal.color}`}
                >
                  {proposal.votes}
                </td>

                <td className="px-3 py-2 text-right text-blue-300">
                  {proposal.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}