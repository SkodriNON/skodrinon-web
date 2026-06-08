import {
  mockPools,
} from "../dashboard/data/mockPool";

export function findBestPool() {

  const sortedPools =

    [...mockPools].sort(

      (a, b) => {

        const liquidityA =

          Number(a.reserveA) +
          Number(a.reserveB);

        const liquidityB =

          Number(b.reserveA) +
          Number(b.reserveB);

        return (
          liquidityB -
          liquidityA
        );
      }
    );

  return sortedPools[0];
}