"use client";

import {

  useEffect,
  useState,

} from "react";

import {
  getEthPrice,
} from "../services/price.service";

export function useEthPrice() {

  const [

    ethPrice,
    setEthPrice,

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
            await getEthPrice();

          if (mounted) {

            setEthPrice(
              price
            );
          }

        } catch {

          if (mounted) {

            setEthPrice(0);
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

    ethPrice,

    loading,
  };
}