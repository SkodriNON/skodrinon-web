import {
  ShieldCheck,
} from "lucide-react";

import ApprovalDocPage from "../_components/ApprovalDocPage";

const SECTIONS = [
  {
    "title": "1. Security architecture",
    "body": [
      "SkodriNΩN is the ecosystem. NexusNON.ID is the Identity Layer. non.ID is the Approval Layer.",
      "Capsule = Identity. Genesis Contract = Source of Truth. Capsule Wallet = Sovereign Account. non.ID = Approval Layer.",
      "non.ID does not replace the Capsule. It confirms, approves, denies and protects actions connected to an existing Capsule Identity."
    ]
  },
  {
    "title": "2. Approval device security",
    "body": [
      "The registered non.ID device is an authorization device. It should be protected with the operating system lock screen, biometric protection where available and the local Approval Password.",
      "If the device is lost, stolen, compromised or accessed by another person, the user should begin recovery or device replacement immediately.",
      "Users should not leave approval requests unattended or approve requests without verifying their origin and purpose."
    ]
  },
  {
    "title": "3. Approval Password",
    "body": [
      "The Approval Password protects local authorization actions inside the non.ID app.",
      "The Approval Password is a local device credential and should not be shared with anyone.",
      "SkodriNΩN support, security, recovery and verification teams will never ask users to reveal their Approval Password."
    ]
  },
  {
    "title": "4. Biometric authorization",
    "body": [
      "non.ID may use Face ID, fingerprint or equivalent local biometric authentication provided by the device operating system.",
      "Biometric data is managed by the user's device and operating system. SkodriNΩN does not receive or store biometric templates.",
      "If biometric authentication fails, the app may require the local Approval Password."
    ]
  },
  {
    "title": "5. Anti-Phishing Code",
    "body": [
      "The Anti-Phishing Code is used to help verify that an approval or registration flow belongs to the user's expected Capsule-related process.",
      "A mismatch, unknown value or unexpected request should be treated as a possible phishing attempt.",
      "Users should deny suspicious requests and report them to security@skodrinon.com."
    ]
  },
  {
    "title": "6. QR login security",
    "body": [
      "QR login must only be approved when the user intentionally initiated the login session.",
      "Users must not scan or approve QR codes from untrusted pages, screenshots, messages or unknown persons.",
      "Approving an unknown QR login can authorize access to an unintended session."
    ]
  },
  {
    "title": "7. Local approval history",
    "body": [
      "Approval History is stored locally on the registered device and is intended for user visibility and audit awareness.",
      "Local history is not the identity source and is not a centralized identity database.",
      "Deleting the app, resetting the device or clearing local storage may remove local approval history."
    ]
  },
  {
    "title": "8. Incident reporting",
    "body": [
      "Security incidents should be reported to security@skodrinon.com as soon as possible.",
      "Include Capsule ID, device type, approximate time, suspected request ID if available and a description of the event.",
      "Do not send Approval Passwords, device unlock codes or private secrets."
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

export default function SecurityCenterPage() {
  return (
    <ApprovalDocPage
      badge="Security Center"
      title="non.ID Security Center"
      subtitle="Security rules and operating principles for protecting non.ID approval devices, Capsule-linked authorization, QR login, local credentials, Anti-Phishing Code and user-controlled approvals."
      effective="Mainnet readiness version — security operating policy"
      icon={ShieldCheck}
      sections={SECTIONS}
      contacts={CONTACTS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
