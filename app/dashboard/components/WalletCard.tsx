type WalletCardProps = {

  ethBalance?: {
    value: bigint;
  };

  tokenBalance?: bigint;

  address?: string;

  walletScore: string;
};

export default function WalletCard({

  ethBalance,

  tokenBalance,

  address,

  walletScore,

}: WalletCardProps) {

  // =====================================================
  // BALANCES
  // =====================================================

  const ethValue =

    ethBalance

      ? (
          Number(
            ethBalance.value
          ) / 1e18
        ).toFixed(4)

      : "0";

  const sknonValue =

    tokenBalance

      ? (
          Number(
            tokenBalance
          ) / 1e18
        ).toFixed(2)

      : "0";

  // =====================================================
  // SECURITY ENGINE
  // =====================================================

  const walletRisk =

    Number(walletScore) >= 85

      ? "Low Risk"

      : Number(walletScore) >= 65

      ? "Moderate Risk"

      : "High Risk";

  const riskColor =

    walletRisk ===
    "Low Risk"

      ? "text-green-400"

      : walletRisk ===
        "Moderate Risk"

      ? "text-yellow-400"

      : "text-red-400";

  const walletProtection =

    Number(walletScore) >= 80
      ? "Protected"

      : "Monitoring";

  // =====================================================
  // SECURITY METRICS
  // =====================================================

  const securityMetrics = [

    [
      "Wallet Security",
      walletProtection,
      "bg-green-400",
    ],

    [
      "Transaction Risk",
      walletRisk,
      "bg-cyan-400",
    ],

    [
      "AI Monitoring",
      "Active",
      "bg-purple-400",
    ],

    [
      "Protocol Sync",
      "Live",
      "bg-blue-400",
    ],
  ];

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <div className="rounded-[32px] border border-blue-500/10 bg-[#07101f]/80 backdrop-blur-xl p-5 sm:p-7 overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_45%)]" />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">

              Institutional Wallet Terminal

            </p>

            <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">

              Wallet Security

            </h3>

          </div>

          <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse shadow-[0_0_25px_rgba(74,222,128,0.8)]" />

        </div>

        {/* WALLET SCORE */}

        <div className="rounded-3xl border border-blue-500/10 bg-[#081222] p-6 mb-8">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">

                AI Wallet Score

              </p>

              <h4 className="text-5xl font-black text-cyan-300">

                {walletScore}

              </h4>

            </div>

            <div className={`text-lg font-bold ${riskColor}`}>

              {walletRisk}

            </div>

          </div>

          {/* SCORE BAR */}

          <div className="w-full h-4 rounded-full bg-[#020617] overflow-hidden">

            <div

              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400"

              style={{
                width:
                  `${Math.min(Number(walletScore), 100)}%`,
              }}

            />

          </div>

        </div>

        {/* BALANCES */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

          {/* ETH */}

          <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">

              ETH Balance

            </p>

            <h4 className="text-3xl font-black mb-2">

              {ethValue}

            </h4>

            <p className="text-cyan-300 text-sm">

              Ethereum Mainnet

            </p>

          </div>

          {/* TOKEN */}

          <div className="rounded-2xl border border-purple-500/10 bg-[#081222] p-5">

            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">

              $SKNON Balance

            </p>

            <h4 className="text-3xl font-black text-blue-400 mb-2 break-words">

              {sknonValue}

            </h4>

            <p className="text-purple-300 text-sm">

              Protocol Assets

            </p>

          </div>

        </div>

        {/* SECURITY GRID */}

        <div className="grid grid-cols-2 gap-4 mb-8">

          {securityMetrics.map(

            ([

              label,
              value,
              color,

            ]) => (

              <div

                key={String(label)}

                className="rounded-2xl border border-blue-500/10 bg-[#081222] p-4"

              >

                <div className="flex items-center justify-between mb-3">

                  <p className="text-xs uppercase tracking-[0.15em] text-gray-500">

                    {label}

                  </p>

                  <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${color}`} />

                </div>

                <h5 className="text-lg font-bold">

                  {value}

                </h5>

              </div>
            )
          )}

        </div>

        {/* ADDRESS */}

        <div className="rounded-2xl border border-blue-500/10 bg-[#081222] p-5 mb-6">

          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">

            Connected Wallet

          </p>

          <p className="text-sm text-cyan-300 break-all">

            {address ||
              "No wallet connected"}

          </p>

        </div>

        {/* ETHERSCAN */}

        <a

          href={`https://sepolia.etherscan.io/address/${address}`}

          target="_blank"

          rel="noopener noreferrer"

          className="flex items-center justify-center rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-4 text-blue-300 hover:border-blue-500/40 hover:text-white transition-all duration-300"

        >

          View Institutional Wallet →

        </a>

      </div>

    </div>
  );
}