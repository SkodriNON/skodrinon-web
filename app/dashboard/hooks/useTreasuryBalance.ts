"use client";

import {
  useBalance,
} from "wagmi";

import {
  protocolConfig,
} from "../config/chains";

export function useTreasuryBalance() {

  const {

    data,

    isLoading,

    error,

  } = useBalance({

    address:
      protocolConfig.treasuryAddress as `0x${string}`,
  });

  return {

    treasuryBalance:
      data,

    isLoading,

    error,
  };
}