import {
  ArrowLeft,
  Mail,
  ShieldCheck,
  ExternalLink,
  LucideIcon,
} from "lucide-react";

export type DocSection = {
  title: string;
  body: string[];
};

export type ContactItem = {
  label: string;
  email: string;
  subject: string;
};

export type RelatedLink = {
  label: string;
  href: string;
};

export default function ApprovalDocPage({
  badge,
  title,
  subtitle,
  effective,
  icon: Icon = ShieldCheck,
  sections,
  contacts,
  relatedLinks = [],
}: {
  badge: string;
  title: string;
  subtitle: string;
  effective: string;
  icon?: LucideIcon;
  sections: DocSection[];
  contacts: ContactItem[];
  relatedLinks?: RelatedLink[];
}) {
  return (
    <main className="min-h-screen bg-[#020617] px-5 py-6 text-white">
      <div className="mx-auto max-w-6xl">
        <a
          href="/developers/architecture/approval"
          className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/10 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Approval Layer
        </a>

        <section className="rounded-[40px] border border-cyan-400/10 bg-[#07101f]/80 p-6 shadow-[0_0_90px_rgba(34,211,238,0.08)] backdrop-blur-2xl sm:p-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
            <Icon className="h-8 w-8" />
          </div>

          <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
            {badge}
          </p>

          <h1 className="mt-4 text-[clamp(2.4rem,7vw,5rem)] font-black leading-[0.9] tracking-[-0.07em]">
            {title}
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-6 rounded-[26px] border border-white/10 bg-black/25 p-5">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
              Effective version
            </p>
            <p className="mt-2 text-sm font-bold text-white">
              {effective}
            </p>
          </div>

          

          {relatedLinks.length > 0 && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-black text-cyan-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  {item.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}

          <div className="mt-10 grid gap-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[30px] border border-white/10 bg-black/25 p-6"
              >
                <h2 className="text-2xl font-black text-white">
                  {section.title}
                </h2>

                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-gray-400"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[30px] border border-cyan-400/10 bg-cyan-400/[0.04] p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <Mail className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-2xl font-black">
              Official communication channels
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Use only official SkodriNΩN communication channels for support, verification, recovery, legal, security or incident-related matters.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {contacts.map((item) => (
                <a
                  key={`${item.email}-${item.subject}`}
                  href={`mailto:${item.email}?subject=${encodeURIComponent(item.subject)}`}
                  className="rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                >
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                    {item.label}
                  </p>

                  <p className="mt-2 break-all text-sm font-bold text-white">
                    {item.email}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
