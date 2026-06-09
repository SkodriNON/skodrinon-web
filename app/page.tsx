"use client";

import { useEffect, useState } from "react";

import {
  Shield,
  Landmark,
  Coins,
  Brain,
  ExternalLink,
  Send,
  GitBranch,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const MODULES = [
  {
    title: "NexusNON.ID",
    label: "Sovereign Identity",
    headline: "Sovereign Identity Capsule",
    description:
      "NexusNON.ID is the identity layer of the ecosystem. The Capsule is not a profile and not a normal account. It is a sovereign digital identity structure designed to connect login, ownership, recovery, session control and future constitutional access.",
    value: "Identity Layer",
    action: "Open Identity",
    link: process.env.NEXT_PUBLIC_IDENTITY_URL || "https://nonid.vercel.app",
    icon: Shield,
    blocks: [
      "Capsule = Identity, not database profile",
      "PUP session layer for secure access",
      "Recovery and anti-phishing protection",
      "Designed for future wallet-independent identity",
    ],
  },
  {
    title: "NON Board",
    label: "Constitutional Governance",
    headline: "Live Constitutional Board",
    description:
      "NON Board is the governance and coordination layer. It connects ecosystem decisions, constitutional authority, protocol modules and identity-based legitimacy into one visible control environment.",
    value: "Board Layer",
    action: "Open Board",
    link:
      process.env.NEXT_PUBLIC_BOARD_URL ||
      "https://nonid.vercel.app/non/genesis",
    icon: Landmark,
    blocks: [
      "Governance coordination layer",
      "Connected to identity authority",
      "Protocol legitimacy dashboard",
      "Board-level constitutional structure",
    ],
  },
  {
    title: "NON Economy",
    label: "Token Dashboard",
    headline: "NON Economic Layer",
    description:
      "NON Economy is the treasury, liquidity, staking, governance and analytics layer. It is designed to coordinate the economic side of the ecosystem without mixing identity sovereignty with token mechanics.",
    value: "Economic Layer",
    action: "Open Dashboard",
    link: "/dashboard",
    icon: Coins,
    blocks: [
      "Treasury visibility",
      "Liquidity and staking coordination",
      "Governance analytics",
      "Economic dashboard structure",
    ],
  },
  {
    title: "AI Infrastructure",
    label: "Intelligence Layer",
    headline: "AI Ecosystem Intelligence",
    description:
      "AI Infrastructure is the guidance and intelligence layer for the ecosystem. It can assist users, explain modules, support governance decisions, monitor risks and help coordinate future protocol operations.",
    value: "AI Layer",
    action: "Explore AI",
    link: "/dashboard",
    icon: Brain,
    blocks: [
      "AI guidance for users",
      "Governance assistance",
      "Security and risk explanation",
      "Future ecosystem intelligence agent",
    ],
  },
  {
    title: "Developer Portal",
    label: "Builder Layer",
    headline: "Developer Infrastructure",
    description:
      "Developer Portal is the technical access point for builders, auditors and contributors. It will organize contracts, architecture, documentation, future API access and SDK integrations as the ecosystem evolves from testnet toward mainnet.",
    value: "Developer Layer",
    action: "Open Developers",
    link: "/developers",
    icon: GitBranch,
    blocks: [
      "Contracts and deployments",
      "Architecture documentation",
      "Future API access",
      "Future SDK integrations",
    ],
  },
];

export default function Home() {
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePanel((prev) =>
        prev === MODULES.length - 1 ? 0 : prev + 1
      );
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const activeModule = MODULES[activePanel];
  const ActiveIcon = activeModule.icon;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020617] text-white">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-50 rounded-[28px] border border-cyan-400/10 bg-[#07101f]/70 px-4 py-4 shadow-[0_0_45px_rgba(59,130,246,0.10)] backdrop-blur-2xl sm:px-6">
          <div className="flex flex-row flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_45px_rgba(59,130,246,0.45)]">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <h1 className="text-lg font-black sm:text-xl">
                  SkodriNΩN
                </h1>

                <p className="text-[9px] uppercase tracking-[0.25em] text-gray-500 sm:text-[10px]">
                  Sovereign Ecosystem
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              <a
                href={MODULES[0].link}
                className="text-gray-300 transition hover:text-cyan-300"
              >
                Identity
              </a>

              <a
                href={MODULES[1].link}
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
                href="/developers"
                className="text-gray-300 transition hover:text-cyan-300"
              >
                Developers
              </a>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/dashboard"
                className="rounded-2xl border border-cyan-400/10 bg-cyan-500/10 px-5 py-3 text-sm transition hover:bg-cyan-500/20"
              >
                Dashboard
              </a>

              <a
                href={MODULES[0].link}
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-bold shadow-[0_0_35px_rgba(59,130,246,0.35)] transition hover:scale-[1.03]"
              >
                Nexus ID
              </a>
            </div>
          </div>
        </header>

        <section className="mx-auto mt-6 w-full max-w-[1280px] pb-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[230px_1fr]">
            <aside className="rounded-[30px] border border-cyan-400/10 bg-[#07101f]/65 p-4 backdrop-blur-2xl">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div className="space-y-3">
                  <p className="px-2 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
                    Modules
                  </p>

                  {MODULES.map((module, index) => {
                    const Icon = module.icon;
                    const isActive = activePanel === index;

                    return (
                      <button
                        key={module.title}
                        type="button"
                        onClick={() => setActivePanel(index)}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition ${
                          isActive
                            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                            : "border-white/5 bg-white/[0.03] text-gray-300 hover:border-cyan-400/20 hover:text-cyan-300"
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0 text-cyan-300" />

                        <div className="min-w-0">
                          <p className="truncate text-sm font-black">
                            {module.title}
                          </p>

                          <p className="truncate text-[10px] text-gray-500">
                            {module.label}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3">
                  <p className="px-2 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
                    Network
                  </p>

                  <a
                    href="https://x.com/SkodriNON_AI"
                    target="_blank"
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 transition hover:border-cyan-400/20 hover:text-cyan-300"
                  >
                    <span className="text-xl">𝕏</span>
                    X
                  </a>

                  <a
                    href="https://t.me/SkodriNON_Official"
                    target="_blank"
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 transition hover:border-cyan-400/20 hover:text-cyan-300"
                  >
                    <Send className="h-4 w-4" />
                    Telegram
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 transition hover:border-cyan-400/20 hover:text-cyan-300"
                  >
                    <GitBranch className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </aside>

            <div className="rounded-[34px] border border-cyan-400/10 bg-[#07101f]/60 p-5 shadow-[0_0_90px_rgba(59,130,246,0.10)] backdrop-blur-2xl sm:p-7 lg:p-8">
              <div className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-[11px] text-cyan-200 sm:text-[13px]">
                <Sparkles className="h-4 w-4 shrink-0" />

                <span className="truncate">
                  Identity × Board × Token Economy × AI × Developers
                </span>
              </div>

              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-18 w-18 items-center justify-center rounded-[26px] border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_60px_rgba(34,211,238,0.20)] sm:h-20 sm:w-20">
                  <ActiveIcon className="h-8 w-8 sm:h-9 sm:w-9" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300 sm:tracking-[0.35em]">
                    {activeModule.label}
                  </p>

                  <h2 className="mt-2 text-xl font-black tracking-[-0.05em] sm:text-xl">
                    {activeModule.title}
                  </h2>
                </div>
              </div>

              <h3 className="max-w-[760px] text-[clamp(2.2rem,7vw,5rem)] font-black leading-[0.92] tracking-[-0.07em]">
                {activeModule.headline}
              </h3>

              <p className="mt-7 max-w-[760px] text-base leading-8 text-gray-300 sm:text-lg sm:leading-[1.85]">
                {activeModule.description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {activeModule.blocks.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/25 p-5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <p className="text-sm font-semibold leading-6 text-gray-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={activeModule.link}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-7 py-4 font-black text-black transition hover:scale-[1.03]"
                >
                  {activeModule.action}
                  <ExternalLink className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={() =>
                    setActivePanel((prev) =>
                      prev === MODULES.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-7 py-4 font-black text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Next Module
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}