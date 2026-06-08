"use client";

import {
  useEffect,
  useState,
} from "react";

export default function AIInsightsCard() {

  const [
    insight,
    setInsight,
  ] = useState("");

  async function loadInsight() {

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
                  "Give a short institutional crypto market insight for Ethereum and DeFi.",
              }),
          }
        );

      const data =
        await res.json();

      setInsight(
        data.response
      );

    } catch (error) {

      console.error(error);
    }
  }

  useEffect(() => {

    loadInsight();

  }, []);

  return (

    <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        AI Market Insight

      </h3>

      <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4 min-h-[180px]">

        <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">

          {insight || "Loading AI insight..."}

        </p>

      </div>

    </div>
  );
}