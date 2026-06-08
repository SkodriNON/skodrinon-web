"use client";

import {
  useAccount,
  useBalance,
} from "wagmi";

export function usePortfolioBalances() {

  const {
    address,
  } = useAccount();

  const ethBalance =
    useBalance({
      address,
    });

  return {

    walletAddress:
      address,

    balances: [

      {
        symbol: "ETH",
        balance: ethBalance,
      },
    ],
  };
}