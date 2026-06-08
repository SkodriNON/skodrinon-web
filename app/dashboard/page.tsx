"use client";

import InstitutionalLayout
from "./layouts/InstitutionalLayout";

import {
  useState,
  useMemo,
  useEffect,
} from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";

import AIInsights from "./components/AIInsights";
import WalletCard from "./components/WalletCard";
import GovernanceCard from "./components/GovernanceCard";

import TreasuryCard from "./components/TreasuryCard";

import AnalyticsCard from "./components/AnalyticsCard";

import DAOCard from "./components/DAOCard";

import HoldingsCard from "./components/HoldingsCard";

import AllocationCard from "./components/AllocationCard";
import PortfolioChart from "./components/PortfolioChart";

import TransactionsCard from "./components/TransactionsCard";
import GovernanceModule from "./modules/GovernanceModule";
import AnalyticsModule from "./modules/AnalyticsModule";
import TreasuryModule from "./modules/TreasuryModule";
import DAOmodule from "./modules/DAOmodule";
import PortfolioContent from "./components/PortfolioContent";

import TreasuryControlCard
from "./components/TreasuryControlCard";

import SecurityAlertsCard
from "./components/SecurityAlertsCard";

import PerformanceAnalyticsCard
from "./components/PerformanceAnalyticsCard";

import RiskManagementCard
from "./components/RiskManagementCard";

import YieldAnalyticsCard
from "./components/YieldAnalyticsCard";

import LiquidityPositionsCard
from "./components/LiquidityPositionsCard";

import ProtocolEventFeedCard
from "./components/ProtocolEventFeedCard";

import PortfolioOverviewCard
from "./components/PortfolioOverviewCard";

import AllowanceStatusCard
from "./components/AllowanceStatusCard";

import WalletBalanceCard
from "./components/WalletBalanceCard";

import TransactionMonitorCard
from "./components/TransactionMonitorCard";

import TokenApprovalCard
from "./components/TokenApprovalCard";

import SwapExecutionCard
from "./components/SwapExecutionCard";

import TreasuryBalanceCard
from "./components/TreasuryBalanceCard";

import LiveReserveStatusCard
from "./components/LiveReserveStatusCard";

import ContractRegistryCard
from "./components/ContractRegistryCard";

import ProtocolStatusCard
from "./components/ProtocolStatusCard";

import AITreasuryIntelligenceCard
from "./components/AITreasuryIntelligenceCard";

import AIExecutionOptimizerCard
from "./components/AIExecutionOptimizerCard";

import AILiquidityStressCard
from "./components/AILiquidityStressCard";

import AIVolatilityCard
from "./components/AIVolatilityCard";

import AIMarketSentimentCard
from "./components/AIMarketSentimentCard";

import LiquidityHeatmapCard
from "./components/LiquidityHeatmapCard";

import MarketDepthCard
from "./components/MarketDepthCard";

import LiveActivityCard
from "./components/LiveActivityCard";

import VolumeAnalyticsCard
from "./components/VolumeAnalyticsCard";

import PoolAnalyticsCard
from "./components/PoolAnalyticsCard";

import TreasuryRevenueCard
from "./components/TreasuryRevenueCard";

import LPPositionCard
from "./components/LPPositionCard";

import LiquidityCard
from "./components/LiquidityCard";

import {
  useAMMQuote,
} from "./hooks/useAMMQuote";

import AISystemStatus
from "./components/AISystemStatus";

import WhaleRiskCard
from "./components/WhaleRiskCard";

import ProtocolActivityFeed
from "./components/ProtocolActivityFeed";

import MarketSentimentCard
from "./components/MarketSentimentCard";

import ProtocolMetricsBar
from "./components/ProtocolMetricsBar";

import GovernanceInsightCard
from "./components/GovernanceInsightCard";

import WhaleActivityCard
from "./components/WhaleActivityCard";

import TreasuryRiskCard
from "./components/TreasuryRiskCard";

import TreasuryHealthCard
from "./components/TreasuryHealthCard";

import ProtocolAlertsCard
from "./components/ProtocolAlertsCard";

import AIInsightsCard
from "./components/AIInsightsCard";

import AIChatCard
from "./components/AIChatCard";

import AIChat from "./components/AIChat";

import NeuralCore from "./components/NeuralCore";

import SatelliteArray from "./components/SatelliteArray";

import MetaverseGrid from "./components/MetaverseGrid";

import WarRoom from "./components/WarRoom";

import LiquidityMatrix from "./components/LiquidityMatrix";

import AgentNetwork from "./components/AgentNetwork";

import AIPredictions from "./components/AIPredictions";

import EcosystemOverview from "./components/EcosystemOverview";

import GovernanceTerminal from "./components/GovernanceTerminal";

import MarketTerminal from "./components/MarketTerminal";

import QuantEngine from "./components/QuantEngine";

import CrosschainCenter from "./components/CrosschainCenter";

import TreasuryRadar from "./components/TreasuryRadar";

import SecurityCenter from "./components/SecurityCenter";

import AICommandCenter
from "./components/AICommandCenter";



import ProtocolStatus
from "./components/ProtocolStatus";

import NetworkSwitcher
from "./components/NetworkSwitcher";

import PortfolioAnalyticsCard
from "./components/PortfolioAnalyticsCard";

import SwapHistoryCard
from "./components/SwapHistoryCard";

import SwapCard
from "./components/SwapCard";

import AdminControls
from "./components/AdminControls";

import {
  useStaking,
} from "./hooks/useStaking";

import {
  useDashboardMetrics,
} from "./hooks/useDashboardMetrics";

import {
  parseEther,
} from "viem";

import {
  calculatePortfolio,
} from "./utils/portfolio";

import DashboardStats from "./components/DashboardStats";

import StakingPanel
from "./components/StakingPanel";

import {
  useStakingActions,
} from "./hooks/useStakingActions";

import {
  usePortfolioHistory,
} from "./hooks/usePortfolioHistory";

import {
  useActivity,
} from "./hooks/useActivity";

import {
  useWalletScore,
} from "./hooks/useWalletScore";

import {
  useSwapQuote,
} from "./hooks/useSwapQuote";

import {
  useSnapshot,
} from "./hooks/useSnapshot";

import {
  useVotingPower,
} from "./hooks/useVotingPower";

import {
  useTokenPrice,
} from "./hooks/useTokenPrice";

import {
  PortfolioProvider,
} from "./context/PortfolioContext";

import {
  AuthProvider,
  useAuth,
} from "./context/AuthContext";

import {
  NotificationProvider,
  useNotifications,
} from "./context/NotificationContext";

import { useEthPrice }
from "./hooks/useEthPrice";

import { useTransactions }
from "./hooks/useTransactions";

import { CONTRACTS }
from "../lib/contracts";

import {
  useConnect,
  useAccount,
  useDisconnect,
  useBalance,
  useReadContract,
} from "wagmi";

import { erc20Abi } from "../lib/erc20";

function DashboardContent() {
  const { address, isConnected } = useAccount();

  const {
  isPending:
    walletLoading,
} = useConnect();

const safeAddress = useMemo(() => {

  return (
    address &&
    address.startsWith("0x")
  )
    ? address
    : undefined;

}, [address]);

const stakingAddress = useMemo(
  () =>
    process.env
      .NEXT_PUBLIC_STAKING_ADDRESS as `0x${string}`,
  []
);

  const {
  authenticated,
  login,
} = useAuth();

const {
  notifications,
  addNotification,
} = useNotifications();

const {

  txLoading,

  handleStake,
  handleUnstake,

  handleClaimRewards,
  handleCompoundRewards,

  txConfirming,
  txConfirmed,

} = useStakingActions(
  stakingAddress,
  addNotification
);

const txStatus = txConfirming
  ? "confirming"
  : txConfirmed
  ? "success"
  : txLoading
  ? "wallet"
  : "idle";

  const { connect, connectors } = useConnect();

  const { disconnect } = useDisconnect();

  const { data: ethBalance } = useBalance({
    address,
  });

  const { data: tokenBalance } = useReadContract({
    address: CONTRACTS.ethereum.TOKEN,
    abi: erc20Abi,
    functionName: "balanceOf",
    args:
  safeAddress
    ? [safeAddress]
    : undefined,
    query: {
      enabled: !!safeAddress,
      refetchInterval: 3000,
    },
  });

  const {

  ethPrice,
  loading:
    ethPriceLoading,

} = useEthPrice();

const {

  tokenPrice,
  loading:
    tokenPriceLoading,

} = useTokenPrice();

  const { votingPower } =
  useVotingPower(
    tokenBalance
  );

  const { transactions } =
  useTransactions(safeAddress);

  const [activeTab, setActiveTab] =
  useState("Dashboard");

  const [stakeAmount, setStakeAmount] =
  useState("");

const [aprInput, setAprInput] =
  useState(12);

useEffect(() => {

  const savedApr =
    localStorage.getItem(
      "skodrinon-apr"
    );

  if (savedApr) {

    setAprInput(
      Number(savedApr)
    );

  }

}, []);

useEffect(() => {

  localStorage.setItem(
    "skodrinon-apr",
    aprInput.toString()
  );

}, [aprInput]);  

  const {

  stakedTokens,
  rewards,

  rewardPerSecond,

  totalStaked:
    protocolTotalStaked,

} = useStaking(
  tokenBalance
);

const {

  totalPortfolio,

  stakingValue,

  initialPortfolio,

} = calculatePortfolio({

  ethBalance,
  ethPrice,

  tokenBalance,
  tokenPrice,

  stakedTokens,
  rewards,
});

const {

  pnl,
  pnlPercent,
  apr,

  treasuryValue,

  totalLiquidity,

  totalValueLocked,
  protocolHealth,

  roi,
  growthMultiplier,

} = useDashboardMetrics({

  totalPortfolio,
  initialPortfolio,

  stakedTokens,
  rewards,

  rewardPerSecond,

protocolTotalStaked,

  stakingValue,
});

const {
  proposals,
} = useSnapshot();

const {
  amountsOut,
} = useSwapQuote(
  parseEther("1"),
  [
    CONTRACTS.ethereum.TOKEN,
    CONTRACTS.ethereum.LIQUIDITY,
  ]
);

  const { walletScore } =
  useWalletScore(
    transactions.length
  );

  const {
  categorizedTransactions,
} = useActivity(
  transactions
);

const { history } =
  usePortfolioHistory(
    totalPortfolio
  );

const dashboardLoading =

  ethPriceLoading ||

  tokenPriceLoading;

  if (!authenticated) {

  return (

    <main className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center">

      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage:
            "url('/dashboard-access.png')",
        }}
      />

      <div className="absolute bottom-[7vh] left-1/2 -translate-x-1/2 z-30 flex flex-row items-center gap-2 sm:gap-3 md:gap-4 scale-[0.42] sm:scale-[0.55] md:scale-[0.72]">

        <button
          className="w-[220px] h-[88px] rounded-2xl border border-cyan-400/20 bg-black/30 backdrop-blur-xl text-white font-semibold"
        >

          Public

        </button>

        <button
          disabled={walletLoading}
          onClick={() => {

            const connector =
              connectors?.[0];

            if (!connector) return;

            connect({
              connector,
            });

            login();

          }}
          className="w-[220px] h-[88px] rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold"
        >

          {
            walletLoading
              ? "Connecting..."
              : "Connect User"
          }

        </button>

        <button
          className="w-[220px] h-[88px] rounded-2xl border border-red-400/20 bg-red-500/10 text-red-300 font-semibold"
        >

          Admin

        </button>

      </div>

    </main>

  );
}

  return (

  <InstitutionalLayout>

  <PortfolioProvider
    ethPrice={ethPrice}
    totalPortfolio={totalPortfolio}
  >

<main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

  {/* BACKGROUND */}

  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
style={{
  backgroundImage:
    "url('/images/dashboard-bg.png')",
}}

  />

  {/* DARK OVERLAY */}

  <div className="absolute inset-0 bg-black/20" />

 <div className="relative z-10">


  <div className="fixed top-5 right-5 z-[100] flex flex-col gap-3">

  {notifications.map(
    (notification) => {

      const notificationStyles =

        notification.type ===
        "success"

          ? "border-green-400/30 bg-green-500/15 text-green-300"

        : notification.type ===
          "error"

          ? "border-red-400/30 bg-red-500/15 text-red-300"

        : notification.type ===
          "warning"

          ? "border-yellow-400/30 bg-yellow-500/15 text-yellow-300"

          : "border-cyan-400/30 bg-cyan-500/15 text-cyan-300";

      return (

        <div

          key={notification.id}

          className={`min-w-[320px] rounded-2xl border backdrop-blur-2xl px-5 py-4 shadow-2xl transition-all duration-300 ${notificationStyles}`}

        >

          <div className="flex items-start justify-between gap-4">

            <div className="flex-1">

              <p className="font-semibold leading-relaxed">

                {notification.message}

              </p>

              {

                notification.txHash && (

                  <a

                    href={`https://sepolia.etherscan.io/tx/${notification.txHash}`}

                    target="_blank"

                    className="text-xs opacity-70 hover:opacity-100 transition mt-2 inline-block"

                  >

                    View Transaction

                  </a>

                )

              }

            </div>

            <button

              onClick={() => {

                console.log(
                  "Dismiss notification"
                );

              }}

              className="text-sm opacity-60 hover:opacity-100 transition"

            >

              ✕

            </button>

          </div>

        </div>
      );
    }
  )}

</div>

      {/* MOBILE TOPBAR */}
      <div className="sticky top-0 z-50 lg:hidden backdrop-blur-xl bg-[#020617]/90 border-b border-blue-500/10 px-4 py-4">

        <div className="flex items-center justify-between">

          <h1 className="text-xl font-bold">
            SkodriNΩN
          </h1>

          <button
  disabled={
    walletLoading
  }
  onClick={() => {

    if (
      isConnected
    ) {

      disconnect();

    } else {

      const connector =
  connectors?.[0];

if (!connector) {
  return;
}

connect({
  connector,
});
    }
  }}
  className="px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
>

  {walletLoading
    ? "Connecting..."
    : isConnected
    ? `${address?.slice(
        0,
        6
      )}...${address?.slice(-4)}`
    : "Connect"}

</button>

        </div>

      </div>

      <div className="flex flex-col lg:flex-row">

        {/* SIDEBAR */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* MAIN CONTENT */}

<section className="w-full flex-1 py-6">

  {/* TOP SAFE SPACE */}

  <div className="h-20" />

  {/* CONTENT CONTAINER */}

  <div className="max-w-[900px] ml-4 md:ml-10 lg:ml-16">

    <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/45 backdrop-blur-md p-5 md:p-6 shadow-[0_0_40px_rgba(37,99,235,0.08)]">

      {activeTab === "Portfolio" && (
        <PortfolioContent />
      )}

      {activeTab === "Governance" && (
        <GovernanceModule />
      )}

      {activeTab === "Analytics" && (
        <AnalyticsModule
          chartData={history}
        />
      )}

      {activeTab === "Treasury" && (
        <TreasuryModule
          totalPortfolio={totalPortfolio}
          ethBalance={ethBalance}
          tokenBalance={tokenBalance}
          ethPrice={ethPrice}
          tokenPrice={tokenPrice}
        />
      )}

      {activeTab === "DAO" && (
        <DAOmodule />
      )}

      {activeTab === "Staking" && (

        <StakingPanel

  stakedTokens={
    stakedTokens
  }

  rewards={
    rewards
  }

  apr={aprInput}

  stakeAmount={
    stakeAmount
  }

  setStakeAmount={
    setStakeAmount
  }

  handleStake={
    handleStake
  }

  handleUnstake={
    handleUnstake
  }

  handleClaimRewards={
    handleClaimRewards
  }

  handleCompoundRewards={
    handleCompoundRewards
  }

  txLoading={
    txLoading
  }

  txStatus={
    txStatus
  }

/>

      )}

      {activeTab === "Admin" && (

        <AdminControls
          setDisplayApr={
            setAprInput
          }
        />

      )}

      {activeTab === "Dashboard" && (

        <>

          <Topbar
            isConnected={isConnected}
            address={address}
            connect={connect}
            disconnect={disconnect}
            connectors={connectors}
            walletLoading={walletLoading}
          />

           <NetworkSwitcher />

           <ProtocolStatus />

           <AICommandCenter />

           <AISystemStatus />

           <SecurityCenter />

           <TreasuryRadar />

           <CrosschainCenter />

           <QuantEngine />

           <GovernanceTerminal />

           <MarketTerminal />

           <AIPredictions />

           <EcosystemOverview />

           <AgentNetwork />

           <LiquidityMatrix />

           <WarRoom />

           <MetaverseGrid />

           <SatelliteArray />

           <NeuralCore />

           <AIChat />

          <div className="py-10 md:py-16">

            <div className="max-w-2xl">

              <h1 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent leading-tight">

                Welcome to
                <br />
                SkodriNON

              </h1>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">

                Next Generation Decentralized Infrastructure
                powering governance, staking,
                treasury intelligence and
                advanced Web3 coordination.

              </p>

              {/* ACTION BUTTONS */}

              <div className="flex flex-wrap gap-3 mb-8">

                <button
                  onClick={() =>
                    setActiveTab(
                      "Governance"
                    )
                  }
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-medium hover:scale-[1.03] transition-all duration-300"
                >

                  Governance

                </button>

                <button
                  onClick={() =>
                    setActiveTab(
                      "Staking"
                    )
                  }
                  className="px-5 py-2.5 rounded-xl border border-blue-400/20 bg-[#07101f]/60 backdrop-blur-xl hover:bg-[#0f172a] transition-all duration-300 text-sm"
                >

                  Stake

                </button>

                <button
                  onClick={() =>
                    setActiveTab(
                      "Treasury"
                    )
                  }
                  className="px-5 py-2.5 rounded-xl border border-blue-400/20 bg-[#07101f]/60 backdrop-blur-xl hover:bg-[#0f172a] transition-all duration-300 text-sm"
                >

                  Treasury

                </button>

              </div>

              {/* SMALL INFO CARDS */}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                <div className="rounded-2xl border border-blue-500/10 bg-[#07101f]/50 p-4">

                  <p className="text-[11px] text-gray-400 mb-1">

                    Treasury

                  </p>

                  <h3 className="text-xl font-black mb-1">

                    ${treasuryValue.toLocaleString()}

                  </h3>

                  <p className="text-green-400 text-xs">

                    Active reserves

                  </p>

                </div>

                <div className="rounded-2xl border border-blue-500/10 bg-[#07101f]/50 p-4">

                  <p className="text-[11px] text-gray-400 mb-1">

                    Governance

                  </p>

                  <h3 className="text-xl font-black mb-1">

                    {proposals.length}

                  </h3>

                  <p className="text-blue-400 text-xs">

                    DAO proposals

                  </p>

                </div>

                <div className="rounded-2xl border border-blue-500/10 bg-[#07101f]/50 p-4">

                  <p className="text-[11px] text-gray-400 mb-1">

                    APR

                  </p>

                  <h3 className="text-xl font-black mb-1">

                    {aprInput}%

                  </h3>

                  <p className="text-purple-400 text-xs">

                    Rewards active

                  </p>

                </div>

              </div>

            </div>

          </div>

         <div className="mt-10 space-y-8">

  {/* METRICS */}

  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

    <ProtocolMetricsBar
      treasuryValue={treasuryValue}
      proposals={proposals.length}
      apr={Number(aprInput)}
    />

    <TreasuryHealthCard
      treasuryValue={treasuryValue}
      liquidity={2500000}
    />

  </div>

  {/* TRADING */}

  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">

    <SwapCard />

    <LiquidityCard />

  </div>

  {/* ANALYTICS */}

  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

    <MarketDepthCard />

    <LiquidityHeatmapCard />

    <VolumeAnalyticsCard />

  </div>

  {/* AI */}

  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

    <AIInsightsCard />

    <AIChatCard />

  </div>

  {/* GOVERNANCE */}

  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

    <GovernanceInsightCard
      proposalCount={proposals.length}
    />

    <TreasuryRiskCard
      treasuryValue={treasuryValue}
    />

  </div>

    {/* PORTFOLIO */}

  <div className="grid grid-cols-1 gap-6">

    <PortfolioAnalyticsCard />

  </div>

</div>

        </>

      )}

    </div>

  </div>

</section>



      </div>

    </div>
      
    </main>

    </PortfolioProvider>

</InstitutionalLayout>

  );
}

export default function Dashboard() {

  return (
    <AuthProvider>

      <NotificationProvider>

        <DashboardContent />

      </NotificationProvider>

    </AuthProvider>
  );
}