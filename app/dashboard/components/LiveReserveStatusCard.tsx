"use client";

import {
  useLiveReserves,
} from "../hooks/useLiveReserves";

export default function LiveReserveStatusCard() {

  const {

    reserves,

    isLoading,

    error,

  } = useLiveReserves();

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Live Reserve Status

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          ONCHAIN READS

        </div>

      </div>

      <div className="space-y-5">

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Reserve Reader Status

          </p>

          <p className={`text-lg font-semibold ${
            isLoading

              ? "text-yellow-300"

              : error

              ? "text-red-300"

              : "text-green-300"
          }`}>

            {isLoading

              ? "Loading Reserves"

              : error

              ? "Read Failed"

              : "Connected"}
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Reserve Payload

          </p>

          <p className="text-sm font-semibold text-cyan-300 break-all">

            {reserves

              ? JSON.stringify(
                  reserves
                )

              : "No reserve data"}
          </p>

        </div>

      </div>

    </div>
  );
}