"use client";

type Props = {
  children: React.ReactNode;
};

export default function InstitutionalLayout({
  children,
}: Props) {

  return (

    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#020617] text-white">

      {/* BACKGROUND */}

      <div
        className="fixed inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/dashboard-bg.png')",
        }}
      />

      {/* DARK OVERLAY */}

      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      {/* TOP GLOW */}

      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[300px] w-[800px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* LEFT GLOW */}

      <div className="pointer-events-none fixed left-[-200px] top-[25%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

      {/* RIGHT GLOW */}

      <div className="pointer-events-none fixed right-[-200px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[160px]" />

      {/* GRID OVERLAY */}

      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* CONTENT */}

      <div className="relative z-10 min-h-screen">

        <div className="mx-auto w-full max-w-[1920px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-3 sm:py-5">

          <div className="overflow-hidden rounded-[28px] border border-white/[0.06] bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_120px_rgba(0,0,0,0.55)]">

            <div className="relative z-10">

              {children}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}