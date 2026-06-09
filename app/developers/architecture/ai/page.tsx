import {
  ArrowLeft,
  Brain,
  MessageCircle,
  ShieldAlert,
  Landmark,
  Activity,
  Bot,
  CheckCircle2,
} from "lucide-react";

const FEATURES = [
  {
    title: "AI Guidance",
    desc: "AI Infrastructure is planned to guide users through the ecosystem, explain modules and reduce confusion.",
    icon: MessageCircle,
  },
  {
    title: "Ecosystem Intelligence",
    desc: "The intelligence layer is designed to observe ecosystem structure, module status and future operational signals.",
    icon: Brain,
  },
  {
    title: "Governance Assistant",
    desc: "AI can help explain governance proposals, risks, decisions and constitutional logic in readable language.",
    icon: Landmark,
  },
  {
    title: "Risk Explanation",
    desc: "AI can help users understand security risks, phishing warnings, unsafe actions and protocol-level alerts.",
    icon: ShieldAlert,
  },
  {
    title: "Protocol Monitoring",
    desc: "Future AI modules may help monitor system activity, module health and abnormal behavior.",
    icon: Activity,
  },
  {
    title: "AI Agent Layer",
    desc: "AI agents are planned as future assistants for identity, governance, economy and developer workflows.",
    icon: Bot,
  },
];

const STEPS = [
  "Open the SkodriNΩN ecosystem portal.",
  "Use AI guidance to understand ecosystem modules and actions.",
  "Use AI explanations before sensitive governance, identity or economy actions.",
  "Treat AI output as guidance, not final authority.",
  "Final authority remains in verified contracts, governance rules and user-controlled identity.",
];

export default function AIArchitecturePage() {
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
            Intelligence Layer
          </p>

          <h1 className="mt-4 text-[clamp(2.4rem,7vw,5.2rem)] font-black leading-[0.9] tracking-[-0.07em]">
            AI Infrastructure
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            AI Infrastructure is the intelligence and guidance layer of the
            SkodriNΩN ecosystem. Its purpose is to help users understand identity,
            governance, economy, risk and developer workflows without replacing
            verified protocol logic or constitutional authority.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:scale-[1.03]"
            >
              Open AI Dashboard
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
              AI Infrastructure is designed as a support layer. It can guide,
              explain and monitor, but it should not replace verified smart
              contracts, governance rules, identity ownership or user approval.
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
                "AI Infrastructure is currently a planned intelligence layer.",
                "AI should explain and guide, not execute sensitive actions without user confirmation.",
                "Governance, identity and economy logic must remain verifiable outside AI.",
                "Future AI agents should support users, developers and governance operations.",
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
              AI Infrastructure aims to become the ecosystem intelligence layer
              for SkodriNΩN. The long-term direction includes identity guidance,
              governance explanation, risk analysis, developer support, protocol
              monitoring and future AI agents connected to verified ecosystem
              data.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}