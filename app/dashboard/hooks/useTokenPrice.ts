"use client";

import {

  useEffect,
  useState,

} from "react";

import {
  getTokenPrice,
} from "../services/token.service";

export function useTokenPrice() {

  const [

    tokenPrice,
    setTokenPrice,

  ] = useState(0);

  const [

    loading,
    setLoading,

  ] = useState(true);

  // =====================================================
  // LOAD PRICE
  // =====================================================

  useEffect(() => {

    let mounted = true;

    const loadPrice =
      async () => {

        try {

          const price =
            await getTokenPrice();

          if (mounted) {

            setTokenPrice(
              price
            );
          }

        } catch {

          if (mounted) {

            setTokenPrice(0);
          }

        } finally {

          if (mounted) {

            setLoading(false);
          }
        }
      };

    // INITIAL LOAD

    loadPrice();

    // LIVE REFRESH

    const interval =
      setInterval(
        loadPrice,
        30000
      );

    return () => {

      mounted = false;

      clearInterval(
        interval
      );
    };

  }, []);

  return {

    tokenPrice,

    loading,
  };
}