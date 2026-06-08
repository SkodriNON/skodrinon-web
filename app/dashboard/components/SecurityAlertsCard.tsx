"use client";

import {
  mockSecurityAlerts,
} from "../data/mockSecurityAlerts";

export default function SecurityAlertsCard() {

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Security Alerts

        </h3>

        <div className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-300">

          SECURITY ENGINE

        </div>

      </div>

      <div className="space-y-5">

        {mockSecurityAlerts.map((alert) => (

          <div

            key={alert.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Alert Type

                </p>

                <p className="text-lg font-semibold text-cyan-300">

                  {alert.title}

                </p>

              </div>

              <div className={`rounded-full px-3 py-1 text-xs border ${
                alert.severity === "Low"

                  ? "border-green-500/20 bg-green-500/10 text-green-300"

                  : alert.severity === "Medium"

                  ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"

                  : "border-red-500/20 bg-red-500/10 text-red-300"
              }`}>

                {alert.severity}

              </div>

            </div>

            <div className="space-y-3">

              <p className="text-sm text-gray-300">

                {alert.description}

              </p>

              <div className="flex items-center justify-between">

                <p className="text-xs text-gray-500">

                  {alert.timestamp}

                </p>

                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}