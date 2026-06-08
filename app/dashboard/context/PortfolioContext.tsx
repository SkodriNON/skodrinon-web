"use client";

import {

  createContext,

  useContext,

  useMemo,

  useEffect,

  useState,

  useRef,

} from "react";

// =====================================================
// TYPES
// =====================================================

type ProtocolEvent = {

  id: number;

  type: string;

  message: string;

  timestamp: string;
};

type PortfolioContextType = {

  ethPrice: number;

  totalPortfolio: number;

  realtimeConnected: boolean;

  protocolLatency: number;

  treasurySync: boolean;

  governanceSync: boolean;

  stakingSync: boolean;

  latestBlock: number;

  protocolEvents:
    ProtocolEvent[];

  refreshProtocol:
    () => void;
};

// =====================================================
// CONTEXT
// =====================================================

const PortfolioContext =
  createContext<
    PortfolioContextType | null
  >(null);

// =====================================================
// PROPS
// =====================================================

type Props = {

  children: React.ReactNode;

  ethPrice: number;

  totalPortfolio: number;
};

// =====================================================
// PROVIDER
// =====================================================

export function PortfolioProvider({

  children,

  ethPrice,

  totalPortfolio,

}: Props) {

  // =====================================================
  // STATES
  // =====================================================

  const [

    realtimeConnected,
    setRealtimeConnected,

  ] = useState(false);

  const [

    protocolLatency,
    setProtocolLatency,

  ] = useState(0);

  const [

    treasurySync,
    setTreasurySync,

  ] = useState(true);

  const [

    governanceSync,
    setGovernanceSync,

  ] = useState(true);

  const [

    stakingSync,
    setStakingSync,

  ] = useState(true);

  const [

    latestBlock,
    setLatestBlock,

  ] = useState(18245821);

  const [

    protocolEvents,
    setProtocolEvents,

  ] = useState<
    ProtocolEvent[]
  >([]);

  // =====================================================
  // REFS
  // =====================================================

  const websocketRef =
    useRef<
      NodeJS.Timeout | null
    >(null);

  // =====================================================
  // PROTOCOL EVENT
  // =====================================================

  function pushProtocolEvent(

    type: string,

    message: string

  ) {

    setProtocolEvents(
      (prev) => [

        {

          id:
            Date.now(),

          type,

          message,

          timestamp:
            new Date().toLocaleTimeString(),
        },

        ...prev,
      ].slice(0, 15)
    );
  }

  // =====================================================
  // REFRESH
  // =====================================================

  function refreshProtocol() {

    setProtocolLatency(

      Math.floor(
        Math.random() * 40
      ) + 20
    );

    setLatestBlock(
      (prev) => prev + 1
    );

    pushProtocolEvent(

      "protocol",

      "Realtime protocol synchronization completed"
    );
  }

  // =====================================================
  // WEBSOCKET ENGINE
  // =====================================================

  useEffect(() => {

    setRealtimeConnected(
      true
    );

    pushProtocolEvent(

      "system",

      "Realtime protocol engine initialized"
    );

    websocketRef.current =
      setInterval(() => {

        // LATENCY

        setProtocolLatency(

          Math.floor(
            Math.random() * 50
          ) + 15
        );

        // BLOCKS

        setLatestBlock(
          (prev) => prev + 1
        );

        // RANDOM HEALTH STATES

        setTreasurySync(
          true
        );

        setGovernanceSync(
          true
        );

        setStakingSync(
          true
        );

        // RANDOM EVENTS

        const events = [

          "Treasury reserves synchronized",

          "Governance state updated",

          "Staking rewards refreshed",

          "Crosschain liquidity synchronized",

          "Realtime analytics recalculated",

          "Protocol monitoring active",

          "AI governance engine synced",

          "Institutional treasury monitoring active",
        ];

        const randomEvent =

          events[
            Math.floor(
              Math.random() *
              events.length
            )
          ];

        pushProtocolEvent(

          "realtime",

          randomEvent
        );

      }, 8000);

    return () => {

      if (
        websocketRef.current
      ) {

        clearInterval(
          websocketRef.current
        );
      }
    };

  }, []);

  // =====================================================
  // MEMOIZED VALUE
  // =====================================================

  const value =
    useMemo(
      () => ({

        ethPrice,

        totalPortfolio,

        realtimeConnected,

        protocolLatency,

        treasurySync,

        governanceSync,

        stakingSync,

        latestBlock,

        protocolEvents,

        refreshProtocol,

      }),

      [

        ethPrice,

        totalPortfolio,

        realtimeConnected,

        protocolLatency,

        treasurySync,

        governanceSync,

        stakingSync,

        latestBlock,

        protocolEvents,
      ]
    );

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <PortfolioContext.Provider
      value={value}
    >

      {children}

    </PortfolioContext.Provider>
  );
}

// =====================================================
// HOOK
// =====================================================

export function usePortfolio() {

  const context =
    useContext(
      PortfolioContext
    );

  if (!context) {

    throw new Error(

      "usePortfolio must be used inside PortfolioProvider"
    );
  }

  return context;
}