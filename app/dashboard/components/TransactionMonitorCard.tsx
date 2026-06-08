"use client";

import {
  useState,
} from "react";

import {
  useTransactionMonitor,
} from "../hooks/useTransactionMonitor";

export default function TransactionMonitorCard() {

  const [

    hash,

    setHash,

  ] = useState<
    `0x${string}` | undefined
  >();

  const {

    receipt,

    isLoading,

    isSuccess,

    error,

  } = useTransactionMonitor(
    hash
  );

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Transaction Monitor

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE TX TRACKING

        </div>

      </div>

      <div className="space-y-5">

        <input

          value={hash || ""}

          onChange={(e) =>

            setHash(
              e.target.value as `0x${string}`
            )
          }

          placeholder="Paste transaction hash"

          className="w-full rounded-2xl border border-cyan-500/10 bg-[#081222] px-4 py-4 outline-none"

        />

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Transaction Status

          </p>

          <p className={`text-lg font-semibold ${
            isLoading

              ? "text-yellow-300"

              : error

              ? "text-red-300"

              : isSuccess

              ? "text-green-300"

              : "text-cyan-300"
          }`}>

            {isLoading

              ? "Waiting For Confirmation"

              : error

              ? "Transaction Failed"

              : isSuccess

              ? "Transaction Confirmed"

              : "Awaiting Transaction"}
          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Receipt Payload

          </p>

          <p className="text-xs text-cyan-300 break-all">

            {receipt

              ? JSON.stringify(
                  receipt
                )

              : "No transaction receipt"}
          </p>

        </div>

      </div>

    </div>
  );
}