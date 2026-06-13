import {
  FileText,
} from "lucide-react";

import ApprovalDocPage from "../_components/ApprovalDocPage";

const SECTIONS = [
  {
    "title": "1. Acceptance of terms",
    "body": [
      "By accessing or using NexusNON.ID, non.ID or any related SkodriNΩN ecosystem service, you agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, you must discontinue use of the service.",
      "Continued use constitutes acceptance of future updates and modifications where permitted by applicable law."
    ]
  },
  {
    "title": "2. Ecosystem structure",
    "body": [
      "SkodriNΩN is the ecosystem framework.",
      "NexusNON.ID functions as the Identity Layer.",
      "non.ID functions as the Approval Layer.",
      "The Genesis Contract serves as the source of truth for Capsule Identity records.",
      "The Capsule Identity remains the identity of the user."
    ]
  },
  {
    "title": "3. Eligibility and lawful use",
    "body": [
      "Users must be legally capable of entering into binding agreements under applicable law.",
      "Users are responsible for ensuring compliance with local laws applicable to their jurisdiction.",
      "Access may be restricted where prohibited by law."
    ]
  },
  {
    "title": "4. Capsule ownership",
    "body": [
      "Ownership of a Capsule remains attached to the Capsule owner.",
      "The ecosystem does not transfer identity ownership through use of non.ID.",
      "Approval devices do not replace Capsule ownership.",
      "Recovery mechanisms restore authorization access and do not create new identities."
    ]
  },
  {
    "title": "5. User responsibilities",
    "body": [
      "Users are responsible for protecting their device, Approval Password, Anti-Phishing information and access to registered communication channels.",
      "Users are responsible for reviewing requests before approval.",
      "Users are responsible for maintaining lawful and secure use of the service."
    ]
  },
  {
    "title": "6. Approval authorization",
    "body": [
      "Approval requests represent user authorization events.",
      "Approving a request constitutes user consent for that action.",
      "Denied requests are not executed.",
      "Users must verify approval details before authorizing requests."
    ]
  },
  {
    "title": "7. QR login",
    "body": [
      "QR Login requests must be initiated and approved by the user.",
      "Users must not approve QR Login requests they do not recognize.",
      "Unauthorized approval may result in account access by unintended parties."
    ]
  },
  {
    "title": "8. Security obligations",
    "body": [
      "Users must take reasonable measures to secure their devices.",
      "Users must report suspected security incidents.",
      "Users should immediately revoke or replace compromised approval devices where supported.",
      "Users should verify Anti-Phishing information before approving sensitive requests."
    ]
  },
  {
    "title": "9. Prohibited activities",
    "body": [
      "Users may not attempt unauthorized access to Capsules belonging to other users.",
      "Users may not abuse verification systems.",
      "Users may not use the ecosystem for unlawful activity.",
      "Users may not interfere with ecosystem security mechanisms."
    ]
  },
  {
    "title": "10. Service availability",
    "body": [
      "Services may be modified, upgraded, suspended or discontinued.",
      "The ecosystem does not guarantee uninterrupted availability.",
      "Maintenance, security updates and infrastructure changes may temporarily affect service access."
    ]
  },
  {
    "title": "11. Risk disclosure",
    "body": [
      "Blockchain systems involve technical risks including software defects, network interruptions, third-party infrastructure failures and user error.",
      "Users accept responsibility for understanding the risks associated with blockchain-based systems.",
      "Approved actions may not always be reversible."
    ]
  },
  {
    "title": "12. Limitation of liability",
    "body": [
      "To the maximum extent permitted by applicable law, SkodriNΩN and associated operators shall not be liable for indirect, incidental, special or consequential damages.",
      "Users remain responsible for actions approved through their registered approval devices.",
      "Nothing in these terms excludes liability where exclusion is prohibited by law."
    ]
  },
  {
    "title": "13. Governing law",
    "body": [
      "These Terms shall be interpreted in accordance with applicable laws of Sweden unless otherwise required by mandatory law.",
      "Certain ecosystem activities may involve operations connected to Kosovo and other jurisdictions.",
      "Users remain responsible for legal compliance in their own jurisdiction."
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

export default function TermsOfServicePage() {
  return (
    <ApprovalDocPage
      badge="Official Terms of Service"
      title="Terms of Service"
      subtitle="Official terms governing use of SkodriNΩN ecosystem services, NexusNON.ID Identity Layer and non.ID Approval Layer."
      effective="Mainnet readiness version — Sweden governing-law framework"
      icon={FileText}
      sections={SECTIONS}
      contacts={CONTACTS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
