type TopbarProps = {

  isConnected: boolean;

  address?: string;

  connect: any;

  disconnect: any;

  connectors: readonly any[];

  walletLoading?: boolean;
};

export default function Topbar({

  isConnected,

  address,

  connect,

  disconnect,

  connectors,

  walletLoading,

}: TopbarProps) {

  // =====================================================
  // WALLET ACTION
  // =====================================================

  const handleWallet = () => {

    if (walletLoading) {
      return;
    }

    if (isConnected) {

      disconnect();

      return;
    }

    const connector =
      connectors?.[0];

    if (!connector) {

      console.error(
        "No wallet connector available"
      );

      return;
    }

    connect({
      connector,
    });
  };

  // =====================================================
  // MULTICHAIN NETWORKS
  // =====================================================

  const networks = [

    [
      "Ethereum",
      "Online",
      "bg-blue-400",
    ],

    [
      "Arbitrum",
      "Synced",
      "bg-cyan-400",
    ],

    [
      "Base",
      "Healthy",
      "bg-purple-400",
    ],

    [
      "Polygon",
      "Active",
      "bg-pink-400",
    ],
  ];

  // =====================================================
  // SYSTEM STATUS
  // =====================================================

  const systems = [

    [
      "Treasury",
      "Optimal",
      "bg-green-400",
    ],

    [
      "AI Engine",
      "Online",
      "bg-cyan-400",
    ],

    [
      "Governance",
      "Secured",
      "bg-purple-400",
    ],

    [
      "Protocol",
      "Healthy",
      "bg-blue-400",
    ],
  ];

  // =====================================================
  // RENDER
  // =====================================================

    return (

    <div className="flex flex-col gap-6 lg:gap-8 mb-8">

      {/* HERO */}

      <div className="relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-gradient-to-b from-[#0B1220]/95 to-[#07101f]/95 backdrop-blur-2xl p-5 sm:p-7 xl:p-10">

        {/* GLOWS */}

        <div className="pointer-events-none absolute top-[-120px] right-[-120px] h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-140px] left-[-120px] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[140px]" />

        {/* CONTENT */}

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

          {/* LEFT */}

          <div className="max-w-4xl">

            <div className="flex flex-wrap items-center gap-3 mb-5">

              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

              <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300">

                Institutional Protocol Infrastructure

              </p>

            </div>

            <h2 className="text-4xl sm:text-5xl 2xl:text-7xl font-black leading-[0.95] tracking-tight mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

              AI-Powered
              <br />
              DeFi Operating System

            </h2>

            <p className="text-gray-400 text-sm sm:text-base xl:text-lg leading-8 max-w-3xl">

              Real-time treasury coordination, multichain governance intelligence and institutional-grade decentralized infrastructure monitoring are fully operational.

            </p>

          </div>

          {/* RIGHT */}

          <div className="flex flex-col gap-5 w-full xl:w-[340px]">

            {/* NETWORK */}

            <div className="rounded-3xl border border-white/[0.06] bg-[#081222]/90 backdrop-blur-xl p-5">

              <div className="flex items-center justify-between mb-5">

                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">

                  Active Network

                </p>

                <div className="flex items-center gap-2">

                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                  <span className="text-xs text-green-400">

                    Live

                  </span>

                </div>

              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-gray-400 mb-2">

                      Connected Chain

                    </p>

                    <h4 className="text-2xl font-black text-cyan-300">

                      Sepolia

                    </h4>

                  </div>

                  <div className="text-4xl">

                    ⛓

                  </div>

                </div>

              </div>

            </div>

            {/* WALLET */}

            <button

              disabled={walletLoading}

              onClick={handleWallet}

              className="w-full rounded-3xl py-5 px-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.015] shadow-[0_0_40px_rgba(59,130,246,0.25)]"

            >

              {walletLoading

                ? "Connecting..."

                : isConnected

                ? `${address?.slice(0, 6)}...${address?.slice(-4)}`

                : "Connect Wallet"}

            </button>

          </div>

        </div>

      </div>

      {/* STATUS GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5">

        {networks.map(

          ([network, status, color]) => (

            <div

              key={String(network)}

              className="group rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-[#0B1220]/95 to-[#07101f]/95 backdrop-blur-2xl p-5 transition-all duration-300 hover:border-cyan-400/20 hover:translate-y-[-2px]"

            >

              <div className="flex items-center justify-between mb-5">

                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">

                  {network}

                </p>

                <div className={`w-3 h-3 rounded-full animate-pulse ${color}`} />

              </div>

              <h4 className="text-2xl font-black mb-3">

                {status}

              </h4>

              <p className="text-sm text-gray-500 leading-6">

                Crosschain synchronization active

              </p>

            </div>
          )
        )}

      </div>

      {/* SYSTEM STATUS */}

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5">

        {systems.map(

          ([label, status, color]) => (

            <div

              key={String(label)}

              className="group rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-[#0B1220]/95 to-[#07101f]/95 backdrop-blur-2xl p-5 transition-all duration-300 hover:border-cyan-400/20 hover:translate-y-[-2px]"

            >

              <div className="flex items-center justify-between mb-5">

                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">

                  {label}

                </p>

                <div className={`w-3 h-3 rounded-full animate-pulse ${color}`} />

              </div>

              <h4 className="text-2xl font-black mb-3">

                {status}

              </h4>

              <p className="text-sm text-gray-500 leading-6">

                Real-time protocol monitoring

              </p>

            </div>
          )
        )}

      </div>

    </div>
  );
}