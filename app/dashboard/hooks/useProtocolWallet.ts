"use client";

import {
  useAccount,
  useConnect,
  useDisconnect,
} from "wagmi";

export function useProtocolWallet() {

  const {
    address,
    isConnected,
  } = useAccount();

  const {
    connect,
    connectors,
  } = useConnect();

  const {
    disconnect,
  } = useDisconnect();

  return {

    walletAddress:
      address,

    isConnected,

    connect,

    connectors,

    disconnect,
  };
}