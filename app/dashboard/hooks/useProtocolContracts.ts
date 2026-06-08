"use client";

import {
  protocolContracts,
} from "../contracts/protocolContracts";

export function useProtocolContracts() {

  const router =

    protocolContracts.router;

  const treasury =

    protocolContracts.treasury;

  const factory =

    protocolContracts.factory;

  return {

    router,

    treasury,

    factory,
  };
}