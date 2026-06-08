import {
  useState,
} from "react";

import {
  useGovernanceActions,
} from "../hooks/useGovernanceActions";

import {
  useNotifications,
} from "../context/NotificationContext";

type GovernanceCardProps = {

  votingPower: number;

  proposals: any[];
};

export default function GovernanceCard({

  votingPower,

  proposals,

}: GovernanceCardProps) {

  const {
    addNotification,
  } = useNotifications();

  const {

    txLoading,

    createProposal,

    vote,

    executeProposal,

  } = useGovernanceActions(
    addNotification
  );

  const [

    proposalTitle,

    setProposalTitle,

  ] = useState("");

  const [

    proposalDescription,

    setProposalDescription,

  ] = useState("");

  const [

    expandedProposal,

    setExpandedProposal,

  ] = useState<number | null>(
    null
  );

  return (

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7">

      {/* HEADER */}

      <div className="mb-10">

        <h3 className="text-2xl sm:text-xlfont-bold mb-3">

          Governance Power

        </h3>

        <p className="text-gray-400">

          DAO voting and proposal execution.

        </p>

      </div>

      {/* VOTING POWER */}

      <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full border-[18px] border-purple-500/30 mx-auto flex items-center justify-center mb-10">

        <div className="text-center">

          <h4 className="text-xlsm:text-xl font-bold mb-2">

            {votingPower.toFixed(2)}

          </h4>

          <p className="text-green-400">

            Active Votes

          </p>

        </div>

      </div>

      {/* CREATE PROPOSAL */}

      <div className="space-y-4 mb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <button className="rounded-2xl py-4 bg-purple-600 hover:bg-purple-500 transition duration-300 font-semibold">

            Delegate Votes

          </button>

          <button

            disabled={txLoading}

            onClick={() =>

              createProposal(

                proposalTitle,

                proposalDescription
              )

            }

            className="rounded-2xl py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition duration-300 font-semibold"
          >

            {txLoading
              ? "Processing..."
              : "Create Proposal"}

          </button>

        </div>

        <input

          value={proposalTitle}

          onChange={(e) =>
            setProposalTitle(
              e.target.value
            )
          }

          placeholder="Proposal title"

          className="w-full rounded-2xl border border-blue-500/10 bg-[#0b1728] px-5 py-4 outline-none"
        />

        <textarea

          value={
            proposalDescription
          }

          onChange={(e) =>
            setProposalDescription(
              e.target.value
            )
          }

          placeholder="Proposal description"

          className="w-full rounded-2xl border border-blue-500/10 bg-[#0b1728] px-5 py-4 outline-none min-h-[120px]"
        />

      </div>

      {/* PROPOSALS */}

      <div className="space-y-6">

        {proposals.map(
          (proposal: any) => {

            const progress =

              (

                (
                  (proposal.votesFor ?? 0) +

                  (proposal.votesAgainst ?? 0)

                ) /

                (proposal.quorum ?? 1)

              ) * 100;

            const totalVotes =

              (proposal.votesFor ?? 0) +

              (proposal.votesAgainst ?? 0);

            const quorumReached =
              progress >= 100;

            const proposalStatus =

              proposal.executed

                ? "Executed"

                : quorumReached

                ? "Passed"

                : proposal.deadline &&
                  Date.now() >
                    proposal.deadline

                ? "Failed"

                : "Active";

            const statusStyles =

              proposalStatus ===
              "Executed"

                ? "bg-cyan-500/15 border-cyan-400/20 text-cyan-300"

              : proposalStatus ===
                "Passed"

                ? "bg-green-500/15 border-green-400/20 text-green-300"

              : proposalStatus ===
                "Failed"

                ? "bg-red-500/15 border-red-400/20 text-red-300"

                : "bg-blue-500/15 border-blue-400/20 text-blue-300";

            const remainingTime =

              proposal.deadline

                ? Math.max(
                    proposal.deadline -
                      Date.now(),
                    0
                  )

                : 0;

            const remainingHours =
              Math.floor(
                remainingTime /
                  (1000 * 60 * 60)
              );

            const remainingMinutes =
              Math.floor(
                (
                  remainingTime %
                  (1000 * 60 * 60)
                ) /
                  (1000 * 60)
              );

            return (

              <div

                key={
                  proposal.id ??
                  Math.random()
                }

                className="rounded-2xl border border-blue-500/10 bg-[#0b1728] p-5"
              >

                <div className="flex items-start justify-between gap-4 mb-4">

                  <div className="flex-1">

                    <h4 className="text-xl font-bold mb-3 leading-relaxed">

                      {proposal.title}

                    </h4>

                    <p

                      className={`text-gray-400 text-sm whitespace-pre-line leading-7 transition-all duration-300 ${
                        expandedProposal ===
                        proposal.id

                          ? ""

                          : "line-clamp-4"
                      }`}
                    >

                      {proposal.description}

                    </p>

                    <button

                      onClick={() =>

                        setExpandedProposal(

                          expandedProposal ===
                          proposal.id

                            ? null

                            : proposal.id
                        )
                      }

                      className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition"
                    >

                      {expandedProposal ===
                      proposal.id

                        ? "Show Less"

                        : "Read More"}

                    </button>

                  </div>

                  <div className="flex flex-col items-end gap-3">

                    <div className="text-sm text-blue-400 whitespace-nowrap">

                      Proposal #{proposal.id}

                    </div>

                    <div

                      className={`px-3 py-1 rounded-full border text-xs font-semibold ${statusStyles}`}

                    >

                      {proposalStatus}

                    </div>

                  </div>

                </div>

                {/* VOTES */}

                <div className="grid grid-cols-2 gap-4 mb-5">

                  <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">

                    <p className="text-sm text-gray-400 mb-1">

                      Votes For

                    </p>

                    <h5 className="text-xl font-bold text-green-400">

                      {(proposal.votesFor ?? 0).toLocaleString()}

                    </h5>

                  </div>

                  <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">

                    <p className="text-sm text-gray-400 mb-1">

                      Votes Against

                    </p>

                    <h5 className="text-xl font-bold text-red-400">

                      {(proposal.votesAgainst ?? 0).toLocaleString()}

                    </h5>

                  </div>

                </div>

                {/* GOVERNANCE TIMER */}

                <div className="grid grid-cols-2 gap-4 mb-5">

                  <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/60 p-4">

                    <p className="text-sm text-gray-400 mb-1">

                      Total Votes

                    </p>

                    <h5 className="text-xl font-bold text-cyan-300">

                      {totalVotes.toLocaleString()}

                    </h5>

                  </div>

                  <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/60 p-4">

                    <p className="text-sm text-gray-400 mb-1">

                      Remaining Time

                    </p>

                    <h5 className="text-xl font-bold text-purple-300">

                      {

                        proposalStatus ===
                        "Active"

                          ? `${remainingHours}h ${remainingMinutes}m`

                          : proposalStatus

                      }

                    </h5>

                  </div>

                </div>

                {/* QUORUM */}

                <div className="mb-5">

                  <div className="flex items-center justify-between mb-2 text-sm">

                    <span className="text-gray-400">

                      Quorum Progress

                    </span>

                    <span className="text-blue-400">

                      {progress.toFixed(1)}%

                    </span>

                  </div>

                  <div className="w-full h-3 rounded-full bg-[#101f35] overflow-hidden">

                    <div

                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"

                      style={{
                        width:
                          `${Math.min(progress, 100)}%`,
                      }}
                    />

                  </div>

                </div>

                {/* ACTIONS */}

                <div className="grid grid-cols-3 gap-3">

                  <button

                    disabled={txLoading}

                    onClick={() =>
                      vote(
                        proposal.id,
                        true
                      )
                    }

                    className="rounded-xl py-3 bg-green-600 hover:bg-green-500 disabled:opacity-50 transition duration-300 font-semibold"
                  >

                    {txLoading
                      ? "Processing..."
                      : "Vote For"}

                  </button>

                  <button

                    disabled={txLoading}

                    onClick={() =>
                      vote(
                        proposal.id,
                        false
                      )
                    }

                    className="rounded-xl py-3 bg-red-600 hover:bg-red-500 disabled:opacity-50 transition duration-300 font-semibold"
                  >

                    {txLoading
                      ? "Processing..."
                      : "Vote Against"}

                  </button>

                  <button

                    disabled={
                      txLoading ||

                      (!proposal.executed &&
                        progress < 100)
                    }

                    onClick={() =>
                      executeProposal(
                        proposal.id
                      )
                    }

                    className="rounded-xl py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition duration-300 font-semibold"
                  >

                    {txLoading
                      ? "Processing..."
                      : "Execute"}

                  </button>

                </div>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
}