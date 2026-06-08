"use client";

import {
  useBalance,
} from "wagmi";

import { CONTRACTS }
from "../../lib/contracts";

export function useLPPositions() {

  const {
    data: lpBalance,
  } = useBalance({
    address:
      CONTRACTS.ethereum.LIQUIDITY,
  });

  const lpTokens =
    lpBalance
      ? Number(
          lpBalance.value
        ) / 1e18
      : 0;

  return {
    lpTokens,
  };
}