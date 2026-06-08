"use client";

import {
  useState,
} from "react";

type SidebarProps = {

  activeTab: string;

  setActiveTab: (
    tab: string
  ) => void;
};

export default function Sidebar({

  activeTab,

  setActiveTab,

}: SidebarProps) {

  const [
    collapsed,
    setCollapsed,
  ] = useState(false);

  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

  // =====================================================
  // NAVIGATION
  // =====================================================

  const navigation = [

    ["Dashboard", "◉"],
    ["Portfolio", "◈"],
    ["Governance", "⬢"],
    ["Staking", "◎"],
    ["Treasury", "◬"],
    ["Analytics", "◫"],
    ["DAO", "⬡"],
    ["AI Insights", "✦"],
    ["Swap", "⇄"],
    ["Bridge", "⤴"],
    ["Settings", "⚙"],
    ["Admin", "⌘"],
  ];

  // =====================================================
  // RENDER
  // =====================================================

  return (

    <>

      {/* MOBILE MENU BUTTON */}

      <button

        onClick={() =>
          setMobileOpen(
            !mobileOpen
          )
        }

        className="fixed top-5 left-5 z-[200] lg:hidden w-14 h-14 rounded-2xl border border-white/[0.06] bg-[#07101f]/90 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.35)]"

      >

        ☰

      </button>

      {/* MOBILE OVERLAY */}

      {mobileOpen && (

        <div

          className="fixed inset-0 z-[180] bg-black/70 backdrop-blur-sm lg:hidden"

          onClick={() =>
            setMobileOpen(false)
          }

        />

      )}

      {/* MOBILE SIDEBAR */}

      <div

        className={`

          fixed
          top-0
          left-0
          z-[190]
          h-screen
          w-[320px]
          bg-[#030712]
          border-r
          border-white/[0.06]
          backdrop-blur-2xl
          transition-all
          duration-500
          lg:hidden
          overflow-y-auto

          ${
            mobileOpen

              ? "translate-x-0"

              : "-translate-x-full"
          }

        `}

      >

        <div className="p-5">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-2xl font-black bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">

              SkodriNΩN

            </h2>

            <button

              onClick={() =>
                setMobileOpen(false)
              }

              className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.03]"

            >

              ✕

            </button>

          </div>

          <div className="flex flex-col gap-2">

            {navigation.map(

              ([item, icon]) => (

                <button

                  key={String(item)}

                  onClick={() => {

                    setActiveTab(
                      String(item)
                    );

                    setMobileOpen(false);

                  }}

                  className={`

                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    px-4
                    py-4
                    transition-all
                    duration-300

                    ${
                      item === activeTab

                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"

                        : "text-gray-300 bg-white/[0.02]"
                    }

                  `}

                >

                  <span>

                    {icon}

                  </span>

                  <span>

                    {item}

                  </span>

                </button>
              )
            )}

          </div>

        </div>

      </div>

      {/* DESKTOP SIDEBAR */}

      <aside
        className={`

          hidden lg:flex
          sticky top-0
          min-h-screen
          flex-col
          justify-between
          overflow-hidden
          border-r
          border-white/[0.06]
          bg-[#030712]/95
          backdrop-blur-2xl
          transition-all
          duration-500

          ${
            collapsed
              ? "w-[110px]"
              : "w-[280px] xl:w-[300px]"
          }

        `}
      >

        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_55%)]" />

        {/* GLOW */}

        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* CONTENT */}

        <div className="relative z-10 flex flex-col h-full px-4 py-5">

          {/* TOP */}

          <div>

            {/* HEADER */}

            <div className="flex items-center justify-between mb-10">

              <div className="flex items-center gap-4 overflow-hidden">

                <div className="min-w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)]">

                  <span className="text-2xl font-black">

                    Ω

                  </span>

                </div>

                {!collapsed && (

                  <div>

                    <h1 className="text-[28px] leading-none font-black tracking-wide bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">

                      SkodriNΩN

                    </h1>

                    <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mt-2">

                      Protocol Terminal

                    </p>

                  </div>
                )}

              </div>

              {/* COLLAPSE */}

              <button

                onClick={() =>
                  setCollapsed(
                    !collapsed
                  )
                }

                className="hidden xl:flex w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.03] items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/20 transition-all duration-300"

              >

                {collapsed
                  ? "→"
                  : "←"}

              </button>

            </div>

            {/* COMMAND */}

            {!collapsed && (

              <div className="mb-8 rounded-3xl border border-cyan-500/10 bg-[#07101f]/60 backdrop-blur-xl p-4">

                <div className="flex items-center justify-between mb-3">

                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">

                    Command Center

                  </p>

                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                </div>

                <button className="w-full rounded-2xl border border-white/[0.05] bg-[#020617] px-4 py-3 text-left text-sm text-gray-400 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-300">

                  Search commands...

                </button>

              </div>
            )}

            {/* NAVIGATION */}

            <div className="flex flex-col gap-2 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-blue-500/10 scrollbar-track-transparent max-h-[calc(100vh-340px)]">

              {navigation.map(

                ([item, icon]) => (

                  <button

                    key={String(item)}

                    onClick={() =>
                      setActiveTab(
                        String(item)
                      )
                    }

                    className={`

                      group
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      px-4
                      py-4
                      transition-all
                      duration-300

                      ${
                        item === activeTab

                          ? "bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500/40 text-white shadow-[0_0_30px_rgba(59,130,246,0.25)]"

                          : "border-transparent text-gray-300 hover:border-blue-500/20 hover:bg-blue-500/5"
                      }

                    `}

                  >

                    <div className="flex items-center gap-4">

                      <span className="text-lg min-w-[22px]">

                        {icon}

                      </span>

                      {!collapsed && (

                        <span className="font-medium whitespace-nowrap">

                          {item}

                        </span>
                      )}

                    </div>

                    {!collapsed && (

                      <span className="opacity-40 group-hover:opacity-100 transition-all duration-300">

                        →

                      </span>
                    )}

                  </button>
                )
              )}

            </div>

          </div>

          {/* FOOTER */}

          {!collapsed && (

            <div className="mt-6">

              <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(59,130,246,0.08)]">

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <h3 className="text-2xl font-bold text-cyan-300">

                      Skodri AI

                    </h3>

                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-[0.3em]">

                      Neural Governance Engine

                    </p>

                  </div>

                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                </div>

                <p className="text-gray-400 text-sm leading-7 mb-6">

                  AI treasury coordination, governance intelligence and institutional blockchain analytics are active.

                </p>

                <button className="w-full rounded-2xl py-4 bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.2)]">

                  Launch AI Terminal

                </button>

              </div>

              <div className="mt-6 text-center">

                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">

                  SkodriNΩN OS v3.0

                </p>

              </div>

            </div>
          )}

        </div>

      </aside>

    </>
  );
}