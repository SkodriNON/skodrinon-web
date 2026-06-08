"use client";

const predictions = [
  {
    title: "ETH Momentum",
    prediction: "Bullish breakout expected within 48h.",
    confidence: "94%",
  },
  {
    title: "Treasury Growth",
    prediction: "Treasury reserves projected to expand +18%.",
    confidence: "91%",
  },
  {
    title: "Governance Activity",
    prediction: "DAO participation trend accelerating.",
    confidence: "88%",
  },
  {
    title: "Liquidity Forecast",
    prediction: "Crosschain liquidity inflow detected.",
    confidence: "96%",
  },
];

export default function AIPredictions() {
  return (
    <div className="rounded-xl border border-fuchsia-500/10 bg-[#07101f]/80 p-4">

      <div className="mb-4 flex items-center justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-fuchsia-400">
            AI Predictions
          </p>

          <h3 className="text-lg font-semibold">
            Prediction Engine
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-fuchsia-300">
          <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
          Active
        </div>

      </div>

      <div className="overflow-hidden rounded-lg border border-fuchsia-500/10">

        <table className="w-full text-sm">

          <thead>

            <tr className="border-b border-fuchsia-500/10 bg-[#081222]">

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Prediction
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Analysis
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Confidence
              </th>

            </tr>

          </thead>

          <tbody>

            {predictions.map((prediction) => (

              <tr
                key={prediction.title}
                className="border-b border-fuchsia-500/5 hover:bg-[#081222]/60"
              >

                <td className="px-3 py-2 font-medium">
                  {prediction.title}
                </td>

                <td className="px-3 py-2 text-gray-300">
                  {prediction.prediction}
                </td>

                <td className="px-3 py-2 text-right font-semibold text-fuchsia-300">
                  {prediction.confidence}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}