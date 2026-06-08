"use client";

const sectors = [
  {
    title: "AI Governance Nexus",
    nodes: "1,204",
    energy: "98%",
  },
  {
    title: "Treasury Matrix",
    nodes: "842",
    energy: "94%",
  },
  {
    title: "Liquidity Dimension",
    nodes: "613",
    energy: "91%",
  },
  {
    title: "Security Grid",
    nodes: "1,884",
    energy: "99%",
  },
];

export default function MetaverseGrid() {
  return (
    <div className="rounded-xl border border-fuchsia-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-fuchsia-400">
            Digital Grid
          </p>

          <h3 className="text-lg font-semibold">
            Metaverse Grid
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-fuchsia-300">
          <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
          Online
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-fuchsia-500/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-fuchsia-500/10 bg-[#081222]">
              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Sector
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Nodes
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Energy
              </th>
            </tr>
          </thead>

          <tbody>
            {sectors.map((sector) => (
              <tr
                key={sector.title}
                className="border-b border-fuchsia-500/5 hover:bg-[#081222]/60"
              >
                <td className="px-3 py-2 font-medium">
                  {sector.title}
                </td>

                <td className="px-3 py-2 text-gray-300">
                  {sector.nodes}
                </td>

                <td className="px-3 py-2 text-right font-semibold text-fuchsia-300">
                  {sector.energy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}