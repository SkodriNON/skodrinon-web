
"use client";

const neuralLayers = [

  {
    layer: "Prediction Cortex",
    sync: "98.8%",
    nodes: "14.2K",
    color: "from-cyan-500 to-blue-500",
  },

  {
    layer: "Governance Matrix",
    sync: "96.1%",
    nodes: "8.9K",
    color: "from-violet-500 to-fuchsia-400",
  },

  {
    layer: "Treasury Intelligence",
    sync: "99.4%",
    nodes: "11.4K",
    color: "from-emerald-500 to-green-400",
  },

  {
    layer: "Security Neural Shield",
    sync: "99.9%",
    nodes: "21.8K",
    color: "from-red-500 to-orange-400",
  },

];

export default function NeuralCore() {

  return (

    <div className="rounded-[32px] border border-cyan-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 mt-8 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_45%)]" />

      {/* HEADER */}

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">

            Autonomous Neural Infrastructure

          </p>

          <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">

            Neural Core

          </h3>

        </div>

        <div className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-sm font-semibold text-cyan-300">

            Neural Sync Active

          </span>

        </div>

      </div>

      {/* LAYERS */}

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">

        {neuralLayers.map((layer) => (

          <div

            key={layer.layer}

            className="rounded-3xl border border-cyan-500/10 bg-[#081222]/80 p-6 hover:border-cyan-500/30 transition-all duration-300"

          >

            <div className="flex items-center justify-between mb-6">

              <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${layer.color} flex items-center justify-center text-sm font-black shadow-[0_0_25px_rgba(6,182,212,0.25)]`}>

                AI

              </div>

              <div className="text-right">

                <p className="text-xs text-gray-500 mb-1">

                  Sync

                </p>

                <h5 className="text-2xl font-black text-cyan-300">

                  {layer.sync}

                </h5>

              </div>

            </div>

            <h4 className="text-2xl font-black mb-5">

              {layer.layer}

            </h4>

            <div className="flex items-center justify-between text-sm text-gray-400 mb-6">

              <span>Neural Nodes</span>

              <span className="text-white">

                {layer.nodes}

              </span>

            </div>

            <button className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 hover:border-cyan-500/40 transition-all duration-300">

              Access Neural Layer

            </button>

          </div>
        ))}

      </div>

    </div>
  );
}
