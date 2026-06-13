import {
  HelpCircle,
} from "lucide-react";

import ApprovalDocPage from "../_components/ApprovalDocPage";

const SECTIONS = [
  {
    "title": "1. Purpose of support",
    "body": [
      "Support exists to help users understand, register, operate and protect their non.ID approval device.",
      "Support does not create, transfer or own Capsule Identity. The Capsule remains the identity. non.ID only provides approval-layer assistance.",
      "Support requests are handled according to issue category, urgency, security relevance and available information supplied by the user."
    ]
  },
  {
    "title": "2. What support can help with",
    "body": [
      "Support may assist with device registration, Email OTP problems, Anti-Phishing Code verification problems, local approval password guidance, QR login issues, approval request visibility, local app history questions and general non.ID usage.",
      "Support may guide a user to the correct recovery, verification, security or legal channel when the issue requires a specialized procedure.",
      "Support will never ask users to disclose their Approval Password, private keys, seed phrases or sensitive secrets."
    ]
  },
  {
    "title": "3. Information to include in a support request",
    "body": [
      "Users should include Capsule ID, Capsule Wallet address if available, device type, operating system, app version, approximate time of the issue and a clear description of what happened.",
      "Users should not include Approval Passwords, private authentication secrets or unnecessary personal information.",
      "Screenshots may be useful if they do not expose secrets or sensitive personal information."
    ]
  },
  {
    "title": "4. Response classification",
    "body": [
      "General questions are handled through support@skodrinon.com or contact@skodrinon.com.",
      "Security incidents must be reported to security@skodrinon.com.",
      "Recovery and device transfer issues must be reported to recovery@skodrinon.com.",
      "Identity verification matters must be reported to verification@skodrinon.com.",
      "Legal and privacy matters must be sent to legal@skodrinon.com."
    ]
  },
  {
    "title": "5. User responsibility during support",
    "body": [
      "Users remain responsible for reviewing approval requests and protecting their devices.",
      "Support cannot reverse a user-approved authorization if the underlying action has already been executed by the relevant system or network.",
      "Users should deny unknown requests and immediately report suspected phishing or unauthorized access."
    ]
  },
  {
    "title": "6. Official channel rule",
    "body": [
      "Only the official SkodriNΩN email channels listed on this page should be trusted for support-related communication.",
      "Messages from unofficial accounts, social media impersonators or unknown domains should be treated as suspicious.",
      "SkodriNΩN will not request an Approval Password, private key, seed phrase or device unlock code through email."
    ]
  }
];

const CONTACTS = [
  {
    "label": "Support",
    "email": "support@skodrinon.com",
    "subject": "non.ID Support Request"
  },
  {
    "label": "General Contact",
    "email": "contact@skodrinon.com",
    "subject": "SkodriNON General Contact"
  },
  {
    "label": "Verification",
    "email": "verification@skodrinon.com",
    "subject": "non.ID Verification Help"
  },
  {
    "label": "Recovery",
    "email": "recovery@skodrinon.com",
    "subject": "non.ID Recovery Help"
  }
];

const RELATED_LINKS = [
  {
    "label": "Privacy Policy",
    "href": "/developers/architecture/approval/privacy-policy"
  },
  {
    "label": "Terms of Service",
    "href": "/developers/architecture/approval/terms-of-service"
  },
  {
    "label": "Security Center",
    "href": "/developers/architecture/approval/security-center"
  }
];

export default function SupportPage() {
  return (
    <ApprovalDocPage
      badge="Official Support Center"
      title="non.ID Support"
      subtitle="Official support procedures for the non.ID Approval Layer, including device registration, approval requests, QR login, recovery assistance, verification issues and user communication channels."
      effective="Mainnet readiness version — Sweden and Kosovo operational context"
      icon={HelpCircle}
      sections={SECTIONS}
      contacts={CONTACTS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
