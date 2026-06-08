"use client";

const activities = [

  {

    type:
      "Swap",

    message:
      "Large ETH → SKNON swap executed.",

    time:
      "2 min ago",
  },

  {

    type:
      "Governance",

    message:
      "Proposal #14 entered voting stage.",

    time:
      "8 min ago",
  },

  {

    type:
      "Treasury",

    message:
      "$420K added to protocol reserves.",

    time:
      "12 min ago",
  },

  {

    type:
      "AI",

    message:
      "AI flagged elevated market volatility.",

    time:
      "21 min ago",
  },
];

export default function ProtocolActivityFeed() {

  return (

    <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Protocol Activity

      </h3>

      <div className="space-y-4">

        {activities.map(

          (activity, index) => (

            <div

              key={index}

              className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4"

            >

              <div className="flex items-center justify-between mb-2">

                <p className="font-semibold">

                  {activity.type}

                </p>

                <p className="text-xs text-gray-500">

                  {activity.time}

                </p>

              </div>

              <p className="text-sm text-gray-400 leading-relaxed">

                {activity.message}

              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}