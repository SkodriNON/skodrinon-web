type TreasuryCardProps = {

  totalPortfolio: number;

  roi: number;
};

export default function TreasuryCard({

  totalPortfolio,

  roi,

}: TreasuryCardProps) {

  // =====================================================
  // TREASURY LOGIC
  // =====================================================

  const treasuryReserves =
    totalPortfolio * 0.42;

  const insuranceFund =
    totalPortfolio * 0.18;

  const ecosystemFund =
    totalPortfolio * 0.27;

  const protocolRunway =
    totalPortfolio > 0

      ? (
          totalPortfolio /
          85000
        ).toFixed(1)

      : "0";

  const treasuryHealth =

    roi >= 20

      ? "Excellent"

      : roi >= 10

      ? "Healthy"

      : "Moderate";

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-6 lg:p-7 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_45%)]" />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-gray-500 text-sm uppercase tracking-[0.25em] mb-3">

              Treasury Terminal

            </p>

            <h3 className="text-xlsm:text-xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">

              ${totalPortfolio.toFixed(2)}

            </h3>

          </div>

          <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

        </div>

        {/* ROI */}

        <div className="mb-8 rounded-2xl border border-green-500/10 bg-green-500/5 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">

                Treasury ROI

              </p>

              <h4 className="text-xlfont-black text-green-400">

                {roi.toFixed(2)}%

              </h4>

            </div>

            <div className="text-right">

              <p className="text-xs text-gray-500 mb-2">

                Treasury Health

              </p>

              <p className="text-lg font-bold text-cyan-300">

                {treasuryHealth}

              </p>

            </div>

          </div>

        </div>

        {/* METRICS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

          {/* RESERVES */}

          <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">

              Treasury Reserves

            </p>

            <h4 className="text-2xl font-bold text-blue-400 mb-2">

              ${treasuryReserves.toFixed(2)}

            </h4>

            <p className="text-xs text-gray-500">

              Active protocol reserves

            </p>

          </div>

          {/* INSURANCE */}

          <div className="rounded-2xl border border-purple-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">

              Insurance Fund

            </p>

            <h4 className="text-2xl font-bold text-purple-400 mb-2">

              ${insuranceFund.toFixed(2)}

            </h4>

            <p className="text-xs text-gray-500">

              Emergency protection layer

            </p>

          </div>

          {/* ECOSYSTEM */}

          <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">

              Ecosystem Fund

            </p>

            <h4 className="text-2xl font-bold text-cyan-300 mb-2">

              ${ecosystemFund.toFixed(2)}

            </h4>

            <p className="text-xs text-gray-500">

              Growth & expansion capital

            </p>

          </div>

          {/* RUNWAY */}

          <div className="rounded-2xl border border-green-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">

              Protocol Runway

            </p>

            <h4 className="text-2xl font-bold text-green-400 mb-2">

              {protocolRunway} Months

            </h4>

            <p className="text-xs text-gray-500">

              Treasury sustainability

            </p>

          </div>

        </div>

        {/* STATUS BAR */}

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5">

          <div className="flex items-center justify-between mb-4">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">

              Protocol Reserve Allocation

            </p>

            <p className="text-xs text-cyan-300">

              Live Treasury Sync

            </p>

          </div>

          {/* BAR */}

          <div className="w-full h-4 rounded-full bg-[#020617] overflow-hidden flex">

            <div className="h-full bg-blue-500 w-[42%]" />

            <div className="h-full bg-purple-500 w-[18%]" />

            <div className="h-full bg-cyan-400 w-[27%]" />

            <div className="h-full bg-green-400 w-[13%]" />

          </div>

          {/* LEGEND */}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 text-xs">

            <div className="flex items-center gap-2">

              <div className="w-3 h-3 rounded-full bg-blue-500" />

              <span className="text-gray-400">

                Reserves

              </span>

            </div>

            <div className="flex items-center gap-2">

              <div className="w-3 h-3 rounded-full bg-purple-500" />

              <span className="text-gray-400">

                Insurance

              </span>

            </div>

            <div className="flex items-center gap-2">

              <div className="w-3 h-3 rounded-full bg-cyan-400" />

              <span className="text-gray-400">

                Ecosystem

              </span>

            </div>

            <div className="flex items-center gap-2">

              <div className="w-3 h-3 rounded-full bg-green-400" />

              <span className="text-gray-400">

                Yield

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}