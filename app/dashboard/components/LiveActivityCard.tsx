"use client";

import {
  mockActivity,
} from "../data/mockActivity";

export default function LiveActivityCard() {

  return (

    <div className="rounded-3xl border border-purple-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Live Activity

        </h3>

        <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-xs text-green-300">

            LIVE

          </span>

        </div>

      </div>

      <div className="space-y-4">

        {mockActivity.map((activity) => (

          <div

            key={activity.id}

            className="rounded-2xl border border-purple-500/10 bg-[#081222] p-4"

          >

            <div className="flex items-center justify-between mb-3">

              <div>

                <p className="font-bold">

                  {activity.type}

                </p>

                <p className="text-xs text-gray-400 mt-1">

                  {activity.pair}

                </p>

              </div>

              <div className="text-right">

                <p className="font-semibold text-cyan-300">

                  {activity.amount}

                </p>

                <p className="text-xs text-gray-500 mt-1">

                  {activity.time}

                </p>

              </div>

            </div>

            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-500">

                Protocol Activity

              </p>

              <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">

                {activity.status}

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}