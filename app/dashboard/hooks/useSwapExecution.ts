"use client";

import {
  parseEther,
} from "viem";

import {
  useWriteContract,
  useWaitForTransactionReceipt,
  useChainId,
} from "wagmi";

import {
  useState,
} from "react";

import {
  protocolContracts,
} from "../contracts/protocolContracts";

export function useSwapExecution() {

  const chainId =
    useChainId();

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

  async function executeSwap(
    amountIn: string,
    amountOutMin: string,
    path: `0x${string}`[],
    to: `0x${string}`,
    deadline: bigint
  ) {

    try {

      if (
        chainId !== 11155111
      ) {

        return {
          success: false,
          error:
            "Wrong network",
        };
      }

      if (
        txLoading
      ) {

        return {
          success: false,
          error:
            "Transaction pending",
        };
      }

      setTxLoading(true);

      const hash =
        await writeContractAsync({

          address:
            protocolContracts.router.address as `0x${string}`,

          abi:
            protocolContracts.router.abi,

          functionName:
            "swapExactTokensForTokens",

          args: [

            parseEther(
              amountIn
            ),

            parseEther(
              amountOutMin
            ),

            path,

            to,

            deadline,
          ],
        });

      setCurrentHash(
        hash
      );

      return {
        success: true,
        hash,
      };

    } catch (
      error
    ) {

      return {

        success: false,

        error:
          error instanceof Error
            ? error.message
            : "Swap failed",
      };

    } finally {

      setTxLoading(false);
    }
  }

  return {

  executeSwap,

  txLoading,

  txConfirming,

  txConfirmed,

  isPending:
    txLoading,

  error: null,
};

}