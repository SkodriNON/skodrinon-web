import {
  mockPools,
} from "../data/mockPool";

export function useAMMQuote(

  amountIn: bigint,

  selectedPool:
    string

) {

  if (
    amountIn <= BigInt(0)
  ) {

    return {
      amountOut:
        BigInt(0),
    };
  }

  const pool =

    mockPools.find(

      (pool) =>

        pool.id ===
        selectedPool

    ) ||

    mockPools[0];

  const reserveIn =
    pool.reserveA;

  const reserveOut =
    pool.reserveB;

  const amountInWithFee =

    amountIn *
    BigInt(997);

  const numerator =

    amountInWithFee *
    reserveOut;

  const denominator =

    reserveIn *
    BigInt(1000) +

    amountInWithFee;

  const amountOut =

  numerator /
  denominator;

const priceImpact =

  Number(amountIn) /

  Number(reserveIn) *

  100;

  const riskLevel =

  priceImpact > 15

    ? "HIGH"

    : priceImpact > 5

    ? "MEDIUM"

    : "LOW";

  const whaleTrade =

  amountIn >

  reserveIn /
  BigInt(20);

return {

  amountOut,

  priceImpact,

  riskLevel,

  whaleTrade,
};
}