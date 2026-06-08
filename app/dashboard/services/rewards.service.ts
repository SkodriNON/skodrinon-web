
export const calculateRewards = (

  stakedTokens: number,

  rewards: number,

  rewardPerSecond: number,

  protocolTotalStaked: number

) => {

  // =====================================================
  // SAFE VALUES
  // =====================================================

  const safeStakedTokens =
    Number.isFinite(
      stakedTokens
    )
      ? stakedTokens
      : 0;

  const safeProtocolTotal =
    Number.isFinite(
      protocolTotalStaked
    )
      ? protocolTotalStaked
      : 0;

  const safeRewards =
    Number.isFinite(
      rewards
    )
      ? rewards
      : 0;

  // =====================================================
  // NORMALIZE REWARD RATE
  // =====================================================

  const normalizedRewardPerSecond =
  rewardPerSecond;

  // =====================================================
  // PROTOCOL EMISSIONS
  // =====================================================

  const secondsPerYear =
    60 *
    60 *
    24 *
    365;

  const yearlyProtocolRewards =

    normalizedRewardPerSecond *
    secondsPerYear;

  // =====================================================
  // USER STAKING SHARE
  // =====================================================

  const stakingShare =

    safeProtocolTotal > 0

      ? safeStakedTokens /
        safeProtocolTotal

      : 0;

  // =====================================================
  // USER REWARDS
  // =====================================================

  const yearlyRewards =

    yearlyProtocolRewards *
    stakingShare;

  const monthlyRewards =
    yearlyRewards / 12;

  const estimatedDailyRewards =
    yearlyRewards / 365;

  // =====================================================
  // REAL APR
  // =====================================================

  const rawApr =

    safeStakedTokens > 0

      ? (
          yearlyRewards /
          safeStakedTokens
        ) * 100

      : 0;

  // =====================================================
  // APR SAFETY LIMITS
  // =====================================================

  const apr =

    Number.isFinite(rawApr)

      ? Math.min(
          Math.max(
            rawApr,
            0
          ),
          100000
        )

      : 0;

  // =====================================================
  // APY
  // =====================================================

  const apy =

    apr > 0

      ? (
          (
            Math.pow(
              1 +
                apr /
                  100 /
                  365,
              365
            ) - 1
          ) * 100
        )

      : 0;

  // =====================================================
  // ROI ESTIMATION
  // =====================================================

  const yearlyROIValue =
    yearlyRewards;

  // =====================================================
  // FINAL RETURN
  // =====================================================

  return {

    rewards:
      safeRewards,

    estimatedDailyRewards,

    yearlyRewards,

    monthlyRewards,

    yearlyROIValue,

    apr,

    apy,

    stakingShare,

    yearlyProtocolRewards,
  };
};