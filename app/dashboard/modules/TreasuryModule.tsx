"use client";

import dynamic from "next/dynamic";

import {
  useROI,
} from "../hooks/useROI";

// =====================================================
// DYNAMIC IMPORTS
// =====================================================

const TreasuryCard = dynamic(

  () =>
    import(
      "../components/TreasuryCard"
    ),

  {
    ssr: false,

    loading: () => (

      <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-8 text-gray-400">

        Loading treasury...

      </div>
    ),
  }
);

const HoldingsCard = dynamic(

  () =>
    import(
      "../components/HoldingsCard"
    ),

  {
    ssr: false,

    loading: () => (

      <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-8 text-gray-400">

        Loading holdings...

      </div>
    ),
  }
);

// =====================================================
// TYPES
// =====================================================

type TreasuryModuleProps = {

  totalPortfolio: number;

  ethBalance: any;
  tokenBalance: any;

  ethPrice: number;
  tokenPrice: number;
};

// =====================================================
// COMPONENT
// =====================================================

export default function TreasuryModule({

  totalPortfolio,

  ethBalance,
  tokenBalance,

  ethPrice,
  tokenPrice,

}: TreasuryModuleProps) {

  // =====================================================
  // ROI
  // =====================================================

  const {
    roi,
  } = useROI(
    totalPortfolio
  );

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <div className="space-y-7">

      {/* HEADER */}

      <div>

        <h2 className="text-4xl font-bold mb-3">
          Treasury
        </h2>

        <p className="text-gray-400">

          Treasury assets and protocol reserves.

        </p>

      </div>

      {/* TREASURY */}

      <TreasuryCard
        totalPortfolio={totalPortfolio}
        roi={roi}
      />

      {/* HOLDINGS */}

      <HoldingsCard
        ethBalance={ethBalance}
        tokenBalance={tokenBalance}
        ethPrice={ethPrice}
        tokenPrice={tokenPrice}
      />

    </div>
  );
}