"use client";

import { useState, useEffect } from "react";

import {
  Sparkles,
  ExternalLink,
  Send,
  Globe,
  ShoppingBag,
  GitBranch,
} from "lucide-react";

const infoPanels = [
  {
    title: "Treasury Infrastructure",
    description:
      "SkodriNΩN treasury architecture secures long-term protocol sustainability, reserve balancing and ecosystem growth.",
    value: "$78.7K",
    action: "View Treasury",
    link: "/dashboard",
  },
  {
    title: "Governance System",
    description:
      "Advanced DAO governance powering proposal execution, treasury control and decentralized coordination.",
    value: "12 Active",
    action: "Open Governance",
    link: "/dashboard",
  },
  {
    title: "NexusNON.ID",
    description:
      "Sovereign digital identity infrastructure with Capsule identity, PUP approval, recovery and public registration.",
    value: "Identity Layer",
    action: "Open Identity",
    link: "https://nonid.vercel.app",
  },
  {
    title: "NON Board",
    description:
      "Constitutional governance and board infrastructure connected to the NexusNON.ID ecosystem.",
    value: "Board Layer",
    action: "Open Board",
    link: "https://nonid.vercel.app/non/genesis",
  },
];

export default function Home() {
  const [activePanel, setActivePanel] =
    useState(0);

  useEffect(() => {
    const interval =
      setInterval(() => {
        setActivePanel((prev) =>
          prev === infoPanels.length - 1
            ? 0
            : prev + 1
        );
      }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020617] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/web.backhom.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/25" />

      <header className="fixed left-4 right-4 top-4 z-50 flex flex-col gap-4 rounded-[28px] border border-cyan-400/10 bg-[#07101f]/60 px-5 py-4 shadow-[0_0_45px_rgba(59,130,246,0.08)] backdrop-blur-2xl sm:left-5 sm:right-5 sm:top-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5">
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
          <a href="https://nonid.vercel.app" className="text-gray-300 transition hover:text-cyan-300">
            Identity
          </a>

          <a href="https://nonid.vercel.app/non/genesis" className="text-gray-300 transition hover:text-cyan-300">
            Board
          </a>

          <a href="/dashboard" className="text-gray-300 transition hover:text-cyan-300">
            Token Dashboard
          </a>

          <a href="#ecosystem" className="text-gray-300 transition hover:text-cyan-300">
            Ecosystem
          </a>
        </nav>

        <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
          <a
            href="/dashboard"
            className="rounded-2xl border border-cyan-400/10 bg-cyan-500/10 px-5 py-3 text-center text-sm font-bold transition hover:bg-cyan-500/20 sm:px-6"
          >
            Dashboard
          </a>

          <a
            href="https://nonid.vercel.app"
            className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center text-sm font-bold shadow-[0_0_35px_rgba(59,130,246,0.35)] transition hover:scale-[1.03] sm:px-6"
          >
            Nexus ID
          </a>
        </div>
      </header>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-[70px] pt-[180px] sm:pt-[150px] xl:pr-[390px]">
        <div className="relative w-full max-w-[1150px] xl:min-h-[680px]">
          <div className="max-w-[580px] xl:absolute xl:left-[40px] xl:top-[70px]">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-[13px] text-cyan-200 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Identity × Board × Token Economy × AI
            </div>

            <h2 className="mb-8 text-[clamp(3rem,9vw,5.8rem)] font-black leading-[0.9] tracking-[-0.06em]">
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

            <p className="max-w-[520px] text-base leading-[1.8] text-gray-400 sm:text-lg">
              SkodriNΩN is a sovereign Web3 ecosystem connecting identity,
              constitutional governance, token economy and AI infrastructure
              into one unified system.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://nonid.vercel.app"
                className="rounded-2xl bg-cyan-400 px-6 py-4 text-center font-black text-black transition hover:scale-[1.03]"
              >
                Open Nexus Identity
              </a>

              <a
                href="/dashboard"
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-4 text-center font-black text-cyan-200 transition hover:bg-cyan-400/20"
              >
                Open NON Dashboard
              </a>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center xl:mt-0 xl:absolute xl:left-[420px] xl:top-[150px]">
            <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-[160px]" />

            <img
              src="/home.web.png"
              alt="SkodriNΩN"
              className="relative z-20 w-full max-w-[620px] object-contain opacity-95 drop-shadow-[0_0_120px_rgba(59,130,246,0.8)]"
            />
          </div>
        </div>
      </section>

      <aside className="relative z-20 mx-4 mb-6 rounded-[34px] border border-cyan-400/10 bg-[#07101f]/60 p-6 backdrop-blur-2xl xl:fixed xl:bottom-[120px] xl:right-5 xl:top-24 xl:mx-0 xl:mb-0 xl:w-[360px] xl:overflow-hidden">
        <div className="flex h-full flex-col justify-between gap-8">
          <div>
            <div className="mb-8">
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-cyan-300">
                LIVE ECOSYSTEM
              </p>

              <h2 className="mb-6 text-4xl font-black leading-tight">
                {infoPanels[activePanel].title}
              </h2>

              <p className="text-[15px] leading-[1.9] text-gray-400">
                {infoPanels[activePanel].description}
              </p>
            </div>

            <div className="mb-6 rounded-3xl border border-cyan-400/10 bg-black/20 p-6">
              <p className="mb-3 text-sm text-gray-400">
                Current Status
              </p>

              <h3 className="text-4xl font-black text-cyan-300 sm:text-5xl">
                {infoPanels[activePanel].value}
              </h3>
            </div>

            <a
              href={infoPanels[activePanel].link}
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold shadow-[0_0_45px_rgba(59,130,246,0.35)] transition hover:scale-[1.02]"
            >
              {infoPanels[activePanel].action}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              Ecosystem Modules
            </h3>

            <a
              href="https://nonid.vercel.app"
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 transition hover:border-cyan-400/20"
            >
              <div>
                <p className="font-semibold">
                  NexusNON.ID
                </p>

                <p className="text-xs text-gray-500">
                  Sovereign Identity
                </p>
              </div>

              <ExternalLink className="h-4 w-4 text-cyan-300" />
            </a>

            <a
              href="https://nonid.vercel.app/non/genesis"
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 transition hover:border-cyan-400/20"
            >
              <div>
                <p className="font-semibold">
                  NON Board
                </p>

                <p className="text-xs text-gray-500">
                  Constitutional Governance
                </p>
              </div>

              <ExternalLink className="h-4 w-4 text-cyan-300" />
            </a>

            <a
              href="/dashboard"
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 transition hover:border-cyan-400/20"
            >
              <div>
                <p className="font-semibold">
                  NON Economy
                </p>

                <p className="text-xs text-gray-500">
                  Token Dashboard
                </p>
              </div>

              <ExternalLink className="h-4 w-4 text-cyan-300" />
            </a>
          </div>
        </div>
      </aside>

      <section
        id="ecosystem"
        className="relative z-20 mx-4 mb-6 rounded-[34px] border border-cyan-400/10 bg-[#07101f]/55 p-6 backdrop-blur-2xl sm:p-8 xl:mr-[390px]"
      >
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
            Ecosystem Architecture
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            One ecosystem. Separate sovereign modules.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["NexusNON.ID", "Sovereign Identity", "Capsule identity, PUP approval, recovery and public registration.", "https://nonid.vercel.app"],
            ["NON Board", "Constitutional Governance", "Board layer, governance authority and protocol coordination.", "https://nonid.vercel.app/non/genesis"],
            ["NON Economy", "Token Dashboard", "Treasury, token, liquidity, staking and analytics.", "/dashboard"],
          ].map(([title, label, description, link]) => (
            <a
              key={title}
              href={link}
              className="group rounded-[28px] border border-white/10 bg-black/25 p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                {label}
              </p>

              <h3 className="mt-3 text-2xl font-black">
                {title}
              </h3>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-gray-400">
                {description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-black text-cyan-300">
                Open Module
                <ExternalLink className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="relative z-50 mx-4 mb-5 xl:fixed xl:bottom-5 xl:left-5 xl:right-[390px] xl:mx-0 xl:mb-0">
        <div className="flex flex-wrap items-center justify-center gap-5 rounded-[30px] border border-cyan-400/10 bg-[#07101f]/60 px-5 py-5 backdrop-blur-2xl sm:gap-10 sm:px-8">
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

          <a
            href="#"
            className="flex items-center gap-3 transition hover:text-cyan-300"
          >
            <ShoppingBag className="h-4 w-4" />
            Buy NON
          </a>
        </div>
      </div>
    </main>
  );
}