
"use client";

const predictions = [

  {
    title: "ETH Momentum",
    prediction: "Bullish breakout expected within 48h.",
    confidence: "94%",
    color: "from-green-500 to-emerald-400",
  },

  {
    title: "Treasury Growth",
    prediction: "Treasury reserves projected to expand +18%.",
    confidence: "91%",
    color: "from-cyan-500 to-blue-400",
  },

  {
    title: "Governance Activity",
    prediction: "DAO participation trend accelerating.",
    confidence: "88%",
    color: "from-violet-500 to-fuchsia-400",
  },

  {
    title: "Liquidity Forecast",
    prediction: "Crosschain liquidity inflow detected.",
    confidence: "96%",
    color: "from-orange-500 to-yellow-400",
  },

];

export default function AIPredictions() {

  return (

    <div className="rounded-[32px] border border-fuchsia-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_35%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400 mb-3">

            Predictive Intelligence Layer

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-fuchsia-200 to-pink-300 bg-clip-text text-transparent">

            AI Prediction Engine

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-fuchsia-400 animate-pulse" />

          <span className="text-sm font-semibold text-fuchsia-300">

            Forecasting Active

          </span>

        </div>

      </div>

      {/* PREDICTIONS */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {predictions.map((prediction) => (

          <div

            key={prediction.title}

            className="rounded-3xl border border-fuchsia-500/10 bg-[#081222]/80 p-6 hover:border-fuchsia-500/30 transition-all duration-300"

          >

            <div className={`w-full h-1 rounded-full bg-gradient-to-r ${prediction.color} mb-6`} />

            <div className="flex items-center justify-between mb-5">

              <h4 className="text-2xl font-black">

                {prediction.title}

              </h4>

              <span className="text-sm text-fuchsia-300 font-semibold">

                {prediction.confidence}

              </span>

            </div>

            <p className="text-gray-400 leading-relaxed">

              {prediction.prediction}

            </p>

          </div>
        ))}

      </div>

    </div>
  );
}