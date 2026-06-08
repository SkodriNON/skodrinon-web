"use client";

import {
  useReadContract,
} from "wagmi";

import {
  erc20Abi,
} from "../contracts/erc20Abi";

import {
  protocolContracts,
} from "../contracts/protocolContracts";

export function useTokenAllowance(

  tokenAddress:
    `0x${string}`,

  owner?:
    `0x${string}`
) {

  const {

    data,

    isLoading,

    error,

  } = useReadContract({

    address:
      tokenAddress,

    abi:
      erc20Abi,

    functionName:
      "allowance",

    args: [

      owner ||
      "0x0000000000000000000000000000000000000000",

      protocolContracts.router.address,
    ],
  });

  return {

    allowance:
      data,

    isLoading,

    error,
  };
}