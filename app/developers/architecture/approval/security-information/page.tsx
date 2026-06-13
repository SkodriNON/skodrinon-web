import {
  Lock,
} from "lucide-react";

import ApprovalDocPage from "../_components/ApprovalDocPage";

const SECTIONS = [
  {
    "title": "1. General security rule",
    "body": [
      "Never approve a request that you do not recognize.",
      "Never share your Approval Password, Anti-Phishing Code, private keys, seed phrases or device unlock codes.",
      "Use only official SkodriNΩN, NexusNON.ID and non.ID communication channels."
    ]
  },
  {
    "title": "2. Phishing risks",
    "body": [
      "Phishing attempts may imitate login pages, QR codes, support messages or approval requests.",
      "Users should verify domains, request details and Anti-Phishing information before approving anything.",
      "Suspicious requests should be denied and reported to security@skodrinon.com."
    ]
  },
  {
    "title": "3. Social engineering",
    "body": [
      "Attackers may attempt to pressure users into approving requests quickly.",
      "Support will never ask a user to approve an unknown request.",
      "Users should slow down, verify context and deny requests that do not match their own action."
    ]
  },
  {
    "title": "4. Unauthorized approvals",
    "body": [
      "An approval made on the user's registered device may be treated as authorization by the user.",
      "If a user believes an approval was unauthorized, the incident should be reported immediately.",
      "Include Capsule ID, request ID if available, approximate time and device information."
    ]
  },
  {
    "title": "5. Device compromise",
    "body": [
      "If a phone is lost, stolen, malware-infected or accessed by another person, approval access may be at risk.",
      "Users should begin recovery or device replacement and report the issue.",
      "Removing local app data does not delete the Capsule Identity."
    ]
  },
  {
    "title": "6. Vulnerability reporting",
    "body": [
      "Security researchers and users should report suspected vulnerabilities to security@skodrinon.com.",
      "Reports should include a clear description, affected component, reproduction steps if safe and contact information.",
      "Do not exploit, access or damage other users' Capsules or systems."
    ]
  }
];

const CONTACTS = [
  {
    "label": "Security",
    "email": "security@skodrinon.com",
    "subject": "non.ID Security Report"
  },
  {
    "label": "Recovery",
    "email": "recovery@skodrinon.com",
    "subject": "non.ID Recovery or Device Security"
  },
  {
    "label": "Legal",
    "email": "legal@skodrinon.com",
    "subject": "Legal and Security Notice"
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

export default function SecurityInformationPage() {
  return (
    <ApprovalDocPage
      badge="Security Information"
      title="Security Information"
      subtitle="Operational security guidance for phishing prevention, device compromise, unauthorized approvals, QR login risks, vulnerability reporting and user-protection procedures."
      effective="Mainnet readiness version — user security policy"
      icon={Lock}
      sections={SECTIONS}
      contacts={CONTACTS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
