"use client";

import {

  useEffect,
  useState,
  useRef,

} from "react";

import {
  getTransactions,
} from "../services/transaction.service";

// =====================================================
// TYPES
// =====================================================

type Transaction = {

  hash: string;

  from: string;

  to: string;

  value: string;

  timestamp?: string;

  type?: string;

  explorerUrl?: string;
};

export function useTransactions(
  address?: string
) {

  // =====================================================
  // STATES
  // =====================================================

  const [

    transactions,
    setTransactions,

  ] = useState<
    Transaction[]
  >([]);

  const [

    loading,
    setLoading,

  ] = useState(false);

  const [

    realtimeActive,
    setRealtimeActive,

  ] = useState(false);

  const [

    lastUpdated,
    setLastUpdated,

  ] = useState<
    string | null
  >(null);

  // =====================================================
  // REFS
  // =====================================================

  const intervalRef =
    useRef<
      NodeJS.Timeout | null
    >(null);

  // =====================================================
  // LOAD TXS
  // =====================================================

  async function loadTransactions() {

    if (
      !address ||
      !address.startsWith("0x")
    ) {

      setTransactions([]);

      return;
    }

    try {

      setLoading(true);

      const txs =
        await getTransactions(
          address
        );

      // SORT NEWEST

      const sortedTxs =

        [...txs].sort(

          (
            a,
            b
          ) => {

            const aTime =
              new Date(

                a.timestamp ||
                0

              ).getTime();

            const bTime =
              new Date(

                b.timestamp ||
                0

              ).getTime();

            return (
              bTime - aTime
            );
          }
        );

      // LIMIT

      const limitedTxs =
        sortedTxs.slice(
          0,
          25
        );

      setTransactions(
        limitedTxs
      );

      setLastUpdated(
        new Date().toLocaleTimeString()
      );

      setRealtimeActive(
        true
      );

    } catch (

      error

    ) {

      console.error(
        "Transaction feed error:",
        error
      );

      setRealtimeActive(
        false
      );

    } finally {

      setLoading(false);
    }
  }

  // =====================================================
  // INITIAL LOAD
  // =====================================================

  useEffect(() => {

    loadTransactions();

  }, [address]);

  // =====================================================
  // REALTIME ENGINE
  // =====================================================

  useEffect(() => {

    if (
      !address ||
      !address.startsWith("0x")
    ) {

      return;
    }

    // AUTO REFRESH

    intervalRef.current =
      setInterval(() => {

        loadTransactions();

      }, 15000);

    // CLEANUP

    return () => {

      if (
        intervalRef.current
      ) {

        clearInterval(
          intervalRef.current
        );
      }
    };

  }, [address]);

  // =====================================================
  // ANALYTICS
  // =====================================================

  const incomingTransactions =

    transactions.filter(

      (
        tx
      ) =>

        tx.to?.toLowerCase() ===
        address?.toLowerCase()
    ).length;

  const outgoingTransactions =

    transactions.filter(

      (
        tx
      ) =>

        tx.from?.toLowerCase() ===
        address?.toLowerCase()
    ).length;

  const totalVolume =

    transactions.reduce(

      (
        total,
        tx
      ) => {

        const value =
          Number(
            tx.value || 0
          );

        return (
          total + value
        );

      },

      0
    );

  // =====================================================
  // RETURN
  // =====================================================

  return {

    transactions,

    loading,

    realtimeActive,

    lastUpdated,

    incomingTransactions,

    outgoingTransactions,

    totalVolume,
  };
}