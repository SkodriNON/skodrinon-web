"use client";

const whaleTransactions = [

  {

    wallet:
      "0x8F2A...91Ac",

    action:
      "Bought",

    amount:
      "482 ETH",
  },

  {

    wallet:
      "0xAA71...4Fd2",

    action:
      "Sold",

    amount:
      "1.2M SKNON",
  },

  {

    wallet:
      "0x51bC...77Fe",

    action:
      "Moved",

    amount:
      "$4.8M Treasury",
  },
];

export default function WhaleActivityCard() {

  return (

    <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6">

      <h3 className="text-2xl font-bold mb-6">

        Whale Activity

      </h3>

      <div className="space-y-4">

        {whaleTransactions.map(

          (tx, index) => (

            <div

              key={index}

              className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4"

            >

              <div className="flex items-center justify-between mb-2">

                <p className="font-semibold">

                  {tx.wallet}

                </p>

                <p className={`text-sm font-semibold ${
                  tx.action ===
                  "Bought"

                    ? "text-green-400"

                    : tx.action ===
                      "Sold"

                    ? "text-red-400"

                    : "text-yellow-400"
                }`}>

                  {tx.action}

                </p>

              </div>

              <p className="text-sm text-gray-400">

                {tx.amount}

              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}