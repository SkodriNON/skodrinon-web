"use client";

import { useState } from "react";

import {
  Sparkles,
  ExternalLink,
  Send,
  Globe,
  ShoppingBag,
  GitBranch,
  Shield,
  Landmark,
  Coins,
  Brain,
} from "lucide-react";

const modules = [
  {
    id: "identity",
    title: "NexusNON.ID",
    subtitle: "Sovereign Identity",
    description:
      "Capsule identity, PUP approval, recovery and public registration infrastructure.",
    link: "https://nonid.vercel.app",
    action: "Open Identity",
    icon: Shield,
  },
  {
    id: "board",
    title: "NON Board",
    subtitle: "Constitutional Governance",
    description:
      "Governance authority, board status and constitutional protocol coordination.",
    link: "https://nonid.vercel.app/non/genesis",
    action: "Open Board",
    icon: Landmark,
  },
  {
    id: "economy",
    title: "NON Economy",
    subtitle: "Token Dashboard",
    description:
      "Treasury, liquidity, staking, analytics and token ecosystem dashboard.",
    link: "/dashboard",
    action: "Open Dashboard",
    icon: Coins,
  },
  {
    id: "ai",
    title: "AI Infrastructure",
    subtitle: "Intelligence Layer",
    description:
      "AI-assisted governance, treasury intelligence and ecosystem coordination.",
    link: "/dashboard",
    action: "Explore AI",
    icon: Brain,
  },
  {
    id: "community",
    title: "Community",
    subtitle: "Official Channels",
    description:
      "SkodriNΩN social, Telegram, GitHub and ecosystem communication links.",
    link: "https://t.me/SkodriNON_Official",
    action: "Open Community",
    icon: Send,
  },
];

export default function Home() {
  const [active, setActive] =
    useState(modules[0]);

  const ActiveIcon = active.icon;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020617] text-white">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/web.backhom.png')",
        }}
      />

      <div className="fixed inset-0 bg-black/60" />

      <div className="relative z-10 grid min-h-screen grid-cols-1 gap-5 p-4 lg:grid-cols-[250px_1fr] lg:p-6">
        <aside className="rounded-[32px] border border-cyan-400/10 bg-[#07101f]/75 p-4 backdrop-blur-2xl lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_35px_rgba(59,130,246,0.45)]">
              <Sparkles className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-xl font-black">
                SkodriNΩN
              </h1>

              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Ecosystem
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            {modules.map((item) => {
              const Icon = item.icon;
              const selected =
                active.id === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    setActive(item)
                  }
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-left transition ${
                    selected
                      ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                      : "border-white/10 bg-black/20 text-zinc-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />

                  <div>
                    <p className="text-sm font-black">
                      {item.title}
                    </p>

                    <p className="text-[11px] text-zinc-500">
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 border-t border-white/10 pt-5">
            <a
              href="https://x.com/SkodriNON_AI"
              target="_blank"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300 hover:text-cyan-300"
            >
              <span className="text-lg">𝕏</span>
              X
            </a>

            <a
              href="https://t.me/SkodriNON_Official"
              target="_blank"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300 hover:text-cyan-300"
            >
              <Send className="h-4 w-4" />
              Telegram
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300 hover:text-cyan-300"
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300 hover:text-cyan-300"
            >
              <ShoppingBag className="h-4 w-4" />
              Buy NON
            </a>
          </div>
        </aside>

        <section className="flex min-h-[calc(100vh-32px)] items-center justify-center rounded-[36px] border border-cyan-400/10 bg-[#07101f]/55 p-5 backdrop-blur-2xl sm:p-8 lg:min-h-[calc(100vh-48px)]">
          <div className="grid w-full max-w-6xl gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs font-bold text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Identity × Board × Economy × AI
              </div>

              <h2 className="text-[clamp(2.6rem,7vw,5.6rem)] font-black leading-[0.9] tracking-[-0.06em]">
                Sovereign
                <br />
                Digital
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                  Ecosystem
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                SkodriNΩN connects sovereign identity,
                constitutional governance, token economy and
                AI infrastructure into one organized ecosystem.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                  <p className="text-xs text-zinc-500">
                    Identity
                  </p>
                  <h3 className="mt-2 text-xl font-black text-cyan-300">
                    NexusNON.ID
                  </h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                  <p className="text-xs text-zinc-500">
                    Governance
                  </p>
                  <h3 className="mt-2 text-xl font-black text-cyan-300">
                    NON Board
                  </h3>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                  <p className="text-xs text-zinc-500">
                    Economy
                  </p>
                  <h3 className="mt-2 text-xl font-black text-cyan-300">
                    NON Token
                  </h3>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-cyan-400/20 bg-black/35 p-6 shadow-[0_0_90px_rgba(34,211,238,0.10)] sm:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                <ActiveIcon className="h-8 w-8" />
              </div>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                {active.subtitle}
              </p>

              <h3 className="mt-3 text-4xl font-black">
                {active.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                {active.description}
              </p>

              <a
                href={active.link}
                className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-black text-white transition hover:scale-[1.02]"
              >
                {active.action}
                <ExternalLink className="h-4 w-4" />
              </a>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-zinc-500">
                  Active Module
                </p>

                <h4 className="mt-2 text-2xl font-black text-cyan-300">
                  {active.title}
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}