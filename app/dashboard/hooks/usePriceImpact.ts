export function usePriceImpact(

  amountIn?: bigint,

  amountOut?: bigint

) {

  if (

    !amountIn ||

    !amountOut ||

    amountIn === BigInt(0)

  ) {

    return {
      priceImpact: "0.00",
    };
  }

  const impact =

    Number(amountOut) /
    Number(amountIn);

  const percentage =

    Math.abs(
      (1 - impact) * 100
    );

  return {

    priceImpact:
      percentage.toFixed(2),
  };
}