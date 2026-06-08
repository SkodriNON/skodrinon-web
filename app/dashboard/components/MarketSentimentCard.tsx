"use client";

import {
  useEffect,
  useState,
} from "react";

export default function MarketSentimentCard() {

  const [
    sentiment,
    setSentiment,
  ] = useState("");

  async function loadSentiment() {

    try {

      const res =
        await fetch(

          "/api/ai/chat",

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({

                prompt:

                  "Give a short crypto market sentiment analysis for Ethereum and DeFi. Include institutional tone.",
              }),
          }
        );

      const data =
        await res.json();

      setSentiment(
        data.response
      );

    } catch (error) {

      console.error(error);
    }
  }

  useEffect(() => {

    loadSentiment();

  }, []);

  return (

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Market Sentiment

      </h3>

      <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4 min-h-[180px]">

        <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">

          {sentiment ||
            "Loading market sentiment..."}

        </p>

      </div>

    </div>
  );
}