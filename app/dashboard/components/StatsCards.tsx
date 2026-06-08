"use client";

type StatsCardsProps = {

  ethPrice: number;

  totalStaked?: number;

  activeUsers?: number;

  proposalCount?: number;

  loading?: boolean;
};

export default function StatsCards({

  ethPrice,

  totalStaked = 0,

  activeUsers = 0,

  proposalCount = 0,

  loading = false,

}: StatsCardsProps) {

  // =====================================================
  // DATA
  // =====================================================

  const cards = [

    [

      `$${ethPrice.toLocaleString()}`,

      "ETH Price",

      "text-cyan-400",
    ],

    [

      `${totalStaked.toLocaleString()}`,

      "Total Staked",

      "text-purple-400",
    ],

    [

      `${activeUsers.toLocaleString()}`,

      "Active Users",

      "text-green-400",
    ],

    [

      `${proposalCount.toLocaleString()}`,

      "DAO Proposals",

      "text-blue-400",
    ],

    [

      "Ethereum",

      "Network",

      "text-orange-400",
    ],
  ];

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-8">

      {cards.map(

        ([

          value,
          label,
          color,

        ]) => (

          <div

            key={String(label)}

            className="rounded-3xl border border-blue-500/10 bg-[#07101f]/80 p-5 transition-all duration-300 hover:border-blue-500/30 relative overflow-hidden"

          >

            {/* SHIMMER */}

            {loading && (

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />

            )}

            {/* LABEL */}

            <p className="text-gray-500 mb-3 text-sm relative z-10">

              {label}

            </p>

            {/* VALUE */}

            {

              loading ? (

                <div className="h-8 w-28 rounded-xl bg-[#132238] animate-pulse relative z-10" />

              ) : (

                <h4 className={`text-xl sm:text-2xl font-bold break-words relative z-10 ${color}`}>

                  {value}

                </h4>

              )

            }

            {/* FOOTER */}

            <div className="mt-5 flex items-center justify-between relative z-10">

              <div className="flex items-center gap-2">

                <div className={`w-2 h-2 rounded-full ${color.replace("text", "bg")}`} />

                <span className="text-xs text-gray-500">

                  Live

                </span>

              </div>

              <span className="text-xs text-gray-600">

                Protocol

              </span>

            </div>

          </div>
        )
      )}

    </div>
  );
}