"use client";

import {
  mockSentiment,
} from "../data/mockSentiment";

export default function AIMarketSentimentCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          AI Market Sentiment

        </h3>

        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">

          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-xs text-cyan-300">

            AI ACTIVE

          </span>

        </div>

      </div>

      <div className="space-y-5">

        {mockSentiment.map((item) => (

          <div

            key={item.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <h4 className="font-bold text-lg">

                  {item.pair}

                </h4>

                <p className="text-xs text-gray-400 mt-1">

                  AI Trading Signal

                </p>

              </div>

              <div className={`rounded-full px-3 py-1 text-xs border ${
                item.sentiment === "Bullish"

                  ? "border-green-500/20 bg-green-500/10 text-green-300"

                  : "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"
              }`}>

                {item.sentiment}

              </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Confidence

                </p>

                <p className="text-sm font-semibold text-cyan-300">

                  {item.confidence}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Volatility

                </p>

                <p className="text-sm font-semibold text-pink-300">

                  {item.volatility}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Signal

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  ACTIVE

                </p>

              </div>

            </div>

            <div className="rounded-2xl border border-cyan-500/10 bg-[#07101f] px-4 py-3">

              <p className="text-sm text-cyan-200">

                {item.signal}

              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}