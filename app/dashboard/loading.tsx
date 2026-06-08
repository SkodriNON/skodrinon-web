export default function Loading() {

  return (

    <main className="relative min-h-screen overflow-hidden bg-[#020617] flex items-center justify-center text-white">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

      {/* CONTENT */}

      <div className="relative z-10 flex flex-col items-center">

        {/* LOGO */}

        <div className="mb-10">

          <div className="w-32 h-32 rounded-full border border-cyan-500/20 bg-[#07101f]/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.25)] animate-pulse">

            <span className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              Ω

            </span>

          </div>

        </div>

        {/* TITLE */}

        <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

          SkodriNΩN

        </h1>

        <p className="text-gray-400 text-sm md:text-base mb-10 tracking-[0.25em] uppercase">

          Initializing Protocol Systems

        </p>

        {/* LOADER */}

        <div className="w-[280px] h-3 rounded-full bg-[#07101f] overflow-hidden mb-8">

          <div className="h-full w-1/2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-pulse rounded-full" />

        </div>

        {/* STATUS */}

        <div className="space-y-3 text-sm text-gray-400 text-center">

          <p className="animate-pulse">

            Syncing Treasury Engine...

          </p>

          <p className="animate-pulse">

            Connecting Governance Layer...

          </p>

          <p className="animate-pulse">

            Loading AI Intelligence...

          </p>

          <p className="animate-pulse">

            Verifying Blockchain State...

          </p>

        </div>

      </div>

    </main>
  );
}