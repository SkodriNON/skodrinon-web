"use client";

import {
  useTreasuryHealth,
} from "../hooks/useTreasuryHealth";

type TreasuryHealthCardProps = {

  treasuryValue:
    number;

  liquidity:
    number;
};

export default function TreasuryHealthCard({

  treasuryValue,

  liquidity,

}: TreasuryHealthCardProps) {

  const {

    treasuryRatio,

    treasuryStatus,

  } = useTreasuryHealth(

    treasuryValue,

    liquidity
  );

  return (

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Treasury Health

      </h3>

      <div className="space-y-4">

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4">

          <p className="text-sm text-gray-400 mb-1">

            Treasury Ratio

          </p>

          <p className="text-xlfont-black text-cyan-400">

            {treasuryRatio}

          </p>

        </div>

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4">

          <p className="text-sm text-gray-400 mb-1">

            Protocol Status

          </p>

          <p className={`text-2xl font-bold ${
            treasuryStatus ===
            "Strong"

              ? "text-green-400"

              : treasuryStatus ===
                "Healthy"

              ? "text-yellow-400"

              : "text-red-400"
          }`}>

            {treasuryStatus}

          </p>

        </div>

      </div>

    </div>
  );
}