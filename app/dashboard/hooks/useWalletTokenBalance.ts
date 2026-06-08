"use client";

import {
  useBalance,
  useAccount,
} from "wagmi";

export function useWalletTokenBalance() {

  const {
    address,
  } = useAccount();

  const {

    data,

    isLoading,

    error,

  } = useBalance({

    address,
  });

  return {

    walletBalance:
      data,

    walletAddress:
      address,

    isLoading,

    error,
  };
}