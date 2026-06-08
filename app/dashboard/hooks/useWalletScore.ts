"use client";

import {
  calculateWalletScore,
} from "../services/wallet.service";

export function useWalletScore(
  txCount: number
) {

  const walletScore =
    calculateWalletScore(
      txCount
    );

  return { walletScore };
}