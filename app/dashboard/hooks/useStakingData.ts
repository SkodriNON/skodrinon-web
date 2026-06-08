"use client";

import {
  useReadContract,
} from "wagmi";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

const stakingAbi = [

  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],

    name: "stakedBalance",

    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],

    stateMutability: "view",

    type: "function",
  },

  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],

    name: "earned",

    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],

    stateMutability: "view",

    type: "function",
  },

  // =========================================
  // LOCK END
  // =========================================

  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],

    name: "unlockTime",

    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],

    stateMutability: "view",

    type: "function",
  },

] as const;

export function useStakingData(
  stakingAddress:
    `0x${string}`,

  safeAddress?:
    `0x${string}`
) {

  const {
    data:
      realStakedBalance,
  } = useReadContract({

    address:
      stakingAddress,

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

  const {
    data:
      realRewards,
  } = useReadContract({

    address:
      stakingAddress,

    abi:
      stakingAbi,

    functionName:
      "earned",

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

  // =========================================
  // UNLOCK TIME
  // =========================================

  const {
    data:
      unlockTimestamp,
  } = useReadContract({

    address:
      stakingAddress,

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

  // =========================================
  // LIVE COUNTDOWN
  // =========================================

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

  return {

    realStakedBalance:
      realStakedBalance
        ? Number(
            realStakedBalance
          ) / 1e18
        : 0,

    realRewards:
      realRewards
        ? Number(
            realRewards
          ) / 1e18
        : 0,

    unlockTimestamp:
      unlockDate,

    unlockCountdown,

    unlocked:
      remainingMs <= 0,
  };
}