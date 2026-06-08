"use client";

import {
  useEffect,
  useState,
} from "react";

export default function WhaleRiskCard() {

  const [
    analysis,
    setAnalysis,
  ] = useState("");

  async function analyzeWhales() {

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

                  "Analyze current whale risk conditions in Ethereum and DeFi markets. Keep it concise and institutional.",
              }),
          }
        );

      const data =
        await res.json();

      setAnalysis(
        data.response
      );

    } catch (error) {

      console.error(error);
    }
  }

  useEffect(() => {

    analyzeWhales();

  }, []);

  return (

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        AI Whale Risk

      </h3>

      <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4 min-h-[180px]">

        <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">

          {analysis ||
            "Analyzing whale activity..."}

        </p>

      </div>

    </div>
  );
}