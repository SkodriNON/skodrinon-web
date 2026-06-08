"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Shield,
  Landmark,
  Coins,
  Brain,
  ExternalLink,
  Send,
  Globe,
  GitBranch,
  Sparkles,
} from "lucide-react";

const MODULES = [
  {
    title: "NexusNON.ID",
    label: "Sovereign Identity",
    description:
      "Capsule-based sovereign digital identity infrastructure with PUP, recovery and public registration.",
    value: "Identity Layer",
    action: "Open Identity",
    link:
      process.env.NEXT_PUBLIC_IDENTITY_URL ||
      "https://nonid.vercel.app",
    icon: Shield,
  },
  {
    title: "NON Board",
    label: "Constitutional Governance",
    description:
      "Live constitutional board layer connected to identity, governance authority and protocol coordination.",
    value: "Board Layer",
    action: "Open Board",
    link:
      process.env.NEXT_PUBLIC_BOARD_URL ||
      "https://nonid.vercel.app/non/genesis",
    icon: Landmark,
  },
  {
    title: "NON Economy",
    label: "Token Dashboard",
    description:
      "Treasury, liquidity, staking, governance, analytics and economic coordination dashboard.",
    value: "Economic Layer",
    action: "Open Dashboard",
    link: "/dashboard",
    icon: Coins,
  },
  {
    title: "AI Infrastructure",
    label: "Intelligence Layer",
    description:
      "AI-assisted ecosystem intelligence for governance, security, treasury and coordination systems.",
    value: "AI Layer",
    action: "Explore AI",
    link: "/dashboard",
    icon: Brain,
  },
];

export default function Home() {
  const [activePanel, setActivePanel] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePanel((prev) =>
        prev === MODULES.length - 1
          ? 0
          : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon =
    MODULES[activePanel].icon;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/web.backhom.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/35" />

      <header className="fixed top-5 left-5 right-5 z-50 rounded-[32px] border border-cyan-400/10 bg-[#07101f]/50 px-8 py-5 shadow-[0_0_45px_rgba(59,130,246,0.10)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_45px_rgba(59,130,246,0.45)]">
              <Sparkles className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-xl font-black">
                SkodriNΩN
              </h1>

              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                Sovereign Ecosystem
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 xl:flex">
            <a
              href={
                process.env.NEXT_PUBLIC_IDENTITY_URL ||
                "https://nonid.vercel.app"
              }
              className="text-gray-300 transition hover:text-cyan-300"
            >
              Identity
            </a>

            <a
              href={
                process.env.NEXT_PUBLIC_BOARD_URL ||
                "https://nonid.vercel.app/non/genesis"
              }
              className="text-gray-300 transition hover:text-cyan-300"
            >
              Board
            </a>

            <a
              href="/dashboard"
              className="text-gray-300 transition hover:text-cyan-300"
            >
              Token Dashboard
            </a>

            <a
              href="#ecosystem"
              className="text-gray-300 transition hover:text-cyan-300"
            >
              Ecosystem
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/dashboard"
              className="rounded-2xl border border-cyan-400/10 bg-cyan-500/10 px-6 py-3 transition hover:bg-cyan-500/20"
            >
              Dashboard
            </a>

            <a
              href={
                process.env.NEXT_PUBLIC_IDENTITY_URL ||
                "https://nonid.vercel.app"
              }
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-bold shadow-[0_0_35px_rgba(59,130,246,0.35)] transition hover:scale-[1.03]"
            >
              Nexus ID
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-[130px] pt-[130px] xl:pr-[410px]">
        <div className="absolute left-[70px] top-[175px] max-w-[580px]">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-[13px] text-cyan-200 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Identity × Board × Token Economy × AI
          </div>

          <h2 className="mb-8 text-[4.6rem] font-black leading-[0.9] tracking-[-0.06em]">
            <span className="text-white">
              Sovereign
            </span>
            <br />
            <span className="text-white">
              Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>

          <p className="max-w-[540px] text-lg leading-[1.8] text-gray-400">
            SkodriNΩN is a sovereign Web3 ecosystem connecting
            digital identity, constitutional governance, token
            economy and AI infrastructure into one unified system.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={
                process.env.NEXT_PUBLIC_IDENTITY_URL ||
                "https://nonid.vercel.app"
              }
              className="rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:scale-[1.03]"
            >
              Open Nexus Identity
            </a>

            <a
              href="/dashboard"
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-4 font-black text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Open NON Dashboard
            </a>
          </div>
        </div>

        <div className="relative z-20 flex items-center justify-center">
          <div className="absolute h-[700px] w-[700px] rounded-full bg-cyan-400/20 blur-[180px]" />

          <img
            src="/home.web.png"
            alt="SkodriNΩN Ecosystem"
            className="relative z-20 w-[520px] object-contain opacity-95 drop-shadow-[0_0_160px_rgba(59,130,246,1)] xl:w-[650px]"
          />
        </div>
      </section>

      <aside className="fixed bottom-[120px] right-5 top-24 z-50 w-[360px] overflow-hidden rounded-[34px] border border-cyan-400/10 bg-[#07101f]/50 p-6 backdrop-blur-2xl">
        <div className="flex h-full flex-col justify-between">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-cyan-300">
              LIVE ECOSYSTEM
            </p>

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
              <ActiveIcon className="h-6 w-6" />
            </div>

            <h2 className="mb-3 text-4xl font-black leading-tight">
              {MODULES[activePanel].title}
            </h2>

            <p className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              {MODULES[activePanel].label}
            </p>

            <p className="text-[15px] leading-[1.9] text-gray-400">
              {MODULES[activePanel].description}
            </p>

            <div className="my-6 rounded-3xl border border-cyan-400/10 bg-black/25 p-6">
              <p className="mb-3 text-sm text-gray-400">
                Current Module
              </p>

              <h3 className="text-3xl font-black text-cyan-300">
                {MODULES[activePanel].value}
              </h3>
            </div>

            <a
              href={MODULES[activePanel].link}
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold shadow-[0_0_45px_rgba(59,130,246,0.35)] transition hover:scale-[1.02]"
            >
              {MODULES[activePanel].action}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              Ecosystem Modules
            </h3>

            {MODULES.slice(0, 3).map(
              (module, index) => {
                const Icon = module.icon;

                return (
                  <button
                    key={module.title}
                    onClick={() =>
                      setActivePanel(index)
                    }
                    className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 text-left transition hover:border-cyan-400/20"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-cyan-300" />

                      <div>
                        <p className="font-semibold">
                          {module.title}
                        </p>

                        <p className="text-xs text-gray-500">
                          {module.label}
                        </p>
                      </div>
                    </div>

                    <ExternalLink className="h-4 w-4 text-cyan-300" />
                  </button>
                );
              }
            )}
          </div>
        </div>
      </aside>

      <section
        id="ecosystem"
        className="relative z-20 mx-5 mb-[120px] rounded-[34px] border border-cyan-400/10 bg-[#07101f]/55 p-8 backdrop-blur-2xl xl:mr-[390px]"
      >
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
            Ecosystem Architecture
          </p>

          <h2 className="mt-3 text-4xl font-black">
            One ecosystem. Separate sovereign modules.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {MODULES.slice(0, 3).map((module) => {
            const Icon = module.icon;

            return (
              <a
                key={module.title}
                href={module.link}
                className="group rounded-[28px] border border-white/10 bg-black/25 p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                  {module.label}
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  {module.title}
                </h3>

                <p className="mt-4 min-h-[96px] text-sm leading-7 text-gray-400">
                  {module.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-black text-cyan-300">
                  {module.action}
                  <ExternalLink className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <div className="fixed bottom-5 left-5 right-[390px] z-50">
        <div className="flex items-center justify-center gap-10 rounded-[30px] border border-cyan-400/10 bg-[#07101f]/50 px-8 py-5 backdrop-blur-2xl">
          <a
            href="https://x.com/SkodriNON_AI"
            target="_blank"
            className="flex items-center gap-3 transition hover:text-cyan-300"
          >
            <span className="text-xl">𝕏</span>
            X
          </a>

          <a
            href="https://t.me/SkodriNON_Official"
            target="_blank"
            className="flex items-center gap-3 transition hover:text-cyan-300"
          >
            <Send className="h-4 w-4" />
            Telegram
          </a>

          <a
            href="#"
            className="flex items-center gap-3 transition hover:text-cyan-300"
          >
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>

          <a
            href="#ecosystem"
            className="flex items-center gap-3 transition hover:text-cyan-300"
          >
            <Globe className="h-4 w-4" />
            Ecosystem
          </a>
        </div>
      </div>
    </main>
  );
}