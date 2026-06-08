"use client";

type Props = {

  treasuryHealth: string;

  protocolHealth: number;

  aiProtocolScore: number;

  stakingUtilization: number;

  liquidityHealth: number;

  governanceHealth: number;
};

export default function AIInsights({

  treasuryHealth,

  protocolHealth,

  aiProtocolScore,

  stakingUtilization,

  liquidityHealth,

  governanceHealth,

}: Props) {

  function generateInsights() {

    const insights = [];

    // =====================================================
    // TREASURY
    // =====================================================

    if (
      treasuryHealth ===
      "Optimal"
    ) {

      insights.push({

        title:
          "Treasury Stable",

        description:
          "Treasury reserves remain highly sustainable with strong backing ratios.",

        color:
          "text-green-400",
      });

    } else {

      insights.push({

        title:
          "Treasury Monitoring",

        description:
          "Treasury sustainability score requires monitoring and reserve optimization.",

        color:
          "text-yellow-400",
      });
    }

    // =====================================================
    // STAKING
    // =====================================================

    if (
      stakingUtilization > 60
    ) {

      insights.push({

        title:
          "Strong Staking Activity",

        description:
          "Protocol staking participation remains highly active across ecosystem positions.",

        color:
          "text-cyan-400",
      });

    } else {

      insights.push({

        title:
          "Low Staking Participation",

        description:
          "AI recommends additional staking incentive optimization.",

        color:
          "text-red-400",
      });
    }

    // =====================================================
    // LIQUIDITY
    // =====================================================

    if (
      liquidityHealth > 70
    ) {

      insights.push({

        title:
          "Liquidity Healthy",

        description:
          "Liquidity coverage remains balanced with healthy protocol reserves.",

        color:
          "text-blue-400",
      });

    } else {

      insights.push({

        title:
          "Liquidity Risk",

        description:
          "Liquidity coverage is decreasing below recommended thresholds.",

        color:
          "text-orange-400",
      });
    }

    // =====================================================
    // GOVERNANCE
    // =====================================================

    if (
      governanceHealth > 80
    ) {

      insights.push({

        title:
          "Governance Active",

        description:
          "DAO governance participation remains highly decentralized and active.",

        color:
          "text-purple-400",
      });

    } else {

      insights.push({

        title:
          "Governance Weakness",

        description:
          "Governance engagement levels are below optimal participation thresholds.",

        color:
          "text-pink-400",
      });
    }

    return insights;
  }

  const insights =
    generateInsights();

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-5 sm:p-7">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-sm text-cyan-400 mb-2">

            AI Protocol Engine

          </p>

          <h3 className="text-2xl sm:text-3xl font-bold">

            AI Insights

          </h3>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

          <p className="text-xs text-gray-400 mb-1">

            AI Score

          </p>

          <h4 className="text-2xl font-bold text-cyan-300">

            {aiProtocolScore.toFixed(0)}%

          </h4>

        </div>

      </div>

      {/* PROTOCOL HEALTH */}

      <div className="mb-8">

        <div className="flex items-center justify-between mb-3">

          <span className="text-gray-400 text-sm">

            Protocol Health

          </span>

          <span className="text-cyan-300 text-sm">

            {protocolHealth.toFixed(0)}%

          </span>

        </div>

        <div className="w-full h-4 rounded-full bg-[#0b1728] overflow-hidden">

          <div

            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"

            style={{
              width:
                `${protocolHealth}%`,
            }}

          />

        </div>

      </div>

      {/* INSIGHTS */}

      <div className="space-y-4">

        {insights.map(
          (
            insight,
            index
          ) => (

            <div

              key={index}

              className="rounded-2xl border border-white/5 bg-[#0b1728] p-5"

            >

              <h4 className={`text-lg font-bold mb-2 ${insight.color}`}>

                {insight.title}

              </h4>

              <p className="text-gray-400 text-sm leading-7">

                {insight.description}

              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}