"use client";

const alerts = [

  {

    type:
      "Whale Movement",

    message:
      "Large ETH transfer detected to treasury.",

    level:
      "warning",
  },

  {

    type:
      "Governance",

    message:
      "New DAO proposal reached quorum.",

    level:
      "success",
  },

  {

    type:
      "AI Risk",

    message:
      "AI detected elevated DeFi volatility.",

    level:
      "danger",
  },
];

export default function ProtocolAlertsCard() {

  return (

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Protocol Alerts

      </h3>

      <div className="space-y-4">

        {alerts.map(

          (alert, index) => (

            <div

              key={index}

              className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4"

            >

              <div className="flex items-center justify-between mb-2">

                <p className="font-semibold">

                  {alert.type}

                </p>

                <div className={`w-3 h-3 rounded-full ${
                  alert.level ===
                  "success"

                    ? "bg-green-400"

                    : alert.level ===
                      "warning"

                    ? "bg-yellow-400"

                    : "bg-red-400"
                }`} />

              </div>

              <p className="text-sm text-gray-400 leading-relaxed">

                {alert.message}

              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}