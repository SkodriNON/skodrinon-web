"use client";

import { parseEther } from "viem";

import { useWriteContract, useWaitForTransactionReceipt, useReadContract, useChainId, useAccount, } from "wagmi";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  useQueryClient,
} from "@tanstack/react-query";

import {
  invalidateDashboardQueries,
} from "../services/queryInvalidation.service";

import { stakingAbi }
from "../../lib/stakingAbi";

import { erc20Abi }
from "../contracts/erc20Abi";

import { CONTRACTS }
from "../../lib/contracts";

export function useStakingActions(
  stakingAddress: `0x${string}`,
  addNotification: (
    message: string
  ) => void
) {

  const chainId =
    useChainId();

  const {
  address,
} = useAccount();

  const {
    writeContractAsync,
  } = useWriteContract();

  const [
    currentHash,
    setCurrentHash,
  ] = useState<
    `0x${string}` | undefined
  >();

  const {
    isLoading:
      txConfirming,

    isSuccess:
      txConfirmed,

  } = useWaitForTransactionReceipt({
    hash: currentHash,
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

  const {
    data: allowance,
  } = useReadContract({
    address:
      CONTRACTS.ethereum.TOKEN,

    abi:
      erc20Abi,

    functionName:
      "allowance",

args: [
  address as `0x${string}`,
  stakingAddress,
],

    query: {
      refetchInterval:
        10000,
    },
  });

  // =====================================================
  // AUTO REFRESH
  // =====================================================

  useEffect(() => {

    if (
      txConfirmed &&
      currentHash
    ) {

      invalidateDashboardQueries(
        queryClient,
        stakingAddress
      );

      addNotification(
        "Dashboard synced"
      );
    }

  }, [
    txConfirmed,
    currentHash,
    queryClient,
    stakingAddress,
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
  // SECURITY VALIDATION
  // =====================================================

  function validateTransaction() {

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
        "Transaction cooldown active"
      );

      return false;
    }

    if (
      !stakingAddress ||
      !stakingAddress.startsWith(
        "0x"
      )
    ) {

      addNotification(
        "Invalid staking contract"
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
          "insufficient"
        )
      ) {

        return (
          "Insufficient balance"
        );
      }

      if (
        message.includes(
          "execution reverted"
        )
      ) {

        return (
          "Smart contract reverted transaction"
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
      "Transaction failed"
    );
  }

  // =====================================================
  // SANITIZE
  // =====================================================

  function sanitizeAmount(
    value: string
  ) {

    const trimmed =
      value.trim();

    if (!trimmed) {
      return null;
    }

    if (
      trimmed.includes("e") ||
      trimmed.includes("E")
    ) {

      return null;
    }

    if (
      !/^\d+(\.\d+)?$/.test(
        trimmed
      )
    ) {

      return null;
    }

    const parsed =
      Number(trimmed);

    if (
      !Number.isFinite(
        parsed
      )
    ) {

      return null;
    }

    if (
      parsed <= 0
    ) {

      return null;
    }

    if (
      parsed >
      1_000_000
    ) {

      return null;
    }

    return trimmed;
  }

  // =====================================================
  // STAKE
  // =====================================================

  async function handleStake(
    stakeAmount: string
  ) {

    if (
      !validateTransaction()
    ) {

      return;
    }

    const sanitizedAmount =
      sanitizeAmount(
        stakeAmount
      );

    if (!sanitizedAmount) {

      addNotification(
        "Invalid stake amount"
      );

      return;
    }

    if (txLoading) {

      addNotification(
        "Transaction pending"
      );

      return;
    }

    try {

      setTxLoading(true);

      const parsedAmount =
        parseEther(
          sanitizedAmount
        );

      if (
  !allowance ||
  BigInt(
    allowance as string
  ) < parsedAmount
) {

        addNotification(
          "Approving NON..."
        );

        const approveHash =
          await writeContractAsync({

            address:
              CONTRACTS.ethereum.TOKEN,

            abi:
              erc20Abi,

            functionName:
              "approve",

            args: [
              stakingAddress,
              parsedAmount,
            ],
          });

        setCurrentHash(
          approveHash
        );

        addNotification(
          "Approval submitted"
        );
      }

      addNotification(
        "Staking NON..."
      );

      const stakeHash =
        await writeContractAsync({

          address:
            stakingAddress,

          abi:
            stakingAbi,

          functionName:
            "stake",

          args: [
            parsedAmount,
          ],
        });

      setCurrentHash(
        stakeHash
      );

      addNotification(
        "Stake submitted"
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
  // UNSTAKE
  // =====================================================

  async function handleUnstake(
    stakeAmount: string
  ) {

    if (
      !validateTransaction()
    ) {

      return;
    }

    const sanitizedAmount =
      sanitizeAmount(
        stakeAmount
      );

    if (!sanitizedAmount) {

      addNotification(
        "Invalid unstake amount"
      );

      return;
    }

    try {

      setTxLoading(true);

      addNotification(
        "Unstaking NON..."
      );

      const unstakeHash =
        await writeContractAsync({

          address:
            stakingAddress,

          abi:
            stakingAbi,

          functionName:
            "unstake",

          args: [
            parseEther(
              sanitizedAmount
            ),
          ],
        });

      setCurrentHash(
        unstakeHash
      );

      addNotification(
        "Unstake submitted"
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
  // CLAIM
  // =====================================================

  async function handleClaimRewards() {

    if (
      !validateTransaction()
    ) {

      return;
    }

    try {

      setTxLoading(true);

      addNotification(
        "Claiming rewards..."
      );

      const claimHash =
        await writeContractAsync({

          address:
            stakingAddress,

          abi:
            stakingAbi,

          functionName:
            "claimRewards",

          args: [],
        });

      setCurrentHash(
        claimHash
      );

      addNotification(
        "Rewards submitted"
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
  // COMPOUND
  // =====================================================

  async function handleCompoundRewards() {

    if (
      !validateTransaction()
    ) {

      return;
    }

    try {

      setTxLoading(true);

      addNotification(
        "Compounding rewards..."
      );

      const compoundHash =
        await writeContractAsync({

          address:
            stakingAddress,

          abi:
            stakingAbi,

          functionName:
            "compoundRewards",

          args: [],
        });

      setCurrentHash(
        compoundHash
      );

      addNotification(
        "Compound submitted"
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

    handleStake,
    handleUnstake,

    handleClaimRewards,
    handleCompoundRewards,

    txConfirming,
    txConfirmed,
  };
}