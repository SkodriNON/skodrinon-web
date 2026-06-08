"use client";

import {
  useMemo,
} from "react";

import {
  calculateProtocolMetrics,
} from "../services/protocol.service";

export function useProtocolMetrics(

  treasuryValue: number,

  totalLiquidity: number,

  stakedValue: number

) {

  return useMemo(() => {

    // =====================================================
    // BASE METRICS
    // =====================================================

    const baseMetrics =
      calculateProtocolMetrics(

        treasuryValue,

        totalLiquidity,

        stakedValue
      );

    // =====================================================
    // TREASURY COVERAGE
    // =====================================================

    const treasuryCoverage =

      totalLiquidity > 0

        ? (
            treasuryValue /
            totalLiquidity
          ) * 100

        : 0;

    // =====================================================
    // STAKING UTILIZATION
    // =====================================================

    const stakingUtilization =

      treasuryValue > 0

        ? (
            stakedValue /
            treasuryValue
          ) * 100

        : 0;

    // =====================================================
    // LIQUIDITY HEALTH
    // =====================================================

    const liquidityHealth =

      totalLiquidity > 0

        ? Math.min(

            (
              totalLiquidity /
              treasuryValue
            ) * 100,

            100
          )

        : 0;

    // =====================================================
    // GOVERNANCE HEALTH
    // =====================================================

    const governanceHealth =

      stakingUtilization > 60

        ? 95

        : stakingUtilization > 40

        ? 82

        : stakingUtilization > 20

        ? 68

        : 45;

    // =====================================================
    // AI PROTOCOL SCORE
    // =====================================================

    const aiProtocolScore = Math.min(

      (
        treasuryCoverage * 0.25 +

        stakingUtilization * 0.25 +

        liquidityHealth * 0.25 +

        governanceHealth * 0.25
      ),

      100
    );

    // =====================================================
    // ECOSYSTEM STATUS
    // =====================================================

    const ecosystemStatus =

      aiProtocolScore >= 85

        ? "Optimal"

      : aiProtocolScore >= 70

        ? "Healthy"

      : aiProtocolScore >= 50

        ? "Stable"

        : "Risk";

    // =====================================================
    // RETURN
    // =====================================================

    return {

      ...baseMetrics,

      treasuryCoverage,

      stakingUtilization,

      liquidityHealth,

      governanceHealth,

      aiProtocolScore,

      ecosystemStatus,
    };

  }, [

    treasuryValue,

    totalLiquidity,

    stakedValue,
  ]);
}