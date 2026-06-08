import {

  memo,
  useMemo,

} from "react";

import {

  formatToken,
  formatUsd,
  formatPercent,

} from "../utils/format";

type Props = {

  totalPortfolio: number;

  stakedTokens: number;

  stakingValue: number;

  rewards: number;

  apr: number;

  amountsOut:
    readonly bigint[]
    | undefined;

  totalLiquidity: number;

  proposals: {
    participation: number;
  }[];

  pnl: number;

  pnlPercent: number;

  totalValueLocked: number;

  protocolHealth: number;

  growthMultiplier: number;

  roi: number;

  unlockCountdown?: string;

  unlocked?: boolean;

  stakingShare?: number;

  yearlyRewards?: number;

  monthlyRewards?: number;

  apy?: number;
};

function DashboardStatsComponent({

  totalPortfolio,

  stakedTokens,

  stakingValue,

  rewards,

  apr,

  amountsOut,

  totalLiquidity,

  proposals,

  pnl,

  pnlPercent,

  totalValueLocked,

  protocolHealth,

  growthMultiplier,

  roi,

  unlockCountdown,

  unlocked,

  stakingShare,

  yearlyRewards,

  monthlyRewards,

  apy,

}: Props) {

  // =====================================================
  // MEMOIZED STATS
  // =====================================================

  const stats = useMemo(() => [

    [

      formatUsd(
        totalPortfolio
      ),

      "Total Portfolio",
    ],

    [

      formatToken(
        stakedTokens
      ),

      "Staked $SKNON",
    ],

    [

      formatUsd(
        stakingValue
      ),

      "Staking Value",
    ],

    [

      formatToken(
        rewards
      ),

      "Earned Rewards",
    ],

    [

      formatPercent(
        apr
      ),

      "APR",
    ],

    [

      apy
        ? formatPercent(
            apy
          )
        : "0%",

      "APY",
    ],

    [

      yearlyRewards
        ? formatToken(
            yearlyRewards
          )
        : "0",

      "Yearly Rewards",
    ],

    [

      monthlyRewards
        ? formatToken(
            monthlyRewards
          )
        : "0",

      "Monthly Rewards",
    ],

    [

      unlocked

        ? "Unlocked"

        : unlockCountdown ||
          "No Lock",

      "Unlock Status",
    ],

    [

      stakingShare

        ? `${(
            stakingShare *
            100
          ).toFixed(4)}%`

        : "0%",

      "Pool Share",
    ],

    [

      amountsOut

        ? formatToken(

            Number(
              amountsOut[1]
            )
          )

        : "0",

      "Swap Quote",
    ],

    [

      formatToken(
        totalLiquidity
      ),

      "Liquidity",
    ],

    [

      proposals.length,

      "Live Proposals",
    ],

    [

      proposals.length > 0

        ? `${proposals[0]
            .participation}%`

        : "0%",

      "Governance Participation",
    ],

    [

      formatUsd(
        pnl
      ),

      "PnL",
    ],

    [

      formatPercent(
        pnlPercent
      ),

      "PnL %",
    ],

    [

      formatUsd(
        totalValueLocked
      ),

      "TVL",
    ],

    [

      `${protocolHealth.toFixed(
        0
      )}%`,

      "Protocol Health",
    ],

    [

      `${formatToken(
        growthMultiplier
      )}x`,

      "Growth Multiple",
    ],

  ], [

    totalPortfolio,

    stakedTokens,

    stakingValue,

    rewards,

    apr,

    amountsOut,

    totalLiquidity,

    proposals,

    pnl,

    pnlPercent,

    totalValueLocked,

    protocolHealth,

    growthMultiplier,

    unlockCountdown,

    unlocked,

    stakingShare,

    yearlyRewards,

    monthlyRewards,

    apy,
  ]);

  // =====================================================
  // RENDER
  // =====================================================

   return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">

      {stats.map(
        ([value, label]) => (

          <div

            key={String(label)}

            className="group relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-[#0B1220]/95 to-[#07101f]/95 backdrop-blur-2xl p-5 sm:p-6 transition-all duration-300 hover:border-cyan-400/20 hover:translate-y-[-2px] hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]"

          >

            {/* TOP GLOW */}

            <div className="pointer-events-none absolute top-[-80px] right-[-80px] h-[160px] w-[160px] rounded-full bg-cyan-500/5 blur-[80px]" />

            {/* LABEL */}

            <div className="relative z-10 flex items-center justify-between mb-6">

              <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">

                {label}

              </p>

              <div className="w-2 h-2 rounded-full bg-cyan-400/70 group-hover:bg-cyan-300 transition-all duration-300" />

            </div>

            {/* VALUE */}

            <div className="relative z-10">

              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white break-words leading-tight">

                {value}

              </h3>

            </div>

            {/* ROI */}

            <div className="relative z-10 mt-6 flex items-center justify-between">

              <div>

                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-2">

                  Performance

                </p>

                <p className="text-lg font-bold text-emerald-400">

                  {formatPercent(roi)}

                </p>

              </div>

              <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/5 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">

                Live

              </div>

            </div>

          </div>
        )
      )}

    </div>
  );
}

const DashboardStats =
  memo(
    DashboardStatsComponent
  );

export default DashboardStats;