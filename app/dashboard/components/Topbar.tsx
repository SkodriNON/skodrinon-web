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
  const handleWallet = () => {
    if (walletLoading) return;

    if (isConnected) {
      disconnect();
      return;
    }

    const connector = connectors?.[0];
    if (!connector) return;

    connect({ connector });
  };

  return (
    <div className="rounded-lg border border-white/[0.06] bg-[#07101f] px-4 py-3">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-semibold">
            Token Dashboard
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            Portfolio · Staking · Swap · Treasury · Governance
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-md border border-cyan-400/10 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-300">
            Sepolia
          </div>

          <button
            disabled={walletLoading}
            onClick={handleWallet}
            className="rounded-md bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 disabled:opacity-50"
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
  );
}