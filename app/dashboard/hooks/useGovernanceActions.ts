"use client";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useChainId,
} from "wagmi";

import {
  useQueryClient,
} from "@tanstack/react-query";

import { governanceAbi }
from "../../lib/governanceAbi";

import { CONTRACTS }
from "../../lib/contracts";

import {
  invalidateDashboardQueries,
} from "../services/queryInvalidation.service";

export function useGovernanceActions(
  addNotification: (
    message: string
  ) => void
) {

  const chainId =
    useChainId();

  const {
    writeContractAsync,
  } = useWriteContract();

  const [
    txHash,
    setTxHash,
  ] = useState<
    `0x${string}` | undefined
  >();

  const {
    isLoading:
      txConfirming,

    isSuccess:
      txConfirmed,
  } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const [
    txLoading,
    setTxLoading,
  ] = useState(false);

  const [
    cooldown,
    setCooldown,
  ] = useState(false);

  const lastTxRef =
    useRef<number>(0);

  const queryClient =
    useQueryClient();

  // =====================================================
  // AUTO REFRESH
  // =====================================================

  useEffect(() => {

    if (
      txConfirmed &&
      txHash
    ) {

      invalidateDashboardQueries(
        queryClient,
        CONTRACTS.ethereum.GOVERNANCE,
      );

      addNotification(
        "Governance synced"
      );
    }

  }, [
    txConfirmed,
    txHash,
    queryClient,
    addNotification,
  ]);

  // =====================================================
  // COOLDOWN
  // =====================================================

  useEffect(() => {

    if (!cooldown) {
      return;
    }

    const timeout =
      setTimeout(() => {

        setCooldown(false);

      }, 4000);

    return () =>
      clearTimeout(timeout);

  }, [cooldown]);

  // =====================================================
  // VALIDATION
  // =====================================================

  function validateGovernanceAction() {

    const now =
      Date.now();

    if (
      chainId !== 11155111
    ) {

      addNotification(
        "Wrong network"
      );

      return false;
    }

    if (
      now -
      lastTxRef.current <
      4000
    ) {

      addNotification(
        "Governance cooldown active"
      );

      return false;
    }

    if (
      !CONTRACTS.ethereum.GOVERNANCE
    ) {

      addNotification(
        "Invalid governance contract"
      );

      return false;
    }

    lastTxRef.current =
      now;

    setCooldown(true);

    return true;
  }

  // =====================================================
  // ERROR PARSER
  // =====================================================

  function getErrorMessage(
    error: unknown
  ) {

    if (
      error instanceof Error
    ) {

      const message =
        error.message.toLowerCase();

      if (
        message.includes(
          "user rejected"
        ) ||

        message.includes(
          "user denied"
        )
      ) {

        return (
          "Transaction rejected"
        );
      }

      if (
        message.includes(
          "execution reverted"
        )
      ) {

        return (
          "Governance execution reverted"
        );
      }

      if (
        message.includes("gas")
      ) {

        return (
          "Gas estimation failed"
        );
      }

      return error.message;
    }

    return (
      "Governance transaction failed"
    );
  }

  // =====================================================
  // CREATE PROPOSAL
  // =====================================================

  async function createProposal(
    title: string,
    description: string
  ) {

    if (
      !validateGovernanceAction()
    ) {

      return;
    }

    if (
      txLoading
    ) {

      addNotification(
        "Transaction pending"
      );

      return;
    }

    if (
      !title.trim() ||
      !description.trim()
    ) {

      addNotification(
        "Proposal data required"
      );

      return;
    }

    if (
      title.length > 120
    ) {

      addNotification(
        "Title too long"
      );

      return;
    }

    if (
      description.length >
      5000
    ) {

      addNotification(
        "Description too long"
      );

      return;
    }

    try {

      setTxLoading(true);

      addNotification(
        "Creating proposal..."
      );

      const fullDescription =
        `${title}\n\n${description}`;

      const hash =
        await writeContractAsync({

          address:
            CONTRACTS.ethereum.GOVERNANCE,

          abi:
            governanceAbi,

          functionName:
            "createProposal",

          args: [
            fullDescription,
            BigInt(
              72 * 60 * 60
            ),
          ],
        });

      setTxHash(hash);

      addNotification(
        "Proposal submitted"
      );

    } catch (error) {

      addNotification(
        getErrorMessage(
          error
        )
      );

    } finally {

      setTxLoading(false);
    }
  }

  // =====================================================
  // VOTE
  // =====================================================

  async function vote(
    proposalId: number,
    support: boolean
  ) {

    if (
      !validateGovernanceAction()
    ) {

      return;
    }

    if (
      txLoading
    ) {

      addNotification(
        "Transaction pending"
      );

      return;
    }

    try {

      setTxLoading(true);

      addNotification(
        "Submitting vote..."
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

            support
              ? BigInt(100)
              : BigInt(0),

            support
              ? BigInt(0)
              : BigInt(100),
          ],
        });

      setTxHash(hash);

      addNotification(
        "Vote submitted"
      );

    } catch (error) {

      addNotification(
        getErrorMessage(
          error
        )
      );

    } finally {

      setTxLoading(false);
    }
  }

  // =====================================================
  // EXECUTE
  // =====================================================

  async function executeProposal(
    proposalId: number
  ) {

    if (
      !validateGovernanceAction()
    ) {

      return;
    }

    if (
      txLoading
    ) {

      addNotification(
        "Transaction pending"
      );

      return;
    }

    try {

      setTxLoading(true);

      addNotification(
        "Executing proposal..."
      );

      const hash =
        await writeContractAsync({

          address:
            CONTRACTS.ethereum.GOVERNANCE,

          abi:
            governanceAbi,

          functionName:
            "executeProposal",

          args: [
            BigInt(
              proposalId
            ),
          ],
        });

      setTxHash(hash);

      addNotification(
        "Proposal execution submitted"
      );

    } catch (error) {

      addNotification(
        getErrorMessage(
          error
        )
      );

    } finally {

      setTxLoading(false);
    }
  }

  return {

    txLoading,

    cooldown,

    txConfirming,
    txConfirmed,

    createProposal,

    vote,

    executeProposal,
  };
}