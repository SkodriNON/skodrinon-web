"use client";

import { useState } from "react";

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Sidebar({
  activeTab,
  setActiveTab,
}: SidebarProps) {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const navigation = [
    ["Dashboard", "◉"],
    ["Portfolio", "◈"],
    ["Staking", "◎"],
    ["Swap", "⇄"],
    ["Bridge", "⤴"],
    ["Governance", "⬢"],
    ["Treasury", "◬"],
    ["Analytics", "◫"],
    ["DAO", "⬡"],
    ["AI Insights", "✦"],
    ["Settings", "⚙"],
    ["Admin", "⌘"],
  ];

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-[200] flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-[#07101f] text-white lg:hidden"
      >
        ☰
      </button>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-[180] bg-black/70 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-[190] h-screen w-[240px] border-r border-white/[0.06] bg-[#030712] transition-transform duration-300 lg:sticky lg:z-40 lg:translate-x-0 ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-3 py-4">
          <div className="mb-5">
            <h1 className="text-lg font-bold">
              SkodriNΩN
            </h1>

            <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-gray-500">
              Protocol Terminal
            </p>
          </div>

          <div className="mb-4 rounded-lg border border-white/[0.06] bg-[#07101f] p-3">
            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
              Command Center
            </p>

            <div className="mt-2 rounded-md border border-white/[0.05] bg-[#020617] px-3 py-2 text-xs text-gray-500">
              Search...
            </div>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
            {navigation.map(([item, icon]) => {
              const active = item === activeTab;

              return (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    setMobileOpen(false);
                  }}
                  className={`flex h-10 w-full items-center justify-between rounded-lg px-3 text-sm transition ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-5 text-center text-sm">
                      {icon}
                    </span>

                    <span className="font-medium">
                      {item}
                    </span>
                  </span>

                  <span className="text-xs opacity-40">
                    →
                  </span>
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => setActiveTab("AI Insights")}
            className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-3 text-left"
          >
            <p className="text-sm font-semibold text-cyan-300">
              Skodri AI
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Protocol intelligence
            </p>
          </button>
        </div>
      </aside>
    </>
  );
}