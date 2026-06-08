export function calculateProtocolMetrics(
  treasuryValue: number,
  totalLiquidity: number,
  stakedValue: number
) {

  const totalValueLocked =
    treasuryValue +
    totalLiquidity +
    stakedValue;

  const protocolHealth =
    totalValueLocked > 0
      ? Math.min(
          100,
          totalValueLocked / 1000
        )
      : 0;

  return {
    totalValueLocked,
    protocolHealth,
  };
}