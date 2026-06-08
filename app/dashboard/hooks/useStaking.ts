"use client";

import {
  useAccount,
  useReadContract,
} from "wagmi";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { CONTRACTS }
from "../../lib/contracts";

import { stakingAbi }
from "../../lib/stakingAbi";

export function useStaking(
  tokenBalance?: bigint
) {

  const { address } =
    useAccount();

  const safeAddress =
    address &&
    address.startsWith("0x")
      ? address
      : undefined;

  // =====================================================
  // STAKED BALANCE
  // =====================================================

  const {

    data: stakedBalance,

    isLoading:
      stakingLoading,

    error:
      stakingError,

  } = useReadContract({

    address:
      CONTRACTS.ethereum.STAKING,

    abi:
      stakingAbi,

    functionName:
      "stakedBalance",

    args:
      safeAddress
        ? [safeAddress]
        : undefined,

    query: {

      enabled:
        !!safeAddress,

      refetchInterval:
        3000,
    },
  });

  // =====================================================
  // REWARDS
  // =====================================================

  const {

    data: earnedRewards,

    isLoading:
      rewardsLoading,

    error:
      rewardsError,

  } = useReadContract({

    address:
      CONTRACTS.ethereum.STAKING,

    abi:
      stakingAbi,

    functionName:
      "pendingRewards",

    args:
      safeAddress
        ? [safeAddress]
        : undefined,

    query: {

      enabled:
        !!safeAddress,

      refetchInterval:
        3000,
    },
  });

  // =====================================================
  // REWARD RATE
  // =====================================================

  const {
    data: rewardPerSecond,
  } = useReadContract({

    address:
      CONTRACTS.ethereum.STAKING,

    abi:
      stakingAbi,

    functionName:
      "rewardPerSecond",

    query: {

      refetchInterval:
        10000,
    },
  });

  // =====================================================
  // TOTAL STAKED
  // =====================================================

  const {
    data: totalStakedData,
  } = useReadContract({

    address:
      CONTRACTS.ethereum.STAKING,

    abi:
      stakingAbi,

    functionName:
      "totalStaked",

    query: {

      refetchInterval:
        10000,
    },
  });

  // =====================================================
  // UNLOCK TIME
  // =====================================================

  const {
    data: unlockTimestamp,
  } = useReadContract({

    address:
      CONTRACTS.ethereum.STAKING,

    abi:
      stakingAbi,

    functionName:
      "unlockTime",

    args:
      safeAddress
        ? [safeAddress]
        : undefined,

    query: {

      enabled:
        !!safeAddress,

      refetchInterval:
        1000,
    },
  });

  // =====================================================
  // LIVE TIMER
  // =====================================================

  const [
    currentTime,
    setCurrentTime,
  ] = useState(
    Date.now()
  );

  useEffect(() => {

    const interval =
      setInterval(() => {

        setCurrentTime(
          Date.now()
        );

      }, 1000);

    return () =>
      clearInterval(
        interval
      );

  }, []);

  const unlockDate =
    unlockTimestamp
      ? Number(
          unlockTimestamp
        ) * 1000
      : 0;

  const remainingMs =
    Math.max(
      unlockDate -
        currentTime,
      0
    );

  const unlockCountdown =
    useMemo(() => {

      if (
        remainingMs <= 0
      ) {

        return "Unlocked";
      }

      const days =
        Math.floor(
          remainingMs /
            (1000 *
              60 *
              60 *
              24)
        );

      const hours =
        Math.floor(
          (
            remainingMs %
            (1000 *
              60 *
              60 *
              24)
          ) /
            (1000 *
              60 *
              60)
        );

      const minutes =
        Math.floor(
          (
            remainingMs %
            (1000 *
              60 *
              60)
          ) /
            (1000 * 60)
        );

      const seconds =
        Math.floor(
          (
            remainingMs %
            (1000 * 60)
          ) / 1000
        );

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }, [remainingMs]);

  // =====================================================
  // VALUES
  // =====================================================

  const stakedTokens: number =
  stakedBalance
    ? Number(stakedBalance) / 1e18
    : 0;

  const rewards: number =

    earnedRewards
      ? Number(
          earnedRewards
        ) / 1e18

      : 0;

  // =====================================================
  // STATES
  // =====================================================

  const loading =
    stakingLoading ||
    rewardsLoading;

  const error =
    stakingError ||
    rewardsError;

  return {

    stakedTokens,

    rewards,

    rewardPerSecond:
      rewardPerSecond
        ? Number(
            rewardPerSecond
          ) / 1e18
        : 0,

    totalStaked:
      totalStakedData
        ? Number(
            totalStakedData
          ) / 1e18
        : 0,

    unlockTimestamp:
      unlockDate,

    unlockCountdown,

    unlocked:
      remainingMs <= 0,

    loading,

    error,
  };
}