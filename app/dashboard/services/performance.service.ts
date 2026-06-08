export function calculateROI(
  current: number,
  initial: number
) {

  if (initial <= 0) {

    return {
      roi: 0,
      growthMultiplier: 0,
    };
  }

  const roi =
    (
      (
        current -
        initial
      ) / initial
    ) * 100;

  const growthMultiplier =
    current / initial;

  return {
    roi,
    growthMultiplier,
  };
}