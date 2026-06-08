"use client";

import {
  useEffect,
  useState,
} from "react";

type GovernanceInsightCardProps = {

  proposalCount:
    number;
};

export default function GovernanceInsightCard({

  proposalCount,

}: GovernanceInsightCardProps) {

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

                  `Analyze DAO governance activity with ${proposalCount} active proposals. Give short institutional governance insight.`,
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

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        AI Governance Insight

      </h3>

      <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4 min-h-[180px]">

        <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">

          {insight ||
            "Analyzing governance..."}

        </p>

      </div>

    </div>
  );
}