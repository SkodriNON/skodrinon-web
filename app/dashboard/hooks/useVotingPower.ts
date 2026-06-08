"use client";

import {
  calculateVotingPower,
} from "../services/governance.service";

export function useVotingPower(
  tokenBalance?: bigint
) {

  const votingPower =
    calculateVotingPower(
      tokenBalance
    );

  return { votingPower };
}