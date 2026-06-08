"use client";

import { useMemo }
from "react";

import {
  usePnL,
} from "./usePnL";

import {
  useRewards,
} from "./useRewards";

import {
  useLiquidity,
} from "./useLiquidity";

import {
  useProtocolMetrics,
} from "./useProtocolMetrics";

import {
  useROI,
} from "./useROI";

import {
  useAnalytics,
} from "./useAnalytics";

import {
  useTreasuryValue,
} from "./useTreasuryValue";

export function useDashboardMetrics({

  totalPortfolio,
  initialPortfolio,

  stakedTokens,
  rewards,

  rewardPerSecond,
  protocolTotalStaked,

  stakingValue,

}: {

  totalPortfolio: number;
  initialPortfolio: number;

  stakedTokens: number;
  rewards: number;

  rewardPerSecond: number;

  protocolTotalStaked: number;

  stakingValue: number;
}) {

  // =====================================================
  // PNL
  // =====================================================

  const {

    pnl,
    pnlPercent,

  } = usePnL(
    totalPortfolio,
    initialPortfolio
  );

  // =====================================================
  // REWARDS
  // =====================================================

  const {

    yearlyRewards,
    monthlyRewards,
    apr,

  } = useRewards(

    stakedTokens,

    rewards,

    rewardPerSecond,

    protocolTotalStaked
  );

  // =====================================================
  // ANALYTICS
  // =====================================================

  const {
    chartData,
  } = useAnalytics(
    totalPortfolio
  );

  // =====================================================
  // TREASURY
  // =====================================================

  const treasuryValue =
    useTreasuryValue(
      totalPortfolio
    );

  // =====================================================
  // LIQUIDITY
  // =====================================================

  const {
    totalLiquidity,
  } = useLiquidity();

  // =====================================================
  // PROTOCOL
  // =====================================================

  const {

    totalValueLocked,
    protocolHealth,

    treasuryCoverage,
    stakingUtilization,
    liquidityHealth,
    governanceHealth,
    aiProtocolScore,
    ecosystemStatus,

  } = useProtocolMetrics(

    treasuryValue.treasuryValue,

    Number(totalLiquidity),

    stakingValue
  );

  // =====================================================
  // ROI
  // =====================================================

  const {

    roi,
    growthMultiplier,

  } = useROI(
    totalPortfolio
  );

  // =====================================================
  // MEMOIZED RETURN
  // =====================================================

  return useMemo(() => ({

    pnl,
    pnlPercent,

    yearlyRewards,
    monthlyRewards,
    apr,

    chartData,

    treasuryValue:
      treasuryValue.treasuryValue,

    treasuryData:
      treasuryValue,

    totalLiquidity,

    totalValueLocked,
    protocolHealth,

    treasuryCoverage,
    stakingUtilization,
    liquidityHealth,
    governanceHealth,
    aiProtocolScore,
    ecosystemStatus,

    roi,
    growthMultiplier,

  }), [

    pnl,
    pnlPercent,

    yearlyRewards,
    monthlyRewards,
    apr,

    chartData,

    treasuryValue,

    totalLiquidity,

    totalValueLocked,
    protocolHealth,

    treasuryCoverage,
    stakingUtilization,
    liquidityHealth,
    governanceHealth,
    aiProtocolScore,
    ecosystemStatus,

    roi,
    growthMultiplier,
  ]);
}