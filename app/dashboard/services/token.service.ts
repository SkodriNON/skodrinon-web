import {

  createPublicClient,
  http,
  formatUnits,

} from "viem";

import { sepolia }
from "viem/chains";

import { CONTRACTS }
from "../../lib/contracts";

const pairAbi = [

  {

    inputs: [],

    name:
      "getReserves",

    outputs: [

      {
        internalType:
          "uint112",

        name:
          "_reserve0",

        type:
          "uint112",
      },

      {
        internalType:
          "uint112",

        name:
          "_reserve1",

        type:
          "uint112",
      },

      {
        internalType:
          "uint32",

        name:
          "_blockTimestampLast",

        type:
          "uint32",
      },

    ],

    stateMutability:
      "view",

    type:
      "function",

  },

];

export async function getTokenPrice() {

  try {

    const client =
      createPublicClient({

        chain:
          sepolia,

        transport:
          http(
            process.env
              .NEXT_PUBLIC_RPC_URL
          ),

      });

    const reserves =
      await client.readContract({

        address:
          CONTRACTS.ethereum.LIQUIDITY,

        abi:
          pairAbi,

        functionName:
          "getReserves",

      });

    const reserveData =
      reserves as readonly [
        bigint,
        bigint,
        number
      ];

    // =====================================================
    // RESERVES
    // =====================================================

    const reserve0 =
      Number(
        formatUnits(
          reserveData[0],
          18
        )
      );

    const reserve1 =
      Number(
        formatUnits(
          reserveData[1],
          18
        )
      );

    if (
      reserve0 <= 0 ||
      reserve1 <= 0
    ) {

      return 0;

    }

    // =====================================================
    // TOKEN / ETH PRICE
    // =====================================================

    // reserve0 = NON
    // reserve1 = ETH

    const nonPerEth =

      reserve1 /
      reserve0;

    // =====================================================
    // ETH USD PRICE
    // =====================================================

    const ethRes =
      await fetch(

        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"

      );

    if (!ethRes.ok) {

      return 0;

    }

    const ethData =
      await ethRes.json();

    const ethPrice =
      Number(
        ethData
          ?.ethereum
          ?.usd || 0
      );

    if (!ethPrice) {

      return 0;

    }

    // =====================================================
    // FINAL TOKEN PRICE
    // =====================================================

    const finalPrice =

      nonPerEth *
      ethPrice;

    return Number(
      finalPrice.toFixed(8)
    );

  } catch (error) {

    console.error(
      "Token price error:",
      error
    );

    return 0;

  }
}