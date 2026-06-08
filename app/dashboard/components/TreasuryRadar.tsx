
"use client";

const treasuryAssets = [

  {
    asset: "ETH",
    allocation: "42%",
    value: "$4.2M",
    status: "Strong",
  },

  {
    asset: "USDC",
    allocation: "28%",
    value: "$2.1M",
    status: "Stable",
  },

  {
    asset: "SKNON",
    allocation: "18%",
    value: "$1.4M",
    status: "Growing",
  },

  {
    asset: "LP Positions",
    allocation: "12%",
    value: "$860K",
    status: "Yielding",
  },

];

export default function TreasuryRadar() {

  return (

    <div className="rounded-[32px] border border-emerald-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3">

            Institutional Treasury Layer

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-emerald-200 to-green-300 bg-clip-text text-transparent">

            Treasury Radar

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />

          <span className="text-sm font-semibold text-emerald-300">

            Treasury Healthy

          </span>

        </div>

      </div>

      {/* TREASURY GRID */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        {treasuryAssets.map((asset) => (

          <div

            key={asset.asset}

            className="rounded-3xl border border-emerald-500/10 bg-[#081222]/80 p-6 hover:border-emerald-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-5">

              <h4 className="text-2xl font-black">

                {asset.asset}

              </h4>

              <span className="text-xs text-gray-500">

                {asset.allocation}

              </span>

            </div>

            <h5 className="text-3xl font-black mb-4 text-emerald-300">

              {asset.value}

            </h5>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">

              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-xs text-emerald-300">

                {asset.status}

              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}