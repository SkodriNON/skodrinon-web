import {
  ArrowLeft,
  Coins,
  Landmark,
  BarChart3,
  Wallet,
  Repeat2,
  Lock,
  CheckCircle2,
} from "lucide-react";

const FEATURES = [
  {
    title: "Future NON Token",
    desc: "The NON token is planned as the economic coordination asset of the ecosystem. It is not treated as the identity layer.",
    icon: Coins,
  },
  {
    title: "Treasury Layer",
    desc: "Treasury infrastructure is planned to support long-term ecosystem sustainability, reserves and protocol growth.",
    icon: Landmark,
  },
  {
    title: "Liquidity Layer",
    desc: "Liquidity coordination is planned as part of the future economic infrastructure.",
    icon: Repeat2,
  },
  {
    title: "Staking Layer",
    desc: "Staking is planned as a future economic module and must remain separate from identity ownership.",
    icon: Lock,
  },
  {
    title: "Economy Dashboard",
    desc: "The dashboard is designed to visualize token, treasury, governance and future economic activity.",
    icon: BarChart3,
  },
  {
    title: "Wallet View",
    desc: "Wallet and asset views help users understand balances, assets and future economy interactions.",
    icon: Wallet,
  },
];

const STEPS = [
  "Open the SkodriNΩN ecosystem portal.",
  "Enter the NON Economy or Token Dashboard module.",
  "Review available dashboard sections such as portfolio, governance, treasury and analytics.",
  "Use only testnet data while the economy layer is under development.",
  "Wait for final mainnet contracts before treating any token or treasury data as production.",
];

export default function EconomyArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#020617] px-5 py-6 text-white">
      <div className="mx-auto max-w-6xl">
        <a
          href="/developers/architecture"
          className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/10 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Architecture
        </a>

        <section className="rounded-[38px] border border-cyan-400/10 bg-[#07101f]/70 p-6 shadow-[0_0_90px_rgba(34,211,238,0.08)] backdrop-blur-2xl sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
            Economic Layer
          </p>

          <h1 className="mt-4 text-[clamp(2.4rem,7vw,5.2rem)] font-black leading-[0.9] tracking-[-0.07em]">
            NON Economy
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            NON Economy is the future economic layer of the SkodriNΩN ecosystem.
            It is designed to coordinate token mechanics, treasury visibility,
            liquidity, staking, analytics and ecosystem value flows without
            mixing identity sovereignty with token ownership.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:scale-[1.03]"
            >
              Open Token Dashboard
            </a>

            <a
              href="/developers"
              className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-4 font-black text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Developer Portal
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-[28px] border border-white/10 bg-black/25 p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="text-2xl font-black">{feature.title}</h2>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <section className="mt-10 rounded-[30px] border border-cyan-400/10 bg-black/25 p-6">
            <h2 className="text-3xl font-black">How It Works</h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">
              The economy layer is designed as a separate module from identity.
              NexusNON.ID defines who the user is, while NON Economy is intended
              to coordinate future economic participation, asset flows and
              protocol-level financial visibility.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {STEPS.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-black text-cyan-300">
                    {index + 1}
                  </div>

                  <p className="text-sm leading-7 text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[30px] border border-cyan-400/10 bg-cyan-400/5 p-6">
            <h2 className="text-3xl font-black">Current Status</h2>

            <div className="mt-6 space-y-4">
              {[
                "NON Economy is under active development.",
                "Token, treasury, staking and liquidity modules should be treated as future or testnet infrastructure until final deployment.",
                "Identity ownership must remain separate from token ownership.",
                "Mainnet economy configuration should be published only after final contracts are deployed and verified.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-gray-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[30px] border border-white/10 bg-black/25 p-6">
            <h2 className="text-3xl font-black">Project Direction</h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-400">
              NON Economy aims to become the economic coordination layer of the
              SkodriNΩN ecosystem. The long-term direction includes token-based
              coordination, treasury management, liquidity infrastructure,
              staking, analytics and governance-connected economic visibility.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}