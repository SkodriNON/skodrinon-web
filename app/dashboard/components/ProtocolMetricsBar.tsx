"use client";

type ProtocolMetricsBarProps = {

  treasuryValue:
    number;

  proposals:
    number;

  apr:
    number;
};

export default function ProtocolMetricsBar({

  treasuryValue,

  proposals,

  apr,

}: ProtocolMetricsBarProps) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <div className="rounded-2xl border border-blue-500/10 bg-[#07101f]/80 p-4">

        <p className="text-xs text-gray-400 mb-1">

          Treasury

        </p>

        <h3 className="text-2xl font-black text-cyan-400">

          ${treasuryValue.toLocaleString()}

        </h3>

      </div>

      <div className="rounded-2xl border border-blue-500/10 bg-[#07101f]/80 p-4">

        <p className="text-xs text-gray-400 mb-1">

          Governance

        </p>

        <h3 className="text-2xl font-black text-blue-400">

          {proposals}

        </h3>

      </div>

      <div className="rounded-2xl border border-blue-500/10 bg-[#07101f]/80 p-4">

        <p className="text-xs text-gray-400 mb-1">

          Staking APR

        </p>

        <h3 className="text-2xl font-black text-purple-400">

          {apr}%

        </h3>

      </div>

    </div>
  );
}