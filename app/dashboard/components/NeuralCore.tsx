"use client";

const neuralLayers = [
  {
    layer: "Prediction Cortex",
    sync: "98.8%",
    nodes: "14.2K",
  },
  {
    layer: "Governance Matrix",
    sync: "96.1%",
    nodes: "8.9K",
  },
  {
    layer: "Treasury Intelligence",
    sync: "99.4%",
    nodes: "11.4K",
  },
  {
    layer: "Security Neural Shield",
    sync: "99.9%",
    nodes: "21.8K",
  },
];

export default function NeuralCore() {
  return (
    <div className="rounded-xl border border-cyan-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">
            Neural Layer
          </p>

          <h3 className="text-lg font-semibold">
            Neural Core
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Synced
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-cyan-500/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-cyan-500/10 bg-[#081222]">
              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Layer
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Nodes
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Sync
              </th>
            </tr>
          </thead>

          <tbody>
            {neuralLayers.map((layer) => (
              <tr
                key={layer.layer}
                className="border-b border-cyan-500/5 hover:bg-[#081222]/60"
              >
                <td className="px-3 py-2 font-medium">
                  {layer.layer}
                </td>

                <td className="px-3 py-2 text-gray-300">
                  {layer.nodes}
                </td>

                <td className="px-3 py-2 text-right font-semibold text-cyan-300">
                  {layer.sync}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}