export function categorizeTransaction(
  value: number
) {

  if (value > 5)
    return "Whale";

  if (value > 1)
    return "Large";

  if (value > 0.1)
    return "Medium";

  return "Small";
}