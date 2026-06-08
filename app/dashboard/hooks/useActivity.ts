"use client";

import {
  categorizeTransaction,
} from "../services/activity.service";

export function useActivity(
  transactions: any[]
) {

  const categorized =
    transactions.map((tx) => ({
      ...tx,
      category:
        categorizeTransaction(
          Number(tx.value)
        ),
    }));

  return {
    categorizedTransactions:
      categorized,
  };
}