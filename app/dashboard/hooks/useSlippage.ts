export function useSlippage(
  amountOut?: bigint,
  slippage = 1
) {

  if (!amountOut) {

    return {
      minimumReceived:
        BigInt(0),
    };
  }

  const minimumReceived =

    amountOut -

    (
      amountOut *
      BigInt(slippage)
    ) / BigInt(100);

  return {
    minimumReceived,
  };
}