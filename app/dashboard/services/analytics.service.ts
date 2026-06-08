type ChartPoint = {
  time: string;
  price: number;
};

export function generateAnalyticsData(
  portfolio: number
): ChartPoint[] {

  const base =
    portfolio > 0
      ? portfolio
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