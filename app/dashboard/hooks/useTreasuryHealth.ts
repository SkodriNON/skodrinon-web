export function useTreasuryHealth(

  treasuryValue:
    number,

  liquidity:
    number

) {

  const ratio =

    liquidity > 0

      ? treasuryValue /
        liquidity

      : 0;

  let status =
    "Weak";

  if (ratio > 2) {

    status =
      "Strong";

  } else if (
    ratio > 1
  ) {

    status =
      "Healthy";
  }

  return {

    treasuryRatio:
      ratio.toFixed(2),

    treasuryStatus:
      status,
  };
}