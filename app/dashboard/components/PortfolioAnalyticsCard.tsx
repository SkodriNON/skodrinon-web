
"use client";

export default function PortfolioAnalyticsCard() {

  const allocation = [

    {
      label: "SKNON",
      value: 62,
      color: "bg-blue-500",
    },

    {
      label: "ETH",
      value: 28,
      color: "bg-purple-500",
    },

    {
      label: "USDC",
      value: 10,
      color: "bg-green-500",
    },
  ];

  return (

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Portfolio Analytics

      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        <div className="rounded-2xl bg-[#081222] border border-blue-500/10 p-4">

          <p className="text-xs text-gray-400 mb-2">

            Portfolio Value

          </p>

          <h4 className="text-2xl font-black">

            $24,820

          </h4>

          <p className="text-green-400 text-sm mt-2">

            +12.4%

          </p>

        </div>

        <div className="rounded-2xl bg-[#081222] border border-blue-500/10 p-4">

          <p className="text-xs text-gray-400 mb-2">

            Total PNL

          </p>

          <h4 className="text-2xl font-black">

            +$4,280

          </h4>

          <p className="text-green-400 text-sm mt-2">

            Profitable

          </p>

        </div>

        <div className="rounded-2xl bg-[#081222] border border-blue-500/10 p-4">

          <p className="text-xs text-gray-400 mb-2">

            Best Asset

          </p>

          <h4 className="text-2xl font-black">

            SKNON

          </h4>

          <p className="text-blue-400 text-sm mt-2">

            +31.2%

          </p>

        </div>

      </div>

      <div className="rounded-2xl bg-[#081222] border border-blue-500/10 p-5">

        <div className="flex items-center justify-between mb-4">

          <h4 className="font-bold">

            Allocation

          </h4>

          <p className="text-sm text-gray-400">

            Diversified

          </p>

        </div>

        <div className="space-y-4">

          {allocation.map((asset) => (

            <div key={asset.label}>

              <div className="flex items-center justify-between mb-2">

                <p className="text-sm">

                  {asset.label}

                </p>

                <p className="text-sm text-gray-400">

                  {asset.value}%

                </p>

              </div>

              <div className="h-3 rounded-full bg-[#07101f] overflow-hidden">

                <div

                  className={`h-full rounded-full ${asset.color}`}

                  style={{
                    width: `${asset.value}%`,
                  }}

                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}