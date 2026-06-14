export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-6 py-10 text-white">
      <section className="mx-auto max-w-5xl rounded-[32px] border border-cyan-400/10 bg-[#07101f]/80 p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] sm:p-10">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
          Official Privacy Policy
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
          non.ID Privacy Policy
        </h1>

        <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base">
          Privacy policy for the SkodriNΩN ecosystem, NexusNON.ID Identity
          Layer and non.ID Approval Layer, including Capsule-protected identity
          proofs, local device storage, QR approval flows, account deletion and
          user rights.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
            Last updated
          </p>
          <p className="mt-2 font-bold text-white">June 2026</p>
        </div>

        <div className="mt-10 grid gap-6">
          <DocSection
            title="1. Introduction"
            body={[
              "This Privacy Policy explains how SkodriNΩN processes, protects and manages information connected to NexusNON.ID and non.ID.",
              "SkodriNΩN is the ecosystem framework. NexusNON.ID is the Identity Layer. non.ID is the Approval Layer.",
              "The architecture is designed around user-controlled identity, reduced public exposure of personal information and secure approval-based authorization.",
            ]}
          />

          <DocSection
            title="2. Information We May Process"
            body={[
              "During identity creation, device registration, verification, recovery or approval flows, the system may process email address, phone number, Capsule ID, Capsule Wallet address, device registration status, Anti-Phishing Code, Email OTP status and approval request metadata.",
              "This information is used for identity verification, account security, Capsule discovery, device registration, QR login, approval authorization, recovery assistance and fraud prevention.",
            ]}
          />

          <DocSection
            title="3. Blockchain and Capsule Identity"
            body={[
              "NexusNON.ID operates through the principle that Capsule = Identity.",
              "Certain Capsule-related records, ownership events, smart contract interactions and public blockchain references may be recorded on blockchain networks.",
              "Blockchain records are generally immutable and cannot be deleted or modified after they are confirmed on-chain.",
            ]}
          />

          <DocSection
            title="4. Local Device Storage"
            body={[
              "non.ID stores limited operational information locally on the user’s device, such as device registration state, approval history, selected language, security preferences and session-related state.",
              "Local approval history may be removed if the user clears app storage, deletes the app, resets the device or removes the device registration inside non.ID.",
            ]}
          />

          <DocSection
            title="5. QR Login and Approval Requests"
            body={[
              "non.ID may be used to approve QR login requests, dashboard sessions, verification requests and authorization actions.",
              "Users should only approve requests they recognize and intentionally authorize.",
              "Approval of a request represents the user’s authorization for that action.",
            ]}
          />

          <DocSection
            title="6. Data Sharing"
            body={[
              "SkodriNΩN does not sell personal information to third parties.",
              "Data may be processed only where required for app functionality, identity verification, security, fraud prevention, legal compliance or service integrity.",
            ]}
          />

          <DocSection
            title="7. Account Deletion"
            body={[
              "Users may request deletion of their account, device registration and associated off-chain information by contacting the official support channels.",
              "After successful verification of the account owner, non.ID device registration, approval device association, local approval history, session information and off-chain account references may be removed or disabled where technically possible.",
              "Certain blockchain records cannot be deleted because public blockchain networks are immutable.",
            ]}
          />

          <DocSection
            title="8. Data Retention"
            body={[
              "Off-chain operational records may be retained only as necessary for security, fraud prevention, legal compliance, recovery support or service integrity.",
              "Local app data remains on the user’s device until removed by the user, app deletion, device reset or storage clearing.",
            ]}
          />

          <DocSection
            title="9. User Rights"
            body={[
              "Users may request information, correction, deletion assistance, recovery support or privacy clarification by contacting the official communication channels.",
              "Where applicable under Swedish, European Economic Area, Kosovo or other relevant law, users may have rights to access, rectification, erasure, restriction, objection and data portability.",
            ]}
          />

          <DocSection
            title="10. Contact"
            body={[
              "Support: support@skodrinon.com",
              "Legal: legal@skodrinon.com",
              "Security: security@skodrinon.com",
              "Verification: verification@skodrinon.com",
              "Founder contact: founder@skodrinon.com",
            ]}
          />
        </div>
      </section>
    </main>
  )
}

function DocSection({
  title,
  body,
}: {
  title: string
  body: string[]
}) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-black/25 p-6">
      <h2 className="text-2xl font-black text-white">{title}</h2>

      <div className="mt-4 grid gap-4">
        {body.map((item) => (
          <p key={item} className="text-sm leading-7 text-gray-400">
            {item}
          </p>
        ))}
      </div>
    </article>
  )
}