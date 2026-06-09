import {
  ArrowLeft,
  Shield,
  Landmark,
  Coins,
  Brain,
  Layers3,
  ExternalLink,
} from "lucide-react";

const MODULES = [
  {
    title: "NexusNON.ID",
    layer: "Identity Layer",
    icon: Shield,
    link: "/developers/architecture/identity",
    description: "Sovereign identity, Capsule, Passport, PUP and recovery.",
  },
  {
    title: "NON Board",
    layer: "Governance Layer",
    icon: Landmark,
    link: "/developers/architecture/board",
    description: "Constitutional governance and protocol coordination.",
  },
  {
    title: "NON Economy",
    layer: "Economic Layer",
    icon: Coins,
    link: "/developers/architecture/economy",
    description: "Future token, treasury, liquidity and economic dashboard.",
  },
  {
    title: "AI Infrastructure",
    layer: "Intelligence Layer",
    icon: Brain,
    link: "/developers/architecture/ai",
    description: "Guidance, risk explanation and ecosystem intelligence.",
  },
];

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] px-5 py-6 text-white">
      <div className="mx-auto max-w-7xl">
        <a
          href="/developers"
          className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/10 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Developer Portal
        </a>

        <section className="relative rounded-[40px] border border-cyan-400/10 bg-[#07101f]/70 p-6 shadow-[0_0_90px_rgba(34,211,238,0.08)] backdrop-blur-2xl sm:p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_55%)]" />

          <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
            Architecture
          </p>

          <h1 className="mt-4 text-[clamp(2.4rem,7vw,5rem)] font-black leading-[0.9] tracking-[-0.07em]">
            Connected Ecosystem Map
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            SkodriNΩN is designed as a sovereign ecosystem where Identity,
            Governance, Economy and Intelligence operate as independent modules
            connected through one constitutional architecture.
          </p>

          <div className="relative mt-14 min-h-[720px] rounded-[36px] border border-cyan-400/10 bg-black/25 p-6 sm:min-h-[640px]">
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_90px_rgba(34,211,238,0.18)]" />

            <div className="absolute left-1/2 top-1/2 z-20 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[38px] border border-cyan-400/30 bg-[#07101f] text-center shadow-[0_0_80px_rgba(34,211,238,0.22)]">
              <Layers3 className="mb-4 h-9 w-9 text-cyan-300" />
              <h2 className="text-2xl font-black">SkodriNΩN</h2>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                Sovereign Core
              </p>
            </div>

            <div className="absolute left-1/2 top-[18%] h-[32%] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/70 to-transparent" />
            <div className="absolute bottom-[18%] left-1/2 h-[32%] w-px -translate-x-1/2 bg-gradient-to-t from-cyan-300/70 to-transparent" />
            <div className="absolute left-[18%] top-1/2 h-px w-[32%] -translate-y-1/2 bg-gradient-to-r from-cyan-300/70 to-transparent" />
            <div className="absolute right-[18%] top-1/2 h-px w-[32%] -translate-y-1/2 bg-gradient-to-l from-cyan-300/70 to-transparent" />

            <div className="grid h-full min-h-[680px] grid-cols-1 gap-5 sm:min-h-[600px] lg:grid-cols-3 lg:grid-rows-3">
              <div />
              <ModuleCard module={MODULES[0]} />
              <div />

              <ModuleCard module={MODULES[1]} />
              <div className="hidden lg:block" />
              <ModuleCard module={MODULES[2]} />

              <div />
              <ModuleCard module={MODULES[3]} />
              <div />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ModuleCard({
  module,
}: {
  module: {
    title: string;
    layer: string;
    description: string;
    link: string;
    icon: typeof Shield;
  };
}) {
  const Icon = module.icon;

  return (
    <div className="relative z-30 flex items-center justify-center">
      <a
        href={module.link}
        className="group block w-full max-w-[310px] rounded-[30px] border border-white/10 bg-[#07101f]/90 p-6 shadow-[0_0_45px_rgba(34,211,238,0.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:shadow-[0_0_70px_rgba(34,211,238,0.18)]"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
          <Icon className="h-7 w-7" />
        </div>

        <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
          {module.layer}
        </p>

        <h3 className="mt-3 text-2xl font-black">{module.title}</h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          {module.description}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
          Open Documentation
          <ExternalLink className="h-4 w-4" />
        </div>
      </a>
    </div>
  );
}