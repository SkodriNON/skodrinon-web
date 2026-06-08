"use client";

import {
  calculateROI,
} from "../services/performance.service";

export function useROI(
  totalPortfolio: number
) {

  const {
    roi,
    growthMultiplier,
  } =
    calculateROI(
      totalPortfolio,
      1000
    );

  return {
    roi,
    growthMultiplier,
  };
}