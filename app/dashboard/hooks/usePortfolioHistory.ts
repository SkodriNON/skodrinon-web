"use client";

import {

  useMemo,

} from "react";

import {
  buildHistory,
} from "../services/history.service";

// =====================================================
// HOOK
// =====================================================

export function usePortfolioHistory(

  totalPortfolio: number

) {

  // =====================================================
  // MEMOIZED HISTORY
  // =====================================================

  const history =
    useMemo(

      () =>

        buildHistory(
          totalPortfolio
        ),

      [totalPortfolio]
    );

  // =====================================================
  // RETURN
  // =====================================================

  return {

    history,
  };
}