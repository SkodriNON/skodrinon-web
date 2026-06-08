"use client";

import {
  useMemo,
} from "react";

import {
  calculatePnL,
} from "../services/pnl.service";

export function usePnL(
  currentValue: number,
  initialValue: number
) {

  return useMemo(() => {

    return calculatePnL(
      currentValue,
      initialValue
    );

  }, [
    currentValue,
    initialValue,
  ]);
}