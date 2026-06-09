import {
  GitBranch,
  FileText,
  Network,
  Code2,
  Braces,
  ArrowLeft,
} from "lucide-react";

const ITEMS = [
  {
    title: "Contracts",
    desc: "Deployment addresses, contract roles and verified protocol components.",
    icon: GitBranch,
    status: "Preparing",
    link: "#",
  },
  {
    title: "Documentation",
    desc: "Technical documentation for ecosystem modules, identity layers and governance logic.",
    icon: FileText,
    status: "Preparing",
    link: "#",
  },
  {
    title: "Architecture",
    desc: "High-level structure connecting Identity, Board, Economy and AI infrastructure.",
    icon: Network,
    status: "Active",
    link: "/developers/architecture",
  },
  {
    title: "SDK",
    desc: "Future developer toolkit for integrations and external applications.",
    icon: Code2,
    status: "Future",
    link: "#",
  },
  {
    title: "API",
    desc: "Future API access for ecosystem data, identity state and module status.",
    icon: Braces,
    status: "Future",
    link: "#",
  },
];

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-5 py-6 text-white">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/10 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Ecosystem
        </a>

        <section className="rounded-[36px] border border-cyan-400/10 bg-[#07101f]/70 p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-2xl sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
            Builder Layer
          </p>

          <h1 className="mt-4 text-[clamp(2.4rem,7vw,5rem)] font-black leading-[0.9] tracking-[-0.07em]">
            Developer Portal
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            Technical access point for builders, auditors and contributors
            exploring the SkodriNΩN ecosystem. Contracts, architecture,
            documentation and future API/SDK access will be published here as
            the system evolves from testnet toward mainnet.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {ITEMS.map((item) => {
              const Icon = item.icon;
              const disabled = item.link === "#";

              return (
                <a
                  key={item.title}
                  href={item.link}
                  className={`block rounded-[28px] border border-white/10 bg-black/25 p-6 transition ${
                    disabled
                      ? "cursor-default opacity-80"
                      : "hover:border-cyan-400/30 hover:bg-cyan-400/5"
                  }`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-black">{item.title}</h2>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.desc}
                  </p>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
                    {item.status}
                  </p>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}