export function calculatePnL(
  currentValue: number,
  initialValue: number
) {

  const pnl =
    currentValue -
    initialValue;

  const pnlPercent =
    initialValue > 0
      ? (
          pnl /
          initialValue
        ) * 100
      : 0;

  return {
    pnl,
    pnlPercent,
  };
}