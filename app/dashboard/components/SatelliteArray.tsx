"use client";

const satellites = [
  {
    id: "SAT-01",
    sector: "Treasury Orbit",
    signal: "99.2%",
    status: "Linked",
  },
  {
    id: "SAT-02",
    sector: "Governance Relay",
    signal: "97.4%",
    status: "Active",
  },
  {
    id: "SAT-03",
    sector: "Liquidity Radar",
    signal: "95.8%",
    status: "Tracking",
  },
  {
    id: "SAT-04",
    sector: "Security Shield",
    signal: "99.9%",
    status: "Protected",
  },
];

export default function SatelliteArray() {
  return (
    <div className="rounded-xl border border-cyan-500/10 bg-[#07101f]/80 p-4">
      <div className="mb-4 flex items-center justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400">
            Orbital Network
          </p>

          <h3 className="text-lg font-semibold">
            Satellite Array
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Stable
        </div>

      </div>

      <div className="overflow-hidden rounded-lg border border-cyan-500/10">

        <table className="w-full text-sm">

          <thead>

            <tr className="border-b border-cyan-500/10 bg-[#081222]">

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                ID
              </th>

              <th className="px-3 py-2 text-left font-medium text-gray-400">
                Sector
              </th>

              <th className="px-3 py-2 text-center font-medium text-gray-400">
                Signal
              </th>

              <th className="px-3 py-2 text-right font-medium text-gray-400">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {satellites.map((satellite) => (

              <tr
                key={satellite.id}
                className="border-b border-cyan-500/5 hover:bg-[#081222]/60"
              >

                <td className="px-3 py-2 font-medium">
                  {satellite.id}
                </td>

                <td className="px-3 py-2 text-gray-300">
                  {satellite.sector}
                </td>

                <td className="px-3 py-2 text-center text-cyan-300 font-semibold">
                  {satellite.signal}
                </td>

                <td className="px-3 py-2 text-right text-gray-300">
                  {satellite.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}