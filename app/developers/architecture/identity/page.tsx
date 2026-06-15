import {
  ArrowLeft,
  Shield,
  KeyRound,
  Fingerprint,
  Lock,
  RefreshCcw,
  Building2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const FEATURES = [
  {
    title: "Identity Capsule",
    desc: "The Capsule is the core identity structure. It is not a database profile and not a normal account.",
    icon: Fingerprint,
  },
  {
    title: "Nexus Passport",
    desc: "The Passport presents identity access, capsule status and ecosystem participation.",
    icon: Shield,
  },
  {
    title: "PUP Session Layer",
    desc: "PUP controls secure session approval, access protection and future wallet-independent identity flow.",
    icon: KeyRound,
  },
  {
    title: "Recovery System",
    desc: "Recovery protects access to the identity layer using verified recovery and anti-phishing logic.",
    icon: RefreshCcw,
  },
  {
    title: "Anti-Phishing",
    desc: "Security layer designed to help users verify the environment before sensitive actions.",
    icon: Lock,
  },
  {
    title: "Business Capsules",
    desc: "Business Capsules extend sovereign identity into organization, signer and governance structures.",
    icon: Building2,
  },
];

const STEPS = [
  "Open NexusNON.ID from the ecosystem portal.",
  "Enter the identity gateway.",
  "Create or access your Identity Capsule.",
  "Activate or verify PUP session protection.",
  "Configure recovery and anti-phishing settings.",
  "Use the dashboard to manage identity, wallet, privacy and services.",
];

export default function IdentityArchitecturePage() {
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
            Identity Layer
          </p>

          <h1 className="mt-4 text-[clamp(2.4rem,7vw,5.2rem)] font-black leading-[0.9] tracking-[-0.07em]">
            NexusNON.ID
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            NexusNON.ID is the sovereign identity layer of the SkodriNΩN
            ecosystem. Its purpose is to give users a digital identity structure
            that connects capsule ownership, login, recovery, session control,
            privacy and future constitutional access.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={
  process.env.NEXT_PUBLIC_IDENTITY_URL ||
  "https://nonid.vercel.app/connect"
}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:scale-[1.03]"
            >
              Open NexusNON.ID
              <ExternalLink className="h-4 w-4" />
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
              The identity flow is designed around the principle that the
              Capsule is the identity. Access, sessions, recovery and services
              are built around the Capsule instead of replacing it with a normal
              account system.
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
            <h2 className="text-3xl font-black">Testnet Guide</h2>

            <div className="mt-6 space-y-4">
              {[
                "Use Arbitrum Sepolia as the current testnet environment.",
                "Use test ETH for gas when interacting with blockchain actions.",
                "Use mock/test USDT only for testnet flows such as future recovery or service fees.",
                "Do not use real mainnet funds during testnet testing.",
                "Mainnet deployment will use final production contracts and environment configuration.",
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
              NexusNON.ID aims to become the identity foundation of the
              SkodriNΩN ecosystem. The long-term direction is wallet-independent
              sovereign identity, constitutional access, business identity,
              reputation, recovery, privacy and service access controlled by the
              user identity layer.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}