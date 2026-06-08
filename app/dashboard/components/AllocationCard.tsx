type AllocationCardProps = {
  ethBalance: any;
  tokenBalance: any;
  ethPrice: number;
};

export default function AllocationCard({
  ethBalance,
  tokenBalance,
  ethPrice,
}: AllocationCardProps) {

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

  const tokenUsd =
    tokenAmount * 0;

  const total =
    ethUsd + tokenUsd;

  const ethPercent =
    total > 0
      ? ((ethUsd / total) * 100).toFixed(1)
      : "0";

  const tokenPercent =
    total > 0
      ? ((tokenUsd / total) * 100).toFixed(1)
      : "0";

  return (
    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-8">

      <h3 className="text-xl sm:text-2xl lg:text-xlfont-bold">
        Portfolio Allocation
      </h3>

      <div className="w-40 h-40 sm:w-56 sm:h-56 mx-auto rounded-full border-[18px] border-blue-500/20 flex items-center justify-center mb-10">

        <div className="text-center">

          <p className="text-gray-400 mb-2">
            Total
          </p>

          <h4 className="text-xl sm:text-2xl lg:text-xlfont-bold">
            ${total.toFixed(2)}
          </h4>

        </div>

      </div>

      <div className="space-y-5 text-base sm:text-lg">

        <div className="flex justify-between">
          <span>ETH</span>

          <span>
            {ethPercent}%
          </span>
        </div>

        <div className="flex justify-between">
          <span>SKNON</span>

          <span>
            {tokenPercent}%
          </span>
        </div>

      </div>

    </div>
  );
}