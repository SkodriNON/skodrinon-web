export default function AnalyticsCard() {

  // =====================================================
  // MARKET DATA
  // =====================================================

  const protocolHealth =
    96;

  const volatility =
    18;

  const aiPrediction =
    "Bullish";

  // =====================================================
  // METRICS
  // =====================================================

  const metrics = [

    [
      "Total Volume",
      "$8.4M",
      "text-blue-400",
    ],

    [
      "Transactions",
      "14,245",
      "text-green-400",
    ],

    [
      "Active Wallets",
      "4,820",
      "text-purple-400",
    ],

    [
      "Liquidity Flow",
      "+18%",
      "text-cyan-400",
    ],
  ];

  // =====================================================
  // MARKET FEED
  // =====================================================

  const marketFeed = [

    [

      "Liquidity Expansion",

      "Realtime liquidity inflows increased across protocol pools.",

      "text-cyan-400",
    ],

    [

      "Treasury Performance",

      "Treasury reserve efficiency remains above institutional thresholds.",

      "text-green-400",
    ],

    [

      "Volatility Stable",

      "Protocol volatility remains within acceptable governance limits.",

      "text-blue-400",
    ],

    [

      "AI Market Prediction",

      "AI engine forecasts continued ecosystem growth momentum.",

      "text-purple-400",
    ],
  ];

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <div className="rounded-[32px] border border-blue-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_45%)]" />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">

              Institutional Analytics Engine

            </p>

            <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

              Market Intelligence

            </h3>

          </div>

          <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-[0_0_25px_rgba(74,222,128,0.8)]" />

        </div>

        {/* AI OVERVIEW */}

        <div className="rounded-3xl border border-cyan-500/10 bg-[#081222] p-6 mb-8">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">

                AI Market Prediction

              </p>

              <h4 className="text-5xl font-black text-cyan-300">

                {aiPrediction}

              </h4>

            </div>

            <div className="text-right">

              <p className="text-green-400 text-sm mb-2">

                Protocol Healthy

              </p>

              <p className="text-xs text-gray-500">

                Realtime monitoring active

              </p>

            </div>

          </div>

          {/* HEALTH BAR */}

          <div className="mb-4">

            <div className="flex items-center justify-between mb-2">

              <span className="text-xs text-gray-500">

                Protocol Health

              </span>

              <span className="text-xs text-cyan-300">

                {protocolHealth}%

              </span>

            </div>

            <div className="w-full h-4 rounded-full bg-[#020617] overflow-hidden">

              <div

                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"

                style={{
                  width:
                    `${protocolHealth}%`,
                }}

              />

            </div>

          </div>

          {/* VOLATILITY */}

          <div>

            <div className="flex items-center justify-between mb-2">

              <span className="text-xs text-gray-500">

                Volatility Index

              </span>

              <span className="text-xs text-green-400">

                Low Risk

              </span>

            </div>

            <div className="w-full h-4 rounded-full bg-[#020617] overflow-hidden">

              <div

                className="h-full bg-gradient-to-r from-green-500 to-cyan-500"

                style={{
                  width:
                    `${volatility}%`,
                }}

              />

            </div>

          </div>

        </div>

        {/* METRICS */}

        <div className="grid grid-cols-2 gap-4 mb-8">

          {metrics.map(

            (

              [

                label,
                value,
                color,

              ],

              index

            ) => (

              <div

                key={index}

                className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5"

              >

                <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-3">

                  {label}

                </p>

                <h4 className={`text-3xl font-black ${color}`}>

                  {value}

                </h4>

              </div>
            )
          )}

        </div>

        {/* MARKET FEED */}

        <div className="space-y-4">

          {marketFeed.map(

            (

              [

                title,
                description,
                color,

              ],

              index

            ) => (

              <div

                key={index}

                className="rounded-2xl border border-white/5 bg-[#081222] p-5"

              >

                <div className="flex items-center justify-between mb-3">

                  <h4 className={`text-lg font-bold ${color}`}>

                    {title}

                  </h4>

                  <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${color.replace("text", "bg")}`} />

                </div>

                <p className="text-gray-400 text-sm leading-7">

                  {description}

                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}