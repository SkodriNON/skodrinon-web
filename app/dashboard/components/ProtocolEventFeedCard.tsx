"use client";

import {
  mockProtocolEvents,
} from "../data/mockProtocolEvents";

export default function ProtocolEventFeedCard() {

  return (

    <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Protocol Event Feed

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          LIVE EVENTS

        </div>

      </div>

      <div className="space-y-5">

        {mockProtocolEvents.map((event) => (

          <div

            key={event.id}

            className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5"

          >

            <div className="flex items-center justify-between mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Event Type

                </p>

                <p className="text-lg font-semibold text-cyan-300">

                  {event.type}

                </p>

              </div>

              <div className={`rounded-full px-3 py-1 text-xs border ${
                event.status === "Confirmed"

                  ? "border-green-500/20 bg-green-500/10 text-green-300"

                  : "border-yellow-500/20 bg-yellow-500/10 text-yellow-300"
              }`}>

                {event.status}

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Pair

                </p>

                <p className="text-sm font-semibold text-pink-300">

                  {event.pair}

                </p>

              </div>

              <div>

                <p className="text-xs text-gray-400 mb-1">

                  Value

                </p>

                <p className="text-sm font-semibold text-yellow-300">

                  {event.value}

                </p>

              </div>

            </div>

            <div className="flex items-center justify-between">

              <p className="text-xs text-gray-500">

                {event.timestamp}

              </p>

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}