
"use client";

const sectors = [

  {
    title: "AI Governance Nexus",
    nodes: "1,204",
    energy: "98%",
    color: "from-cyan-500 to-blue-500",
  },

  {
    title: "Treasury Matrix",
    nodes: "842",
    energy: "94%",
    color: "from-emerald-500 to-green-400",
  },

  {
    title: "Liquidity Dimension",
    nodes: "613",
    energy: "91%",
    color: "from-violet-500 to-fuchsia-400",
  },

  {
    title: "Security Grid",
    nodes: "1,884",
    energy: "99%",
    color: "from-red-500 to-orange-400",
  },

];

export default function MetaverseGrid() {

  return (

    <div className="rounded-[32px] border border-fuchsia-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.14),transparent_45%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-400 mb-3">

            Autonomous Digital Civilization

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-fuchsia-200 to-pink-300 bg-clip-text text-transparent">

            Metaverse Grid

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-fuchsia-400 animate-pulse" />

          <span className="text-sm font-semibold text-fuchsia-300">

            Civilization Online

          </span>

        </div>

      </div>

      {/* SECTORS */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {sectors.map((sector) => (

          <div

            key={sector.title}

            className="rounded-3xl border border-fuchsia-500/10 bg-[#081222]/80 p-6 hover:border-fuchsia-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-6">

              <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${sector.color} flex items-center justify-center text-sm font-black shadow-[0_0_25px_rgba(217,70,239,0.25)]`}>

                GRID

              </div>

              <div className="text-right">

                <p className="text-xs text-gray-500 mb-1">

                  Energy

                </p>

                <h5 className="text-2xl font-black text-fuchsia-300">

                  {sector.energy}

                </h5>

              </div>

            </div>

            <h4 className="text-2xl font-black mb-5">

              {sector.title}

            </h4>

            <div className="flex items-center justify-between text-sm text-gray-400 mb-6">

              <span>Active Nodes</span>

              <span className="text-white">

                {sector.nodes}

              </span>

            </div>

            <button className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10 px-5 py-3 text-sm font-semibold text-fuchsia-300 hover:border-fuchsia-500/40 transition-all duration-300">

              Enter Grid Sector

            </button>

          </div>
        ))}

      </div>

    </div>
  );
}