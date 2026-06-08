"use client";

import {
  parseEther,
} from "viem";

import {
  useState,
} from "react";

import {
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";

import { erc20Abi }
from "../../lib/erc20";

import { routerAbi }
from "../abi/router.abi";

import { CONTRACTS }
from "../../lib/contracts";

export function useSwapActions() {

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

  // =====================================================
  // SWAP
  // =====================================================

  async function executeSwap(

    tokenIn:
      `0x${string}`,

    tokenOut:
      `0x${string}`,

    amount:
      string,

    userAddress:
      `0x${string}`

  ) {

    if (
      txLoading
    ) {

      return;
    }

    try {

      setTxLoading(true);

      const parsedAmount =
        parseEther(amount);

      // =================================================
      // APPROVE
      // =================================================

      await writeContractAsync({

        address:
          tokenIn,

        abi:
          erc20Abi,

        functionName:
          "approve",

        args: [

          CONTRACTS.ethereum.ROUTER,

          parsedAmount,
        ],
      });

      // =================================================
      // SWAP
      // =================================================

      const hash =
        await writeContractAsync({

          address:
            CONTRACTS.ethereum.ROUTER,

          abi:
            routerAbi,

          functionName:
            "swapExactTokensForTokens",

          args: [

            parsedAmount,

            BigInt(0),

            [
              tokenIn,
              tokenOut,
            ],

            userAddress,

            BigInt(
              Math.floor(
                Date.now() / 1000
              ) + 60 * 20
            ),
          ],
        });

      setTxHash(hash);

    } catch (error) {

      console.error(error);

    } finally {

      setTxLoading(false);
    }
  }

  return {

    executeSwap,

    txLoading,

    txConfirming,

    txConfirmed,
  };
}