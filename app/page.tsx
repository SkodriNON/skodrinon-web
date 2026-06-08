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
    title: "AI Coordination",

    description:
      "Autonomous AI infrastructure connected with decentralized ecosystem intelligence and analytics.",

    value: "101 Agents",

    action: "Explore AI",

    link: "/dashboard",
  },

  {
    title: "Protocol Staking",

    description:
      "Enterprise-grade staking infrastructure with reward automation and treasury-backed sustainability.",

    value: "9% APR",

    action: "Start Staking",

    link: "/dashboard",
  },

];

export default function Home() {

  const [activePanel, setActivePanel] =
    useState(0);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setActivePanel((prev) =>
          prev ===
          infoPanels.length - 1
            ? 0
            : prev + 1
        );

      }, 5000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* BACKGROUND */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/web.backhom.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/25" />

      {/* NAVBAR */}

      <header className="fixed top-5 left-5 right-5 z-50 rounded-[32px] border border-cyan-400/10 bg-[#07101f]/45 backdrop-blur-2xl px-8 py-5 flex items-center justify-between shadow-[0_0_45px_rgba(59,130,246,0.08)]">

        {/* LEFT */}

        <div className="flex items-center gap-5">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_45px_rgba(59,130,246,0.45)]">

            <Sparkles className="w-5 h-5" />

          </div>

          <div>

            <h1 className="text-xl font-black">

              SkodriNΩN

            </h1>

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">

              AI GOVERNANCE SYSTEM

            </p>

          </div>

        </div>

        {/* CENTER */}

        <nav className="hidden xl:flex items-center gap-8">

          <button className="text-gray-300 hover:text-cyan-300 transition-all duration-300">

            Governance

          </button>

          <button className="text-gray-300 hover:text-cyan-300 transition-all duration-300">

            DAO

          </button>

          <button className="text-gray-300 hover:text-cyan-300 transition-all duration-300">

            AI Suite

          </button>

          <button className="text-gray-300 hover:text-cyan-300 transition-all duration-300">

            Analytics

          </button>

          <button className="text-gray-300 hover:text-cyan-300 transition-all duration-300">

            Bridge

          </button>

        </nav>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

  <a
    href="/dashboard"
    className="px-6 py-3 rounded-2xl border border-cyan-400/10 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300"
  >

    Dashboard

  </a>

  <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_35px_rgba(59,130,246,0.35)] hover:scale-[1.03] transition-all duration-300">

    Wallet

  </button>

</div>

</header>

      {/* CENTER */}

      <section className="relative z-10 pr-[390px] pt-[120px] pb-[120px] min-h-screen flex items-center justify-center">

        {/* HERO TEXT */}

        <div className="absolute left-[70px] top-[180px] max-w-[520px]">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl mb-8 text-[13px] text-cyan-200">

            <Sparkles className="w-4 h-4" />

            AI × Governance × Treasury × Web3

          </div>

          <h2 className="text-[5rem] leading-[0.9] font-black tracking-[-0.06em] mb-8">

            <span className="text-white">

              Intelligent

            </span>

            <br />

            <span className="text-white">

              Governance

            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">

              Infrastructure

            </span>

          </h2>

          <p className="text-gray-400 text-lg leading-[1.8] max-w-[520px]">

            Advanced decentralized operating system
            powering treasury intelligence,
            governance, AI coordination and
            scalable blockchain infrastructure.

          </p>

        </div>

        {/* CENTER IMAGE */}

        <div className="relative z-20 flex items-center justify-center">

          <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-[180px]" />

          <img
            src="/favicon.ico"
            alt="SkodriNΩN"
            className="relative z-20 w-[520px] xl:w-[650px] object-contain opacity-95 drop-shadow-[0_0_160px_rgba(59,130,246,1)]"
          />

        </div>

      </section>

      {/* RIGHT PANEL */}

      <aside className="fixed right-5 top-24 bottom-[120px] z-50 w-[360px] rounded-[34px] border border-cyan-400/10 bg-[#07101f]/45 backdrop-blur-2xl p-6 overflow-hidden">

        <div className="h-full flex flex-col justify-between">

          <div>

            <div className="mb-10">

              <p className="text-cyan-300 uppercase tracking-[0.3em] text-[11px] mb-4">

                LIVE SYSTEM

              </p>

              <h2 className="text-4xl font-black leading-tight mb-6">

                {
                  infoPanels[
                    activePanel
                  ].title
                }

              </h2>

              <p className="text-gray-400 leading-[1.9] text-[15px]">

                {
                  infoPanels[
                    activePanel
                  ].description
                }

              </p>

            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-black/20 p-6 mb-6">

              <p className="text-sm text-gray-400 mb-3">

                Current Status

              </p>

              <h3 className="text-5xl font-black text-cyan-300">

                {
                  infoPanels[
                    activePanel
                  ].value
                }

              </h3>

            </div>

            <a
              href={
                infoPanels[
                  activePanel
                ].link
              }
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold shadow-[0_0_45px_rgba(59,130,246,0.35)] hover:scale-[1.02] transition-all duration-300"
            >

              {
                infoPanels[
                  activePanel
                ].action
              }

              <ExternalLink className="w-4 h-4" />

            </a>

          </div>

          {/* CONTRACTS */}

          <div className="space-y-4">

            <h3 className="text-lg font-bold">

              Live Contracts

            </h3>

            <a
              href="https://etherscan.io"
              target="_blank"
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 hover:border-cyan-400/20 transition-all duration-300"
            >

              <div>

                <p className="font-semibold">

                  Token Contract

                </p>

                <p className="text-xs text-gray-500">

                  View on Etherscan

                </p>

              </div>

              <ExternalLink className="w-4 h-4 text-cyan-300" />

            </a>

          </div>

        </div>

      </aside>

            {/* BOTTOM DOCK */}

      <div className="fixed bottom-5 left-5 right-[390px] z-50">

        <div className="rounded-[30px] border border-cyan-400/10 bg-[#07101f]/45 backdrop-blur-2xl px-8 py-5 flex items-center justify-center gap-10">

          <a
            href="https://x.com/SkodriNON_AI"
            target="_blank"
            className="flex items-center gap-3 hover:text-cyan-300 transition duration-300"
          >

            <span className="text-xl">
              𝕏
            </span>

            X

          </a>

          <a
            href="https://t.me/SkodriNON_Official"
            target="_blank"
            className="flex items-center gap-3 hover:text-cyan-300 transition duration-300"
          >

            <Send className="w-4 h-4" />

            Telegram

          </a>

          <a
            href="#"
            className="flex items-center gap-3 hover:text-cyan-300 transition duration-300"
          >

            <GitBranch className="w-4 h-4" />

            GitHub

          </a>

          <a
            href="#"
            className="flex items-center gap-3 hover:text-cyan-300 transition duration-300"
          >

            <Globe className="w-4 h-4" />

            Hub

          </a>

          <a
            href="#"
            className="flex items-center gap-3 hover:text-cyan-300 transition duration-300"
          >

            <ShoppingBag className="w-4 h-4" />

            Buy NON

          </a>

        </div>

      </div>

    </main>
  );
}