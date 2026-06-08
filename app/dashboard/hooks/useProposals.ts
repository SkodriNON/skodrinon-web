"use client";

import {
  useGovernanceData,
} from "./useGovernanceData";

export function useProposals() {

  const {

    proposals,

    proposalsLoading,

  } = useGovernanceData();

  return {

    proposals,

    proposalsLoading,
  };
}