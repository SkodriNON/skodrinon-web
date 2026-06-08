export function calculateStakedTokens(
  tokenBalance?: bigint
) {

  if (!tokenBalance)
    return 0;

  return (
    Number(tokenBalance) /
    1e18 *
    0.42
  );
}