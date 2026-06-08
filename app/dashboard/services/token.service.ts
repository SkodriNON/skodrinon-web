import {
  createPublicClient,
  http,
  formatUnits,
} from "viem";

import { sepolia } from "viem/chains";

import { CONTRACTS } from "../../lib/contracts";

const pairAbi = [
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export async function getTokenPrice() {
  try {
    const rpcUrl =
      process.env.NEXT_PUBLIC_RPC_URL;

    if (!rpcUrl) {
      return 0;
    }

    const client = createPublicClient({
      chain: sepolia,
      transport: http(rpcUrl),
    });

    const reserves =
      await client.readContract({
        address: CONTRACTS.ethereum.LIQUIDITY,
        abi: pairAbi,
        functionName: "getReserves",
      });

    const reserveData =
      reserves as readonly [
        bigint,
        bigint,
        number
      ];

    const reserve0 = Number(
      formatUnits(reserveData[0], 18)
    );

    const reserve1 = Number(
      formatUnits(reserveData[1], 18)
    );

    if (reserve0 <= 0 || reserve1 <= 0) {
      return 0;
    }

    const nonPerEth =
      reserve1 / reserve0;

    const ethPrice =
      Number(
        process.env
          .NEXT_PUBLIC_ETH_USD_FALLBACK || 0
      );

    if (!ethPrice) {
      return 0;
    }

    const finalPrice =
      nonPerEth * ethPrice;

    return Number(
      finalPrice.toFixed(8)
    );
  } catch {
    return 0;
  }
}