"use client";

import {
  calculateTreasuryValue,
} from "../services/treasury.service";

export function useTreasuryValue(
  totalPortfolio: number
) {

  return calculateTreasuryValue(
    totalPortfolio
  );
}