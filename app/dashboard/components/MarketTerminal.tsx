
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

    <div className="rounded-[32px] border border-orange-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-orange-400 mb-3">

            Institutional Market Intelligence

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-orange-200 to-yellow-300 bg-clip-text text-transparent">

            Market Terminal

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />

          <span className="text-sm font-semibold text-orange-300">

            Markets Live

          </span>

        </div>

      </div>

      {/* MARKET GRID */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {markets.map((market) => (

          <div

            key={market.pair}

            className="rounded-3xl border border-orange-500/10 bg-[#081222]/80 p-6 hover:border-orange-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-6">

              <h4 className="text-2xl font-black">

                {market.pair}

              </h4>

              <div className={`text-sm font-semibold ${
                market.positive
                  ? "text-green-400"
                  : "text-red-400"
              }`}>

                {market.change}

              </div>

            </div>

            <h5 className="text-4xl font-black mb-5 text-white">

              {market.price}

            </h5>

            <div className="flex items-center justify-between text-sm text-gray-400">

              <span>24H Volume</span>

              <span className="text-white">

                {market.volume}

              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
