import {
  FileText,
} from "lucide-react";

import ApprovalDocPage from "../_components/ApprovalDocPage";

const SECTIONS = [
  {
    "title": "1. Introduction",
    "body": [
      "This Privacy Policy explains how the SkodriNΩN ecosystem processes, protects and manages information connected to NexusNON.ID and non.ID.",
      "SkodriNΩN is the ecosystem framework. NexusNON.ID is the Identity Layer. non.ID is the Approval Layer.",
      "The architecture is designed around user-controlled identity, reduced public exposure of personal information and secure approval-based authorization."
    ]
  },
  {
    "title": "2. Core architecture",
    "body": [
      "NexusNON.ID operates through the principle that Capsule = Identity.",
      "The Genesis Contract is the source of truth for Capsule Identity status, Capsule Wallet ownership and public operational metadata.",
      "non.ID does not create or replace identity. non.ID provides approval, authorization, QR login, verification and recovery confirmation functionality connected to an existing Capsule Identity."
    ]
  },
  {
    "title": "3. Information used during registration",
    "body": [
      "During Capsule creation or non.ID device registration, the system may process email address, phone number, name or username, Anti-Phishing Code, Email OTP, Capsule ID and Capsule Wallet information.",
      "This information is used for identity verification, Capsule discovery, device registration, approval authorization and user protection.",
      "The Approval Layer does not operate as a centralized identity database."
    ]
  },
  {
    "title": "4. Capsule Identity protection",
    "body": [
      "Sensitive identity attributes are protected through cryptographic hashes, encrypted identity records, proof references and authorization controls.",
      "The Capsule may contain identity proof hashes and encrypted identity records required for verification and recovery workflows.",
      "Public identity exposure is minimized by design. The system is not intended to expose raw email, phone number, Anti-Phishing Code or approval credentials publicly."
    ]
  },
  {
    "title": "5. Local device storage",
    "body": [
      "non.ID stores limited operational information locally on the user's registered device.",
      "Local information may include device registration status, approval history, selected language, security preferences, profile photo and session-related state.",
      "Approval History is stored locally on the user's device. If the application is deleted, the device is reset, or local storage is cleared, local approval history may be removed."
    ]
  },
  {
    "title": "6. Approval Password and biometrics",
    "body": [
      "The Approval Password is a local device credential used to protect approval actions inside non.ID.",
      "non.ID may support Face ID, fingerprint or equivalent local biometric authentication through the user's operating system.",
      "SkodriNΩN does not receive or store biometric templates."
    ]
  },
  {
    "title": "7. QR login and approval requests",
    "body": [
      "non.ID may be used to approve QR login requests, dashboard sessions, verification requests and authorization actions.",
      "Users should approve only requests they recognize and intentionally authorize.",
      "Approval of a request represents user authorization for that action."
    ]
  },
  {
    "title": "8. Data retention",
    "body": [
      "On-chain Capsule public metadata may remain available according to blockchain network behavior.",
      "Local app data remains on the user's device until removed by the user, application removal, device reset or storage clearing.",
      "Operational records may be retained where necessary for security, fraud prevention, legal compliance or service integrity."
    ]
  },
  {
    "title": "9. User rights",
    "body": [
      "Users may request information, correction, deletion assistance, recovery support or privacy-related clarification by contacting the official channels listed in this policy.",
      "Where applicable under Swedish, European Economic Area or other relevant law, users may have rights to access, rectification, erasure, restriction, objection and data portability.",
      "Some blockchain-related records may not be technically removable due to the nature of distributed ledger systems."
    ]
  },
  {
    "title": "10. Jurisdiction and compliance",
    "body": [
      "The SkodriNΩN ecosystem is structured with primary legal consideration for Sweden and ecosystem presence involving Kosovo.",
      "This policy is intended to align with Swedish and European data protection principles where applicable.",
      "Users remain responsible for complying with laws applicable in their own jurisdiction."
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

export default function PrivacyPolicyPage() {
  return (
    <ApprovalDocPage
      badge="Official Privacy Policy"
      title="non.ID Privacy Policy"
      subtitle="Privacy policy for the SkodriNΩN ecosystem, NexusNON.ID Identity Layer and non.ID Approval Layer, including Capsule-protected identity proofs, local device storage and user rights."
      effective="Mainnet readiness version — Sweden and Kosovo operational context"
      icon={FileText}
      sections={SECTIONS}
      contacts={CONTACTS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
