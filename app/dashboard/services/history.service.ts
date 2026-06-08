type HistoryPoint = {

  time: string;

  value: number;
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
// BUILD HISTORY
// =====================================================

export function buildHistory(

  totalPortfolio: number

): HistoryPoint[] {

  const safePortfolio =
    safeNumber(
      totalPortfolio
    );

  // =====================================================
  // STABLE HISTORY
  // =====================================================

  return Array.from(

    { length: 7 },

    (_, i) => {

      // CONTROLLED TREND

      const trend =
        i * 0.015;

      // CONTROLLED VARIANCE

      const variance =

        Math.sin(i * 1.7) *
        safePortfolio *
        0.02;

      // FINAL VALUE

      const value =

        safePortfolio *

        (1 - 0.08 + trend)

        + variance;

      return {

        time:
          `Day ${i + 1}`,

        value:
          Number(
            value.toFixed(2)
          ),
      };
    }
  );
}