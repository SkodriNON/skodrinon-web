type HoldingsCardProps = {
  ethBalance: any;
  tokenBalance: any;
  ethPrice: number;
  tokenPrice: number;
};

export default function HoldingsCard({
  ethBalance,
  tokenBalance,
  ethPrice,
  tokenPrice,
}: HoldingsCardProps) {

  const ethAmount =
    ethBalance
      ? Number(ethBalance.value) / 1e18
      : 0;

  const tokenAmount =
    tokenBalance
      ? Number(tokenBalance) / 1e18
      : 0;

  const ethUsd =
    ethAmount * ethPrice;

  return (
    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7">

      <h3 className="text-2xl sm:text-xlfont-bold mb-8">
        Holdings
      </h3>

      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <div>
            <p className="font-semibold">
              Ethereum
            </p>

            <p className="text-gray-400 text-sm">
              {ethAmount.toFixed(4)} ETH
            </p>
          </div>

          <p className="text-blue-400 font-bold">
            ${ethUsd.toFixed(2)}
          </p>

        </div>

        <div className="flex items-center justify-between">

          <div>
            <p className="font-semibold">
              SKNON
            </p>

            <p className="text-gray-400 text-sm">
              {tokenAmount.toFixed(2)} SKNON
            </p>
          </div>

          <p className="text-purple-400 font-bold">
           ${(tokenAmount * tokenPrice).toFixed(2)}
          </p>

        </div>

      </div>

    </div>
  );
}