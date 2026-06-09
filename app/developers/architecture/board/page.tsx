import {
  ArrowLeft,
  Landmark,
  ShieldCheck,
  Users,
  ScrollText,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const FEATURES = [
  {
    title: "Constitutional Governance",
    desc: "NON Board represents the governance and constitutional coordination layer of the SkodriNΩN ecosystem.",
    icon: Landmark,
  },
  {
    title: "Protocol Legitimacy",
    desc: "The Board is designed to separate governance authority from identity and token mechanics.",
    icon: ShieldCheck,
  },
  {
    title: "Signer Coordination",
    desc: "Governance decisions can be structured around signers, approvals and future constitutional rules.",
    icon: Users,
  },
  {
    title: "Proposal Layer",
    desc: "Future governance actions can be organized through proposals, reviews, approvals and execution flows.",
    icon: ScrollText,
  },
  {
    title: "Timelock Direction",
    desc: "Execution delays and controlled governance actions help protect the ecosystem from rushed changes.",
    icon: Clock,
  },
  {
    title: "Emergency Layer",
    desc: "Emergency control is planned as a protective layer for critical protocol situations.",
    icon: AlertTriangle,
  },
];

const STEPS = [
  "Open the NON Board or Genesis governance page.",
  "Review the current constitutional governance status.",
  "Inspect active governance modules and coordination layers.",
  "Follow future proposal, approval and execution flows.",
  "Use identity-based legitimacy as the ecosystem evolves.",
];

export default function BoardArchitecturePage() {
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
            Governance Layer
          </p>

          <h1 className="mt-4 text-[clamp(2.4rem,7vw,5.2rem)] font-black leading-[0.9] tracking-[-0.07em]">
            NON Board
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            NON Board is the constitutional governance layer of the SkodriNΩN
            ecosystem. Its purpose is to coordinate governance authority,
            protocol legitimacy, signer structures, future proposals and
            execution control without mixing governance directly into identity
            or economy mechanics.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={
                process.env.NEXT_PUBLIC_BOARD_URL ||
                "https://nonid.vercel.app/non/genesis"
              }
              target="_blank"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 font-black text-black transition hover:scale-[1.03]"
            >
              Open NON Board
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
              NON Board is designed as a coordination environment for future
              constitutional governance. It gives the ecosystem a visible place
              to organize authority, proposals, approvals, signers and execution
              logic.
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
            <h2 className="text-3xl font-black">Governance Flow</h2>

            <div className="mt-6 space-y-4">
              {[
                "Proposal — a governance action or ecosystem change is introduced.",
                "Review — the action is reviewed through governance logic.",
                "Approval — authorized governance participants approve or reject the action.",
                "Timelock — sensitive actions can wait before execution.",
                "Execution — approved actions are executed through the governance layer.",
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
              NON Board aims to become the constitutional coordination layer of
              the SkodriNΩN ecosystem. The long-term direction is identity-aware
              governance, transparent proposal execution, signer coordination,
              emergency protection and constitutional legitimacy for future
              protocol modules.
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}