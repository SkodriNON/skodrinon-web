"use client";

import InstitutionalLayout from "./layouts/InstitutionalLayout";
import { useState, useMemo, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import GovernanceModule from "./modules/GovernanceModule";
import AnalyticsModule from "./modules/AnalyticsModule";
import TreasuryModule from "./modules/TreasuryModule";
import DAOmodule from "./modules/DAOmodule";
import PortfolioContent from "./components/PortfolioContent";

import StakingPanel from "./components/StakingPanel";
import AdminControls from "./components/AdminControls";

import ProtocolStatus from "./components/ProtocolStatus";
import NetworkSwitcher from "./components/NetworkSwitcher";

import ProtocolMetricsBar from "./components/ProtocolMetricsBar";
import TreasuryHealthCard from "./components/TreasuryHealthCard";
import TreasuryRiskCard from "./components/TreasuryRiskCard";
import GovernanceInsightCard from "./components/GovernanceInsightCard";
import PortfolioAnalyticsCard from "./components/PortfolioAnalyticsCard";

import AICommandCenter from "./components/AICommandCenter";
import AISystemStatus from "./components/AISystemStatus";
import AIInsightsCard from "./components/AIInsightsCard";
import AIChatCard from "./components/AIChatCard";
import AIChat from "./components/AIChat";
import AIPredictions from "./components/AIPredictions";

import TreasuryRadar from "./components/TreasuryRadar";
import CrosschainCenter from "./components/CrosschainCenter";
import QuantEngine from "./components/QuantEngine";
import GovernanceTerminal from "./components/GovernanceTerminal";
import MarketTerminal from "./components/MarketTerminal";
import EcosystemOverview from "./components/EcosystemOverview";

import MarketDepthCard from "./components/MarketDepthCard";
import LiquidityHeatmapCard from "./components/LiquidityHeatmapCard";
import VolumeAnalyticsCard from "./components/VolumeAnalyticsCard";

import SwapCard from "./components/SwapCard";
import SwapExecutionCard from "./components/SwapExecutionCard";
import SwapHistoryCard from "./components/SwapHistoryCard";
import LiquidityCard from "./components/LiquidityCard";
import LiquidityMatrix from "./components/LiquidityMatrix";

import { useStaking } from "./hooks/useStaking";
import { useDashboardMetrics } from "./hooks/useDashboardMetrics";
import { calculatePortfolio } from "./utils/portfolio";
import { useStakingActions } from "./hooks/useStakingActions";
import { usePortfolioHistory } from "./hooks/usePortfolioHistory";
import { useSnapshot } from "./hooks/useSnapshot";
import { useTokenPrice } from "./hooks/useTokenPrice";
import { useEthPrice } from "./hooks/useEthPrice";

import { PortfolioProvider } from "./context/PortfolioContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import {
  NotificationProvider,
  useNotifications,
} from "./context/NotificationContext";

import { CONTRACTS } from "../lib/contracts";

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
    isPending: walletLoading,
    connect,
    connectors,
  } = useConnect();

  const { disconnect } = useDisconnect();

  const safeAddress = useMemo(() => {
    return address && address.startsWith("0x")
      ? address
      : undefined;
  }, [address]);

  const stakingAddress = useMemo(
    () =>
      process.env
        .NEXT_PUBLIC_STAKING_ADDRESS as `0x${string}`,
    []
  );

  const { authenticated, login } = useAuth();

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

  const { data: ethBalance } = useBalance({
    address,
  });

  const { data: tokenBalance } = useReadContract({
    address: CONTRACTS.ethereum.TOKEN,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: safeAddress ? [safeAddress] : undefined,
    query: {
      enabled: !!safeAddress,
      refetchInterval: 3000,
    },
  });

  const { ethPrice } = useEthPrice();
  const { tokenPrice } = useTokenPrice();

  const [activeTab, setActiveTab] =
    useState("Dashboard");

  const [stakeAmount, setStakeAmount] =
    useState("");

  const [aprInput, setAprInput] = useState(() => {

  if (typeof window === "undefined") {
    return 12;
  }

  const savedApr =
    localStorage.getItem(
      "skodrinon-apr"
    );

  return savedApr
    ? Number(savedApr)
    : 12;

});

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
    totalStaked: protocolTotalStaked,
  } = useStaking(tokenBalance);

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

  const { treasuryValue } =
    useDashboardMetrics({
      totalPortfolio,
      initialPortfolio,
      stakedTokens,
      rewards,
      rewardPerSecond,
      protocolTotalStaked,
      stakingValue,
    });

  const { proposals } = useSnapshot();

  const { history } =
    usePortfolioHistory(totalPortfolio);

  const quickActions = [
    ["Swap", "⇄", "Exchange tokens"],
    ["Staking", "◎", "Manage rewards"],
    ["Governance", "⬢", "DAO voting"],
    ["Bridge", "⤴", "Crosschain"],
  ];

  const recentActivity = [
    ["Treasury sync", "Reserve status updated", "2m ago"],
    ["Governance", "DAO proposal index refreshed", "8m ago"],
    ["Staking", "APR configuration active", "15m ago"],
    ["Protocol", "Dashboard metrics synced", "22m ago"],
  ];

  const systemNotes = [
    ["Network", "Sepolia connected"],
    ["Wallet", isConnected ? "Connected" : "Not connected"],
    ["Price Feed", tokenPrice ? "Token feed active" : "Fallback active"],
    ["ETH Feed", ethPrice ? "ETH feed active" : "Fallback active"],
  ];

  if (!authenticated) {
    return (
      <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/dashboard-access.png')",
          }}
        />

        <div className="absolute bottom-[7vh] left-1/2 z-30 flex -translate-x-1/2 scale-[0.42] flex-row items-center gap-2 sm:scale-[0.55] sm:gap-3 md:scale-[0.72] md:gap-4">
          <button className="h-[88px] w-[220px] rounded-2xl border border-cyan-400/20 bg-black/30 font-semibold text-white backdrop-blur-xl">
            Public
          </button>

          <button
            disabled={walletLoading}
            onClick={() => {
              const connector = connectors?.[0];

              if (!connector) return;

              connect({
                connector,
              });

              login();
            }}
            className="h-[88px] w-[220px] rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold text-white"
          >
            {walletLoading
              ? "Connecting..."
              : "Connect User"}
          </button>

          <button className="h-[88px] w-[220px] rounded-2xl border border-red-400/20 bg-red-500/10 font-semibold text-red-300">
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
        <main className="min-h-screen overflow-x-hidden bg-[#020617] text-white">
          <div className="fixed right-4 top-4 z-[100] flex flex-col gap-2">
            {notifications.map((notification) => {
              const notificationStyles =
                notification.type === "success"
                  ? "border-green-400/30 bg-green-500/15 text-green-300"
                  : notification.type === "error"
                  ? "border-red-400/30 bg-red-500/15 text-red-300"
                  : notification.type === "warning"
                  ? "border-yellow-400/30 bg-yellow-500/15 text-yellow-300"
                  : "border-cyan-400/30 bg-cyan-500/15 text-cyan-300";

              return (
                <div
                  key={notification.id}
                  className={`min-w-[280px] rounded-lg border px-4 py-3 text-sm shadow-xl ${notificationStyles}`}
                >
                  <p className="font-medium leading-relaxed">
                    {notification.message}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="sticky top-0 z-50 border-b border-blue-500/10 bg-[#020617]/95 px-4 py-3 backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold">
                SkodriNΩN
              </h1>

              <button
                disabled={walletLoading}
                onClick={() => {
                  if (isConnected) {
                    disconnect();
                  } else {
                    const connector = connectors?.[0];

                    if (!connector) return;

                    connect({
                      connector,
                    });
                  }
                }}
                className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold disabled:opacity-50"
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
            <Sidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <section className="w-full flex-1 px-4 py-4 md:px-5 lg:px-6">
              <div className="mx-auto w-full max-w-[1280px]">
                <div className="rounded-xl border border-blue-500/10 bg-[#07101f]/50 p-4 shadow-[0_0_28px_rgba(37,99,235,0.06)]">
                  {activeTab === "Dashboard" && (
                    <div className="space-y-4">
                      <Topbar
                        isConnected={isConnected}
                        address={address}
                        connect={connect}
                        disconnect={disconnect}
                        connectors={connectors}
                        walletLoading={walletLoading}
                      />

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-lg border border-blue-500/10 bg-[#020617]/70 p-3">
                          <p className="text-[11px] text-gray-400">
                            Portfolio
                          </p>

                          <h3 className="mt-1 text-lg font-semibold text-cyan-300">
                            ${totalPortfolio.toLocaleString()}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Total value
                          </p>
                        </div>

                        <div className="rounded-lg border border-blue-500/10 bg-[#020617]/70 p-3">
                          <p className="text-[11px] text-gray-400">
                            Treasury
                          </p>

                          <h3 className="mt-1 text-lg font-semibold text-green-400">
                            ${treasuryValue.toLocaleString()}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Active reserves
                          </p>
                        </div>

                        <div className="rounded-lg border border-blue-500/10 bg-[#020617]/70 p-3">
                          <p className="text-[11px] text-gray-400">
                            Governance
                          </p>

                          <h3 className="mt-1 text-lg font-semibold text-blue-400">
                            {proposals.length}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            DAO proposals
                          </p>
                        </div>

                        <div className="rounded-lg border border-blue-500/10 bg-[#020617]/70 p-3">
                          <p className="text-[11px] text-gray-400">
                            APR
                          </p>

                          <h3 className="mt-1 text-lg font-semibold text-purple-400">
                            {aprInput}%
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Rewards active
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
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

                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                        <div className="rounded-xl border border-blue-500/10 bg-[#020617]/70 p-4">
                          <div className="mb-4 flex items-center justify-between">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                                Actions
                              </p>

                              <h3 className="text-lg font-semibold">
                                Quick Actions
                              </h3>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {quickActions.map(
                              ([tab, icon, label]) => (
                                <button
                                  key={tab}
                                  onClick={() =>
                                    setActiveTab(tab)
                                  }
                                  className="rounded-lg border border-blue-500/10 bg-[#081222] p-3 text-left transition hover:border-blue-500/30"
                                >
                                  <p className="text-base">
                                    {icon}
                                  </p>

                                  <p className="mt-1 text-sm font-semibold">
                                    {tab}
                                  </p>

                                  <p className="mt-1 text-[11px] text-gray-500">
                                    {label}
                                  </p>
                                </button>
                              )
                            )}
                          </div>
                        </div>

                        <div className="rounded-xl border border-blue-500/10 bg-[#020617]/70 p-4">
                          <div className="mb-4 flex items-center justify-between">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                                Activity
                              </p>

                              <h3 className="text-lg font-semibold">
                                Recent Activity
                              </h3>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {recentActivity.map(
                              ([title, desc, time]) => (
                                <div
                                  key={title}
                                  className="rounded-lg border border-blue-500/10 bg-[#081222] px-3 py-2"
                                >
                                  <div className="flex items-center justify-between gap-3">
                                    <p className="text-sm font-semibold">
                                      {title}
                                    </p>

                                    <p className="text-[11px] text-gray-500">
                                      {time}
                                    </p>
                                  </div>

                                  <p className="mt-1 text-xs text-gray-500">
                                    {desc}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        <div className="rounded-xl border border-blue-500/10 bg-[#020617]/70 p-4">
                          <div className="mb-4 flex items-center justify-between">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                                System
                              </p>

                              <h3 className="text-lg font-semibold">
                                Status Center
                              </h3>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {systemNotes.map(
                              ([label, value]) => (
                                <div
                                  key={label}
                                  className="flex items-center justify-between rounded-lg border border-blue-500/10 bg-[#081222] px-3 py-2"
                                >
                                  <p className="text-sm text-gray-400">
                                    {label}
                                  </p>

                                  <p className="text-xs font-semibold text-cyan-300">
                                    {value}
                                  </p>
                                </div>
                              )
                            )}
                          </div>

                          <button
                            onClick={() =>
                              setActiveTab("Bridge")
                            }
                            className="mt-3 h-10 w-full rounded-lg bg-blue-600 text-sm font-semibold hover:bg-blue-500"
                          >
                            Open Network Status
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "Portfolio" && (
                    <div className="space-y-4">
                      <PortfolioContent />
                      <PortfolioAnalyticsCard />
                    </div>
                  )}

                  {activeTab === "Governance" && (
                    <div className="space-y-4">
                      <GovernanceModule />

                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <GovernanceTerminal />

                        <GovernanceInsightCard
                          proposalCount={proposals.length}
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === "Staking" && (
                    <StakingPanel
                      stakedTokens={stakedTokens}
                      rewards={rewards}
                      apr={aprInput}
                      stakeAmount={stakeAmount}
                      setStakeAmount={setStakeAmount}
                      handleStake={handleStake}
                      handleUnstake={handleUnstake}
                      handleClaimRewards={
                        handleClaimRewards
                      }
                      handleCompoundRewards={
                        handleCompoundRewards
                      }
                      txLoading={txLoading}
                      txStatus={txStatus}
                    />
                  )}

                  {activeTab === "Treasury" && (
                    <div className="space-y-4">
                      <TreasuryModule
                        totalPortfolio={totalPortfolio}
                        ethBalance={ethBalance}
                        tokenBalance={tokenBalance}
                        ethPrice={ethPrice}
                        tokenPrice={tokenPrice}
                      />

                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <TreasuryRadar />

                        <TreasuryHealthCard
                          treasuryValue={treasuryValue}
                          liquidity={2500000}
                        />

                        <TreasuryRiskCard
                          treasuryValue={treasuryValue}
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === "Analytics" && (
                    <div className="space-y-4">
                      <AnalyticsModule
                        chartData={history}
                      />

                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <QuantEngine />
                        <MarketTerminal />
                      </div>

                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
                        <MarketDepthCard />
                        <LiquidityHeatmapCard />
                        <VolumeAnalyticsCard />
                      </div>
                    </div>
                  )}

                  {activeTab === "DAO" && (
                    <div className="space-y-4">
                      <DAOmodule />
                      <EcosystemOverview />
                    </div>
                  )}

                  {activeTab === "AI Insights" && (
                    <div className="space-y-4">
                      <AICommandCenter />

                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <AISystemStatus />
                        <AIPredictions />
                      </div>

                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <AIInsightsCard />
                        <AIChatCard />
                      </div>

                      <AIChat />
                    </div>
                  )}

                  {activeTab === "Swap" && (
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                      <div className="space-y-4">
                        <SwapCard />
                        <SwapExecutionCard />
                        <LiquidityCard />
                      </div>

                      <div className="space-y-4">
                        <SwapHistoryCard />
                        <LiquidityMatrix />
                      </div>
                    </div>
                  )}

                  {activeTab === "Bridge" && (
                    <div className="space-y-4">
                      <CrosschainCenter />

                      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <NetworkSwitcher />
                        <ProtocolStatus />
                      </div>
                    </div>
                  )}

                  {activeTab === "Settings" && (
                    <div className="rounded-xl border border-blue-500/10 bg-[#020617]/60 p-4">
                      <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-cyan-300">
                        Settings
                      </p>

                      <h2 className="text-xl font-semibold">
                        Protocol Settings
                      </h2>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                        Wallet display, preferences,
                        notification configuration and protocol
                        controls.
                      </p>
                    </div>
                  )}

                  {activeTab === "Admin" && (
                    <AdminControls
                      setDisplayApr={setAprInput}
                    />
                  )}
                </div>
              </div>
            </section>
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