import {
  RotateCcw,
} from "lucide-react";

import ApprovalDocPage from "../_components/ApprovalDocPage";

const SECTIONS = [
  {
    "title": "1. Recovery principle",
    "body": [
      "Recovery restores approval access. Recovery does not create a new identity.",
      "The Capsule remains the identity. The Genesis Contract remains the source of truth. non.ID reconnects the approval layer to the user's authorized device flow.",
      "Identity continuity remains attached to the original Capsule and Capsule Wallet."
    ]
  },
  {
    "title": "2. When recovery is needed",
    "body": [
      "Recovery may be required when a device is lost, stolen, replaced, reset or no longer able to approve requests.",
      "Recovery may also be required when the user intentionally transfers approval capability to a new phone.",
      "If unauthorized access is suspected, the user should treat the event as a security incident and contact security@skodrinon.com in addition to recovery@skodrinon.com."
    ]
  },
  {
    "title": "3. Device transfer",
    "body": [
      "When moving to a new device, the user should register the new non.ID app using the official recovery or registration process.",
      "The user must verify Capsule-linked information such as email, phone and Anti-Phishing Code before the device can be trusted for approvals.",
      "Old devices should be removed or replaced where the application and ecosystem support that operation."
    ]
  },
  {
    "title": "4. Lost or compromised device",
    "body": [
      "If a registered device is lost or compromised, the user should stop approving requests and begin recovery immediately.",
      "Users should monitor approval history where available and report suspicious events.",
      "Removing a device from local app storage does not delete the Capsule Identity."
    ]
  },
  {
    "title": "5. What recovery does not do",
    "body": [
      "Recovery does not erase the Capsule Identity.",
      "Recovery does not transfer identity ownership to SkodriNΩN.",
      "Recovery does not bypass legitimate verification requirements.",
      "Recovery does not guarantee reversal of actions previously approved by the user."
    ]
  },
  {
    "title": "6. Required information for recovery support",
    "body": [
      "Users should provide Capsule ID, Capsule Wallet address if available, registered email, registered phone, device type and a clear description of the situation.",
      "Users must not disclose Approval Passwords, private keys, seed phrases or device unlock codes.",
      "Recovery support may require additional verification steps before guidance is provided."
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

export default function RecoveryDeviceTransferPage() {
  return (
    <ApprovalDocPage
      badge="Recovery Policy"
      title="Recovery & Device Transfer"
      subtitle="Official recovery and device-transfer policy for reconnecting non.ID approval capability to an existing Capsule Identity without replacing or recreating the identity."
      effective="Mainnet readiness version — recovery operating policy"
      icon={RotateCcw}
      sections={SECTIONS}
      contacts={CONTACTS}
      relatedLinks={RELATED_LINKS}
    />
  );
}
