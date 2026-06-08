"use client";

type ErrorProps = {

  error: Error & {
    digest?: string;
  };

  reset: () => void;
};

export default function GlobalError({

  error,
  reset,

}: ErrorProps) {

  console.error(error);

  return (

    <html lang="en">

      <body className="min-h-screen overflow-hidden bg-[#020617] text-white flex items-center justify-center p-6 relative">

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),transparent_70%)]" />

        {/* CONTENT */}

        <div className="relative z-10 max-w-2xl w-full rounded-xl border border-red-500/20 bg-[#07101f]/90 backdrop-blur-2xl p-10 text-center shadow-[0_0_80px_rgba(239,68,68,0.15)]">

          {/* ICON */}

          <div className="w-28 h-28 rounded-full border border-red-500/20 bg-red-500/10 flex items-center justify-center mx-auto mb-8 animate-pulse">

            <span className="text-5xl">

              ⚠️

            </span>

          </div>

          {/* TITLE */}

          <h1 className="text-xl md:text-5xl font-black mb-5 bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">

            Protocol Failure

          </h1>

          {/* MESSAGE */}

          <p className="text-gray-400 leading-8 max-w-xl mx-auto mb-10">

            The SkodriNΩN protocol interface encountered an unexpected runtime issue while initializing blockchain infrastructure, governance modules or treasury systems.

          </p>

          {/* STATUS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

            <div className="rounded-2xl border border-red-500/10 bg-[#0b1728] p-5">

              <p className="text-xs text-gray-500 mb-2">

                Treasury Engine

              </p>

              <h3 className="text-lg font-bold text-red-400">

                Offline

              </h3>

            </div>

            <div className="rounded-2xl border border-orange-500/10 bg-[#0b1728] p-5">

              <p className="text-xs text-gray-500 mb-2">

                Governance Layer

              </p>

              <h3 className="text-lg font-bold text-orange-400">

                Recovering

              </h3>

            </div>

            <div className="rounded-2xl border border-yellow-500/10 bg-[#0b1728] p-5">

              <p className="text-xs text-gray-500 mb-2">

                AI Systems

              </p>

              <h3 className="text-lg font-bold text-yellow-400">

                Rebooting

              </h3>

            </div>

          </div>

          {/* ACTIONS */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button

              onClick={() =>
                reset()
              }

              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold transition-all duration-300 hover:scale-[1.03]"

            >

              Reinitialize Protocol

            </button>

            <button

              onClick={() =>
                window.location.reload()
              }

              className="px-7 py-4 rounded-2xl border border-blue-500/20 bg-[#07101f]/60 transition-all duration-300 hover:border-blue-500/40"

            >

              Reload Interface

            </button>

          </div>

          {/* ERROR */}

          <div className="mt-10 rounded-2xl border border-white/5 bg-[#081222] p-5 text-left overflow-auto">

            <p className="text-xs text-gray-500 mb-3">

              Runtime Exception

            </p>

            <code className="text-xs text-red-300 break-all leading-6">

              {error?.message}

            </code>

          </div>

        </div>

      </body>

    </html>
  );
}