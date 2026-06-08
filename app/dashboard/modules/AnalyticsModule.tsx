"use client";

import dynamic from "next/dynamic";

// =====================================================
// DYNAMIC IMPORTS
// =====================================================

const AnalyticsCard = dynamic(

  () =>
    import(
      "../components/AnalyticsCard"
    ),

  {
    ssr: false,

    loading: () => (

      <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-8 text-gray-400">

        Loading analytics...

      </div>
    ),
  }
);

const PortfolioChart = dynamic(

  () =>
    import(
      "../components/PortfolioChart"
    ),

  {
    ssr: false,

    loading: () => (

      <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 h-[400px] flex items-center justify-center text-gray-400">

        Loading chart...

      </div>
    ),
  }
);

// =====================================================
// TYPES
// =====================================================

type AnalyticsModuleProps = {

  chartData: {

    time: string;
    value: number;

  }[];
};

// =====================================================
// COMPONENT
// =====================================================

export default function AnalyticsModule({
  chartData,
}: AnalyticsModuleProps) {

  return (

    <div className="space-y-7">

      {/* HEADER */}

      <div>

        <h2 className="text-4xl font-bold mb-3">
          Analytics
        </h2>

        <p className="text-gray-400">

          Portfolio analytics and performance metrics.

        </p>

      </div>

      {/* CHART */}

      <PortfolioChart
        chartData={chartData}
      />

      {/* ANALYTICS */}

      <AnalyticsCard />

    </div>
  );
}