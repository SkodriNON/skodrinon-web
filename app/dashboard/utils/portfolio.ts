type PortfolioParams = {

  ethBalance: any;

  ethPrice: number;

  tokenBalance: any;

  tokenPrice: number;

  stakedTokens?: number;

  rewards?: number;
};

// =====================================================
// SAFE NUMBER
// =====================================================

function safeNumber(
  value: unknown
) {

  const parsed =
    Number(value);

  return Number.isFinite(
    parsed
  )
    ? parsed
    : 0;
}

// =====================================================
// CALCULATOR
// =====================================================

export function calculatePortfolio({

  ethBalance,

  ethPrice,

  tokenBalance,

  tokenPrice,

  stakedTokens = 0,

  rewards = 0,

}: PortfolioParams) {

  // =====================================================
  // ETH VALUE
  // =====================================================

  const ethUsd =

    ethBalance &&
    ethPrice > 0

      ? (

          safeNumber(
            ethBalance.value
          ) / 1e18

        ) * safeNumber(
          ethPrice
        )

      : 0;

  // =====================================================
  // TOKEN VALUE
  // =====================================================

  const tokenUsd =

    tokenBalance &&
    tokenPrice > 0

      ? (

          safeNumber(
            tokenBalance
          ) / 1e18

        ) * safeNumber(
          tokenPrice
        )

      : 0;

  // =====================================================
  // TOTAL PORTFOLIO
  // =====================================================

  const totalPortfolio =

    ethUsd +
    tokenUsd;

  // =====================================================
  // STAKING VALUE
  // =====================================================

  const stakingValue =

    safeNumber(
      stakedTokens
    ) *

    safeNumber(
      tokenPrice
    );

  // =====================================================
  // INITIAL PORTFOLIO
  // =====================================================

  const initialPortfolio =

    totalPortfolio *
    0.82;

  // =====================================================
  // RETURN
  // =====================================================

  return {

    ethUsd,

    tokenUsd,

    totalPortfolio,

    stakedTokens:
      safeNumber(
        stakedTokens
      ),

    rewards:
      safeNumber(
        rewards
      ),

    stakingValue,

    initialPortfolio,
  };
}