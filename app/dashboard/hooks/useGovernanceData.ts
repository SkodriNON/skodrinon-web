"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useReadContract,
  usePublicClient,
} from "wagmi";

import { governanceAbi }
from "../../lib/governanceAbi";

import { CONTRACTS }
from "../../lib/contracts";

export function useGovernanceData() {

  const publicClient =
    usePublicClient();

  const [
    proposals,
    setProposals,
  ] = useState<any[]>([]);

  // =====================================================
  // TOTAL PROPOSALS
  // =====================================================

  const {
    data: proposalCount,
    isLoading:
      proposalsLoading,
  } = useReadContract({

    address:
      CONTRACTS.ethereum.GOVERNANCE,

    abi:
      governanceAbi,

    functionName:
      "proposalCount",

    query: {

      refetchInterval:
        5000,
    },

  });

  // =====================================================
  // LOAD PROPOSALS
  // =====================================================

  useEffect(() => {

    async function load() {

      if (
        !proposalCount ||
        !publicClient
      ) {

        setProposals([]);

        return;
      }

      const items = [];

      for (

        let i = 0;

        i < Number(proposalCount);

        i++

      ) {

        try {

          const proposal =
            await publicClient.readContract({

              address:
                CONTRACTS.ethereum.GOVERNANCE,

              abi:
                governanceAbi,

              functionName:
                "proposals",

              args: [
                BigInt(i),
              ],

            });

          const fullText =
            String(
              proposal[0] || ""
            ).trim();

          // =========================================
          // TITLE + DESCRIPTION SPLIT
          // =========================================

          let title =
            `Proposal #${i}`;

          let description =
            fullText;

          if (
            fullText.includes("\n")
          ) {

            const parts =
              fullText.split("\n");

            title =
              parts[0].trim();

            description =
              parts
                .slice(1)
                .join("\n")
                .trim();

          } else {

            const firstSentence =
              fullText
                .split(".")[0]
                .trim();

            title =
              firstSentence;

            description =
              fullText
                .replace(
                  firstSentence,
                  ""
                )
                .trim();
          }

          items.push({

            id: i,

            title,

            description,

            startTime:
              Number(
                proposal[1]
              ),

            endTime:
              Number(
                proposal[2]
              ),

            votesFor:
              Number(
                proposal[3]
              ) / 1e18,

            votesAgainst:
              Number(
                proposal[4]
              ) / 1e18,

            executed:
              proposal[5],

            quorum:
              100,

            status:
              proposal[5]
                ? "Executed"
                : "Active",

          });

        } catch {

          console.log(
            "Proposal load failed"
          );
        }
      }

      setProposals(
        items.reverse()
      );
    }

    load();

  }, [
    proposalCount,
    publicClient,
  ]);

  return {

    proposalCount:
      Number(
        proposalCount || 0
      ),

    proposals,

    proposalsLoading,
  };
}