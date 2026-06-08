"use client";

import {
  useWriteContract,
} from "wagmi";

import {
  erc20Abi,
} from "../contracts/erc20Abi";

import {
  protocolContracts,
} from "../contracts/protocolContracts";

export function useTokenApproval() {

  const {

    writeContract,

    isPending,

    error,

  } = useWriteContract();

  async function approveToken(

    tokenAddress:
      `0x${string}`,

    amount:
      bigint
  ) {

    try {

      await writeContract({

        address:
          tokenAddress,

        abi:
          erc20Abi,

        functionName:
          "approve",

        args: [

          protocolContracts.router.address,

          amount,
        ],
      });

      return {
        success: true,
      };

    } catch {

      return {
        success: false,
      };
    }
  }

  return {

    approveToken,

    isPending,

    error,
  };
}