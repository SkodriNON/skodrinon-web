"use client";

import {
  useState,
} from "react";

import {
  WagmiProvider,
  createConfig,
  http,
} from "wagmi";

import { sepolia }
from "wagmi/chains";

import {
  injected,
  walletConnect,
} from "wagmi/connectors";

import {

  QueryClient,
  QueryClientProvider,

} from "@tanstack/react-query";

// =====================================================
// WAGMI CONFIG
// =====================================================

const config = createConfig({

  chains: [sepolia],

  connectors: [

    injected(),

    walletConnect({
      projectId:
        "demo",
    }),

  ],

  transports: {

  [sepolia.id]:

    http(

      process.env
        .NEXT_PUBLIC_RPC_URL,

      {

        timeout:
          12_000,

        retryCount:
          2,

        retryDelay:
          1000,

        batch: true,
      }
    ),

},

  ssr: true,
});

// =====================================================
// PROVIDERS
// =====================================================

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {

  // =====================================================
  // STABLE QUERY CLIENT
  // =====================================================

  const [
    queryClient,
  ] = useState(() =>
    new QueryClient({

      defaultOptions: {

        queries: {

          staleTime:
            1000 * 15,

          gcTime:
            1000 * 60 * 5,

          retry: 1,

          refetchOnWindowFocus:
            false,

          refetchOnReconnect:
            true,
        },
      },
    })
  );

  return (

    <WagmiProvider
      config={config}
    >

      <QueryClientProvider
        client={queryClient}
      >

        {children}

      </QueryClientProvider>

    </WagmiProvider>
  );
}