export function generatePortfolioData(
  totalPortfolio: number
) {
  const base =
    totalPortfolio > 0
      ? totalPortfolio
      : 1000;

  return Array.from(
    { length: 12 },
    (_, i) => ({
      time: `${i + 1}h`,
      price:
        base +
        Math.random() * 500 -
        250,
    })
  );
}