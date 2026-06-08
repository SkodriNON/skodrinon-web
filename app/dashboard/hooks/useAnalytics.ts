"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  generateAnalyticsData,
} from "../services/analytics.service";

type ChartPoint = {
  time: string;
  price: number;
};

export function useAnalytics(
  totalPortfolio: number
) {

  const [
    chartData,
    setChartData,
  ] = useState<ChartPoint[]>([]);

  useEffect(() => {

    const generated =
      generateAnalyticsData(
        totalPortfolio
      );

    setChartData(generated);

  }, [totalPortfolio]);

  return { chartData };
}