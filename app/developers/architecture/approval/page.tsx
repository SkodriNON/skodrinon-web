import {
  ArrowLeft,
  HelpCircle,
  ShieldCheck,
  RotateCcw,
  BadgeCheck,
  FileText,
  Lock,
  ExternalLink,
} from "lucide-react";

const SECTIONS = [
  {
    title: "Support",
    href: "/developers/architecture/approval/support",
    icon: HelpCircle,
    description:
      "Official support channels and procedures for non.ID users, device registration, approvals, QR login and account assistance.",
  },
  {
    title: "Security Center",
    href: "/developers/architecture/approval/security-center",
    icon: ShieldCheck,
    description:
      "Security model for the non.ID Approval Layer, biometric approval, local password, anti-phishing and device protection.",
  },
  {
    title: "Recovery & device transfer",
    href: "/developers/architecture/approval/recovery-device-transfer",
    icon: RotateCcw,
    description:
      "Official process for lost devices, new devices, approval access recovery and Capsule continuity.",
  },
  {
    title: "Identity verification",
    href: "/developers/architecture/approval/identity-verification",
    icon: BadgeCheck,
    description:
      "Verification rules for Capsule ownership, Email OTP, Anti-Phishing Code, QR login and approval authorization.",
  },
  {
    title: "Privacy Policy",
    href: "/developers/architecture/approval/privacy-policy",
    icon: FileText,
    description:
      "Privacy, local storage, Capsule-protected identity proofs, approval history and GDPR-oriented user rights.",
  },
  {
    title: "Terms of Service",
    href: "/developers/architecture/approval/terms-of-service",
    icon: FileText,
    description:
      "Official use terms, user responsibilities, approval obligations, legal framework and risk disclosures.",
  },
  {
    title: "Security information",
    href: "/developers/architecture/approval/security-information",
    icon: Lock,
    description:
      "Threat guidance, incident reporting, phishing prevention, unauthorized approval handling and vulnerability reporting.",
  },
];

export default function ApprovalLayerPage() {
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

        <section className="rounded-[40px] border border-cyan-400/10 bg-[#07101f]/80 p-6 shadow-[0_0_90px_rgba(34,211,238,0.08)] backdrop-blur-2xl sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
            Approval Layer
          </p>

          <h1 className="mt-4 text-[clamp(2.4rem,7vw,5rem)] font-black leading-[0.9] tracking-[-0.07em]">
            non.ID Support & Compliance
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            non.ID is the Approval Layer of the SkodriNΩN ecosystem. It connects approved devices to NexusNON.ID Capsule Identity and provides authorization, QR login, verification, recovery confirmation and local approval history.
          </p>

          <div className="mt-8 rounded-[28px] border border-cyan-400/10 bg-cyan-400/[0.04] p-5">
            <p className="text-sm leading-7 text-gray-300">
              Architecture principle: SkodriNΩN = ecosystem, NexusNON.ID = Identity Layer, Capsule = Identity, Genesis Contract = Source of Truth, Capsule Wallet = Sovereign Account, non.ID = Approval Layer.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SECTIONS.map((section) => {
              const Icon = section.icon;

              return (
                <a
                  key={section.href}
                  href={section.href}
                  className="group rounded-[30px] border border-white/10 bg-black/25 p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h2 className="text-2xl font-black">{section.title}</h2>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {section.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-300">
                    Open
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
