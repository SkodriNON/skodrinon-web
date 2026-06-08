"use client";

import {
  useReadContract,
} from "wagmi";

import {
  protocolContracts,
} from "../contracts/protocolContracts";

export function useLiveReserves() {

  const {

    data,

    isLoading,

    error,

  } = useReadContract({

    address:
      protocolContracts.router.address as `0x${string}`,

    abi:
      protocolContracts.router.abi,

    functionName:
      "getReserves",
  });

  return {

    reserves:
      data,

    isLoading,

    error,
  };
}