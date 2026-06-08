export function calculateTreasuryValue(
  totalPortfolio: number
) {

  // =====================================================
  // BASE TREASURY
  // =====================================================

  const treasuryValue =
    totalPortfolio * 4.2;

  // =====================================================
  // RESERVE ALLOCATION
  // =====================================================

  const stableReserves =
    treasuryValue * 0.35;

  const protocolReserves =
    treasuryValue * 0.25;

  const stakingReserves =
    treasuryValue * 0.20;

  const ecosystemFund =
    treasuryValue * 0.12;

  const insuranceFund =
    treasuryValue * 0.08;

  // =====================================================
  // RUNWAY ESTIMATION
  // =====================================================

  const monthlyProtocolCosts =
    treasuryValue * 0.015;

  const protocolRunwayMonths =

    monthlyProtocolCosts > 0

      ? treasuryValue /
        monthlyProtocolCosts

      : 0;

  // =====================================================
  // SUSTAINABILITY SCORE
  // =====================================================

  const sustainabilityScore = Math.min(

    (
      stableReserves * 0.30 +

      protocolReserves * 0.25 +

      stakingReserves * 0.20 +

      ecosystemFund * 0.15 +

      insuranceFund * 0.10
    ) / treasuryValue,

    1
  ) * 100;

  // =====================================================
  // TREASURY HEALTH
  // =====================================================

  const treasuryHealth =

    sustainabilityScore >= 85

      ? "Optimal"

    : sustainabilityScore >= 70

      ? "Healthy"

    : sustainabilityScore >= 50

      ? "Stable"

      : "Risk";

  // =====================================================
  // BACKING RATIO
  // =====================================================

  const stakingBackingRatio =

    stakingReserves > 0

      ? (
          stakingReserves /
          treasuryValue
        ) * 100

      : 0;

  // =====================================================
  // RETURN
  // =====================================================

  return {

    treasuryValue,

    stableReserves,

    protocolReserves,

    stakingReserves,

    ecosystemFund,

    insuranceFund,

    protocolRunwayMonths,

    sustainabilityScore,

    treasuryHealth,

    stakingBackingRatio,
  };
}