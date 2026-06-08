"use client";

const markets = [
  {
    pair: "ETH / USD",
    price: "$3,842",
    change: "+4.2%",
    volume: "$18.4B",
    positive: true,
  },
  {
    pair: "BTC / USD",
    price: "$112,400",
    change: "+2.8%",
    volume: "$31.2B",
    positive: true,
  },
  {
    pair: "SKNON / ETH",
    price: "0.00042",
    change: "+18.6%",
    volume: "$2.1M",
    positive: true,
  },
  {
    pair: "ARB / USD",
    price: "$1.84",
    change: "-1.4%",
    volume: "$980M",
    positive: false,
  },
];

export default function MarketTerminal() {
  return (
    <div className="rounded-xl border border-orange-500/10 bg-[#07101f]/80 p-4">

      <div className="mb-4 flex items-center justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-orange-400">
            Markets
          </p>

          <h3 className="text-lg font-semibold">
            Market Terminal
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-orange-300">
          <span className="h-2 w-2 rounded-full bg-orange-400" />
          Live
        </div>

      </div>

      <div className="overflow-hidden rounded-lg border border-orange-500/10">

        <table className="w-full text-sm">

          <thead>

            <tr className="border-b border-orange-500/10 bg-[#081222]">

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Pair
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Price
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                24H Volume
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Change
              </th>

            </tr>

          </thead>

          <tbody>

            {markets.map((market) => (

              <tr
                key={market.pair}
                className="border-b border-orange-500/5 hover:bg-[#081222]/60"
              >

                <td className="px-3 py-2 font-medium">
                  {market.pair}
                </td>

                <td className="px-3 py-2">
                  {market.price}
                </td>

                <td className="px-3 py-2">
                  {market.volume}
                </td>

                <td
                  className={`px-3 py-2 text-right font-semibold ${
                    market.positive
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {market.change}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}