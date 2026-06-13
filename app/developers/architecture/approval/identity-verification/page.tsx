import {
  BadgeCheck,
} from "lucide-react";

import ApprovalDocPage from "../_components/ApprovalDocPage";

const SECTIONS = [
  {
    "title": "1. Verification purpose",
    "body": [
      "Verification confirms that an approval device, login request or action is connected to the expected Capsule Identity.",
      "Verification does not make non.ID the identity. The Capsule remains the identity and the Genesis Contract remains the source of truth.",
      "non.ID provides authorization and approval confirmation connected to Capsule Identity."
    ]
  },
  {
    "title": "2. Email and phone verification",
    "body": [
      "Email and phone may be used to discover or verify a Capsule during registration and connection flows.",
      "Email OTP may be required before Capsule creation or device registration proceeds.",
      "Users are responsible for maintaining secure access to their registered email and phone channels."
    ]
  },
  {
    "title": "3. Anti-Phishing verification",
    "body": [
      "The Anti-Phishing Code is used as a protection reference for Capsule-linked flows.",
      "Users must verify Anti-Phishing information before approving sensitive actions.",
      "If the Anti-Phishing information does not match the user's expected value, the request should be denied and reported."
    ]
  },
  {
    "title": "4. Approval request verification",
    "body": [
      "Each approval request should be reviewed before approval.",
      "Users should check the service, reason, request ID, Capsule ID and any security indicators displayed by the app.",
      "Approving a request constitutes user authorization for that action."
    ]
  },
  {
    "title": "5. QR login verification",
    "body": [
      "QR login connects a browser or external session to the non.ID approval process.",
      "Users should approve QR login only if they initiated the login and recognize the destination.",
      "Unknown QR requests must be denied."
    ]
  },
  {
    "title": "6. Verification limitations",
    "body": [
      "Verification reduces risk but does not eliminate all risk.",
      "Users remain responsible for device security, credential protection and review of approval requests.",
      "SkodriNΩN may update verification requirements as the ecosystem evolves."
    ]
  }
];

const CONTACTS = [
  {
    "label": "Legal",
    "email": "legal@skodrinon.com",
    "subject": "Legal Request"
  },
  {
    "label": "Support",
    "email": "support@skodrinon.com",
    "subject": "non.ID Support Request"
  },
  {
    "label": "Security",
    "email": "security@skodrinon.com",
    "subject": "Security Related Legal Notice"
  },
  {
    "label": "Verification",
    "email": "verification@skodrinon.com",
    "subject": "Verification Related Legal Notice"
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

export default function IdentityVerificationPage() {
  return (
    <ApprovalDocPage
      badge="Verification Policy"
      title="Identity Verification"
      subtitle="Official verification policy for Capsule-linked email, phone, Anti-Phishing Code, Email OTP, QR login and approval authorization workflows."
      effective="Mainnet readiness version — verification operating policy"
      icon={BadgeCheck}
      sections={SECTIONS}
      contacts={CONTACTS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
