import {
  useState,
} from "react";

import {
  mockPools,
} from "../data/mockPool";

export function useLiquidity() {

  const [
    reserveETH,
    setReserveETH,
  ] = useState(
    mockPools[0].reserveA
  );

  const [
    reserveSKNON,
    setReserveSKNON,
  ] = useState(
    mockPools[0].reserveB
  );

  const [
    lpBalance,
    setLpBalance,
  ] = useState(
    BigInt(0)
  );

const [
  protocolFees,
  setProtocolFees,
] = useState(
  BigInt(0)
);

const [
  totalVolume,
  setTotalVolume,
] = useState(
  BigInt(0)
);

const [
  selectedPool,
  setSelectedPool,
] = useState(
  "ETH-SKNON"
);

  function addLiquidity(

    ethAmount:
      bigint,

    sknonAmount:
      bigint

  ) {

    setReserveETH(

      (prev) =>

        prev +
        ethAmount
    );

    setReserveSKNON(

      (prev) =>

        prev +
        sknonAmount
    );

    setLpBalance(

      (prev) =>

        prev +
        ethAmount +
        sknonAmount
    );

    return {

      success: true,
    };
  }

  function removeLiquidity(

    ethAmount:
      bigint,

    sknonAmount:
      bigint

  ) {

    setReserveETH(

      (prev) =>

        prev >
        ethAmount

          ? prev -
            ethAmount

          : BigInt(0)
    );

    setReserveSKNON(

      (prev) =>

        prev >
        sknonAmount

          ? prev -
            sknonAmount

          : BigInt(0)
    );

    setLpBalance(

      (prev) => {

        const removeAmount =

          ethAmount +
          sknonAmount;

        return prev >
          removeAmount

          ? prev -
            removeAmount

          : BigInt(0);
      }
    );

    return {

      success: true,
    };
  }

  function executeSwap(


  ethIn:
    bigint,

  sknonOut:
    bigint

) {

  setTotalVolume(

  (prev) =>

    prev +
    ethIn
);

  setReserveETH(

    (prev) =>

      prev +
      ethIn
  );

  setReserveSKNON(

    (prev) =>

      prev >
      sknonOut

        ? prev -
          sknonOut

        : BigInt(0)
  );

  const fee =

  ethIn /
  BigInt(200);

setLpBalance(

  (prev) =>

    prev +
    fee
);

const protocolFee =

  fee /
  BigInt(2);

setProtocolFees(

  (prev) =>

    prev +
    protocolFee
);

  return {

    success: true,
  };
}

  const totalLiquidity =

    reserveETH +
    reserveSKNON;

  return {

    reserveETH,

    reserveSKNON,

    lpBalance,

    protocolFees,

    totalVolume,

    totalLiquidity,

    addLiquidity,

    removeLiquidity,

    executeSwap,

  };
}