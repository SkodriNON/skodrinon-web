"use client";

import {
  mockPerformanceMetrics,
} from "../data/mockPerformanceMetrics";

export default function PerformanceAnalyticsCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Performance Analytics

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE PERFORMANCE

        </div>

      </div>

      <div className="space-y-5">

        {mockPerformanceMetrics.map((metric) => (

          <div

            key={metric.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Metric

                </p>

                <p className="text-lg font-semibold text-cyan-300">

                  {metric.metric}

                </p>

              </div>

              <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-300">

                {metric.status}

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Current Value

                </p>

                <p className="text-sm font-semibold text-pink-300">

                  {metric.value}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Performance Change

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  {metric.change}

                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}