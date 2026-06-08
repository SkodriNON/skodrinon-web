"use client";

import { useMemo }
from "react";

import {
  calculateRewards,
} from "../services/rewards.service";

export const useRewards = (

  totalStaked: number,

  rewards: number,

  rewardPerSecond: number,

  protocolTotalStaked: number,

) => {

  return useMemo(() => {

    return calculateRewards(

      totalStaked,

      rewards,

      rewardPerSecond,

      protocolTotalStaked
    );

  }, [

    totalStaked,

    rewards,

    rewardPerSecond,

    protocolTotalStaked,
  ]);
};