"use client";

import {
  useReadContract,
} from "wagmi";

import { CONTRACTS }
from "../../lib/contracts";

import { routerAbi }
from "../abi/router.abi";

export function useSwapQuote(
  amountIn: bigint,
  path: `0x${string}`[]
) {

  const {
    data,
    isLoading,
    error,
  } = useReadContract({

    address:
      CONTRACTS.ethereum.ROUTER,

    abi:
      routerAbi,

    functionName:
      "getAmountsOut",

    args: [
      amountIn,
      path,
    ],

    query: {

      enabled:

        path.length > 1 &&
        amountIn > BigInt(0),

      refetchInterval: 3000,
    },
  });

  return {

    amountsOut: data,

    isLoading,

    error,
  };
}