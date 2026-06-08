"use client";

import {
  useWaitForTransactionReceipt,
} from "wagmi";

export function useTransactionMonitor(

  hash?:
    `0x${string}`
) {

  const {

    data,

    isLoading,

    isSuccess,

    error,

  } = useWaitForTransactionReceipt({

    hash,
  });

  return {

    receipt:
      data,

    isLoading,

    isSuccess,

    error,
  };
}