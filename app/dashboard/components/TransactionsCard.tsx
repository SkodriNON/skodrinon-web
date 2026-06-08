"use client";

import {

  memo,
  useMemo,

} from "react";

// =====================================================
// TYPES
// =====================================================

type Transaction = {

  hash: string;

  from: string;

  to: string;

  value: string;

  timestamp?: string;

  type?: string;

  explorerUrl?: string;
};

type TransactionsCardProps = {

  transactions: Transaction[];
};

// =====================================================
// HELPERS
// =====================================================

function getTransactionColor(
  type?: string
) {

  switch (type) {

    case "Stake":
      return "text-cyan-400";

    case "Unstake":
      return "text-red-400";

    case "Claim":
      return "text-green-400";

    case "Compound":
      return "text-purple-400";

    case "Governance":
      return "text-blue-400";

    default:
      return "text-gray-300";
  }
}

function getTransactionIcon(
  type?: string
) {

  switch (type) {

    case "Stake":
      return "📥";

    case "Unstake":
      return "📤";

    case "Claim":
      return "💰";

    case "Compound":
      return "⚡";

    case "Governance":
      return "🗳️";

    default:
      return "🔹";
  }
}

// =====================================================
// COMPONENT
// =====================================================

function TransactionsCardComponent({

  transactions,

}: TransactionsCardProps) {

  // =====================================================
  // MEMOIZED
  // =====================================================

  const memoizedTransactions =
    useMemo(
      () => transactions,
      [transactions]
    );

  // =====================================================
  // TOTAL ACTIVITY
  // =====================================================

  const totalTransactions =
    memoizedTransactions.length;

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-5 sm:p-7 overflow-hidden">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <p className="text-sm text-cyan-400 mb-2">

            Protocol Monitoring

          </p>

          <h3 className="text-2xl sm:text-xlfont-bold">

            Activity Feed

          </h3>

        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

          <p className="text-xs text-gray-400 mb-1">

            Events

          </p>

          <h4 className="text-2xl font-bold text-cyan-300">

            {totalTransactions}

          </h4>

        </div>

      </div>

      {/* CONTENT */}

      <div className="space-y-5">

        {memoizedTransactions.length > 0 ? (

          memoizedTransactions.map(
            (tx, index) => (

              <div

                key={index}

                className="border border-blue-500/10 rounded-2xl bg-[#0b1728] p-5 hover:border-blue-500/30 transition-all duration-300"

              >

                {/* TOP */}

                <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-[#111c31] flex items-center justify-center text-xl">

                      {getTransactionIcon(
                        tx.type
                      )}

                    </div>

                    <div>

                      <h4 className={`font-bold ${getTransactionColor(tx.type)}`}>

                        {tx.type ||
                          "Transaction"}

                      </h4>

                      <p className="text-xs text-gray-500 mt-1">

                        {tx.hash.slice(
                          0,
                          18
                        )}...

                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <h5 className="text-lg font-bold text-white">

                      {tx.value} ETH

                    </h5>

                    {tx.timestamp && (

                      <p className="text-xs text-gray-500 mt-1">

                        {tx.timestamp}

                      </p>
                    )}

                  </div>

                </div>

                {/* BODY */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="rounded-xl border border-blue-500/10 bg-[#081222] p-4">

                    <p className="text-xs text-gray-500 mb-2">

                      From

                    </p>

                    <p className="text-sm text-gray-300 break-all">

                      {tx.from}

                    </p>

                  </div>

                  <div className="rounded-xl border border-blue-500/10 bg-[#081222] p-4">

                    <p className="text-xs text-gray-500 mb-2">

                      To

                    </p>

                    <p className="text-sm text-gray-300 break-all">

                      {tx.to}

                    </p>

                  </div>

                </div>

                {/* FOOTER */}

                {tx.explorerUrl && (

                  <div className="mt-5">

                    <a

                      href={
                        tx.explorerUrl
                      }

                      target="_blank"

                      rel="noopener noreferrer"

                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm"

                    >

                      View Transaction →

                    </a>

                  </div>
                )}

              </div>
            )
          )

        ) : (

          <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-10 text-center">

            <div className="text-6xl mb-5">

              📭

            </div>

            <h4 className="text-2xl font-bold mb-4">

              No Protocol Activity

            </h4>

            <p className="text-gray-400 text-sm leading-8 max-w-md mx-auto">

              Live ecosystem activity,
              staking operations,
              governance actions and
              treasury events will
              appear here automatically.

            </p>

          </div>
        )}

      </div>

    </div>
  );
}

// =====================================================
// MEMO EXPORT
// =====================================================

const TransactionsCard =
  memo(
    TransactionsCardComponent
  );

export default TransactionsCard;