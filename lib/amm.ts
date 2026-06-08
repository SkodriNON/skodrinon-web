export function calculateSwapOutput(

  amountIn: bigint,

  reserveIn: bigint,

  reserveOut: bigint,

  fee = BigInt(3)

) {

  if (

    amountIn <= BigInt(0) ||

    reserveIn <= BigInt(0) ||

    reserveOut <= BigInt(0)

  ) {

    return BigInt(0);
  }

  const amountInWithFee =

    amountIn *
    (BigInt(1000) - fee);

  const numerator =

    amountInWithFee *
    reserveOut;

  const denominator =

    reserveIn *
    BigInt(1000) +

    amountInWithFee;

  return (
    numerator /
    denominator
  );
}