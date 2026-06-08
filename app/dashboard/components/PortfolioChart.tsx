"use client";

import {
  memo,
  useMemo,
} from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type ChartPoint = {
  time: string;
  value: number;
};

type PortfolioChartProps = {
  chartData: ChartPoint[];
};

function PortfolioChartComponent({
  chartData,
}: PortfolioChartProps) {

  const memoizedData =
    useMemo(
      () => chartData,
      [chartData]
    );

  return (

    <div className="2xl:col-span-2 rounded-[32px] border border-blue-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 overflow-hidden relative">

      {/* BG */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_45%)]" />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* TOP */}

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-8">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">

              Realtime Protocol Analytics

            </p>

            <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

              Portfolio Command Center

            </h3>

          </div>

          {/* STATS */}

          <div className="flex flex-wrap gap-4">

            <div className="rounded-2xl border border-blue-500/10 bg-[#081222] px-5 py-4 min-w-[130px]">

              <p className="text-xs text-gray-500 mb-2">

                AI Trend

              </p>

              <h4 className="text-2xl font-black text-green-400">

                Bullish

              </h4>

            </div>

            <div className="rounded-2xl border border-blue-500/10 bg-[#081222] px-5 py-4 min-w-[130px]">

              <p className="text-xs text-gray-500 mb-2">

                Liquidity

              </p>

              <h4 className="text-2xl font-black text-cyan-300">

                Strong

              </h4>

            </div>

            <div className="rounded-2xl border border-blue-500/10 bg-[#081222] px-5 py-4 min-w-[130px]">

              <p className="text-xs text-gray-500 mb-2">

                AI Confidence

              </p>

              <h4 className="text-2xl font-black text-purple-300">

                92%

              </h4>

            </div>

          </div>

        </div>

        {/* CHART */}

        <div className="w-full h-[420px] rounded-[28px] border border-blue-500/10 bg-[#081222] p-4 sm:p-6">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart
              data={memoizedData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >

              {/* GRID */}

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#172033"
              />

              {/* X */}

              <XAxis
                dataKey="time"
                tick={{
                  fill: "#94a3b8",
                  fontSize: 11,
                }}
                axisLine={false}
                tickLine={false}
              />

              {/* Y */}

              <YAxis
                tick={{
                  fill: "#94a3b8",
                  fontSize: 11,
                }}
                axisLine={false}
                tickLine={false}
                width={45}
              />

              {/* TOOLTIP */}

              <Tooltip
                contentStyle={{
                  background: "#020617",
                  border:
                    "1px solid #3b82f6",
                  borderRadius: "18px",
                  color: "white",
                }}
              />

              {/* GLOW AREA */}

              <Area
                type="monotone"
                dataKey="value"
                stroke="none"
                fill="url(#blueGlow)"
              />

              {/* MAIN LINE */}

              <Line
                type="monotone"
                dataKey="value"
                stroke="#06b6d4"
                strokeWidth={4}
                dot={false}
                isAnimationActive={false}
              />

              {/* AI LINE */}

              <Line
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                strokeWidth={2}
                strokeDasharray="6 6"
                dot={false}
                isAnimationActive={false}
              />

              {/* GRADIENT */}

              <defs>

                <linearGradient
                  id="blueGlow"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#06b6d4"
                    stopOpacity={0.45}
                  />

                  <stop
                    offset="100%"
                    stopColor="#06b6d4"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* FOOTER */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

          <div className="rounded-2xl border border-green-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-3">

              Treasury Growth

            </p>

            <h4 className="text-3xl font-black text-green-400">

              +24%

            </h4>

          </div>

          <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-3">

              Protocol Stability

            </p>

            <h4 className="text-3xl font-black text-cyan-300">

              Stable

            </h4>

          </div>

          <div className="rounded-2xl border border-purple-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-3">

              Market Confidence

            </p>

            <h4 className="text-3xl font-black text-purple-300">

              High

            </h4>

          </div>

        </div>

      </div>

    </div>
  );
}

const PortfolioChart =
  memo(
    PortfolioChartComponent
  );

export default PortfolioChart;