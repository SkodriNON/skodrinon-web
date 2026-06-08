export function calculateWalletScore(
  txCount: number
) {

  if (txCount > 100)
    return "Elite";

  if (txCount > 50)
    return "Advanced";

  if (txCount > 10)
    return "Active";

  return "New";
}