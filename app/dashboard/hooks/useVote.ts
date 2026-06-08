"use client";

import {
  useState,
} from "react";

import {
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";

import {
  useQueryClient,
} from "@tanstack/react-query";

import {
  invalidateDashboardQueries,
} from "../services/queryInvalidation.service";

import { CONTRACTS }
from "../../lib/contracts";

const governanceAbi = [

  {
    type: "function",

    name: "vote",

    stateMutability:
      "nonpayable",

    inputs: [

      {
        name: "proposalId",
        type: "uint256",
      },

      {
        name: "support",
        type: "bool",
      },

    ],

    outputs: [],
  },

] as const;

export function useVote() {

  const [
    voting,
    setVoting,
  ] = useState(false);

  const [
    txStatus,
    setTxStatus,
  ] = useState<
    | "idle"
    | "wallet"
    | "confirming"
    | "success"
    | "failed"
  >("idle");

  const [
    currentHash,
    setCurrentHash,
  ] = useState<
    `0x${string}` | undefined
  >();

  const queryClient =
    useQueryClient();

  const {
    writeContractAsync,
  } = useWriteContract();

  const {
    isLoading:
      txConfirming,

    isSuccess:
      txConfirmed,

  } =
    useWaitForTransactionReceipt({

      hash:
        currentHash,

    });

  // =========================================
  // AUTO TX STATES
  // =========================================

  if (
    txConfirming &&
    txStatus !==
      "confirming"
  ) {

    setTxStatus(
      "confirming"
    );
  }

  if (
    txConfirmed &&
    txStatus !==
      "success"
  ) {

    setTxStatus(
      "success"
    );
  }

  // =========================================
  // VOTE
  // =========================================

  async function vote(

    proposalId: string,

    support = true

  ) {

    try {

      setVoting(true);

      setTxStatus(
        "wallet"
      );

      const hash =
        await writeContractAsync({

          address:
            CONTRACTS.ethereum.GOVERNANCE,

          abi:
            governanceAbi,

          functionName:
            "vote",

          args: [
            BigInt(
              proposalId
            ),
            support,
          ],

        });

      setCurrentHash(
        hash
      );

      setTxStatus(
        "confirming"
      );

      // =====================================
      // AUTO REFRESH
      // =====================================

      await invalidateDashboardQueries(
        queryClient,
        CONTRACTS.ethereum.GOVERNANCE
      );

      setTxStatus(
        "success"
      );

    } catch (
      error
    ) {

      console.error(
        error
      );

      setTxStatus(
        "failed"
      );

    } finally {

      setVoting(false);

      setTimeout(() => {

        setTxStatus(
          "idle"
        );

      }, 4000);
    }
  }

  return {

    vote,

    voting,

    txStatus,

    txConfirming,

    txConfirmed,
  };
}