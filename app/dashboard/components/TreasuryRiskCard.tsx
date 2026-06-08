"use client";

import {
  useEffect,
  useState,
} from "react";

type TreasuryRiskCardProps = {

  treasuryValue:
    number;
};

export default function TreasuryRiskCard({

  treasuryValue,

}: TreasuryRiskCardProps) {

  const [
    analysis,
    setAnalysis,
  ] = useState("");

  async function analyzeRisk() {

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

                  `Analyze treasury risk for a DeFi protocol with treasury value of $${treasuryValue}. Give a short institutional-grade risk analysis.`,
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

    analyzeRisk();

  }, []);

  return (

    <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        AI Treasury Risk

      </h3>

      <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4 min-h-[180px]">

        <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">

          {analysis ||
            "Analyzing treasury risk..."}

        </p>

      </div>

    </div>
  );
}