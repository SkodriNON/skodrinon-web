"use client";

import {

  formatToken,
  formatPercent,

} from "../utils/format";

type Props = {

  stakedTokens: number;

  rewards: number;

  apr: number;

  stakeAmount: string;

  setStakeAmount: (
    value: string
  ) => void;

  handleStake: (
    amount: string
  ) => void;

  handleUnstake: (
    amount: string
  ) => void;

  handleClaimRewards: () => void;

  handleCompoundRewards: () => void;

  txLoading: boolean;

  txStatus:
    | "idle"
    | "approving"
    | "wallet"
    | "confirming"
    | "success"
    | "failed";

  unlockCountdown?: string;

  unlocked?: boolean;
};

export default function StakingPanel({

  stakedTokens,
  rewards,
  apr,

  stakeAmount,
  setStakeAmount,

  handleStake,
  handleUnstake,

  handleClaimRewards,
  handleCompoundRewards,

  txLoading,
  txStatus,

  unlockCountdown,
  unlocked,

}: Props) {

  function getStatusText() {

    switch (txStatus) {

      case "approving":
        return "Approving NON...";

      case "wallet":
        return "Waiting Wallet Confirmation...";

      case "confirming":
        return "Confirming Transaction...";

      case "success":
        return "Transaction Successful";

      case "failed":
        return "Transaction Failed";

      default:
        return null;
    }
  }

  const statusText =
    getStatusText();

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* STAKED */}

      <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6 transition-all duration-300 hover:border-blue-500/30">

        <p className="text-gray-400 mb-3">
          Staked NON
        </p>

        <h2 className="text-xl font-bold transition-all duration-300">

          {
            txLoading
              ? "Updating..."
              : formatToken(
                  stakedTokens
                )
          }

        </h2>

      </div>

      {/* REWARDS */}

      <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6 transition-all duration-300 hover:border-blue-500/30">

        <p className="text-gray-400 mb-3">
          Earned Rewards
        </p>

        <h2 className="text-xl font-bold text-green-400 transition-all duration-300">

          {
            txLoading
              ? "Updating..."
              : formatToken(
                  rewards
                )
          }

        </h2>

      </div>

      {/* APR */}

      <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6 transition-all duration-300 hover:border-blue-500/30">

        <p className="text-gray-400 mb-3">
          APR
        </p>

        <h2 className="text-xl font-bold text-blue-400 transition-all duration-300">

          {
            txLoading
              ? "Updating..."
              : formatPercent(
                  apr
                )
          }

        </h2>

      </div>

      {/* UNLOCK TIMER */}

      <div className="rounded-xlborder border-cyan-500/10 bg-[#07101f]/80 p-6 transition-all duration-300 hover:border-cyan-500/30">

        <p className="text-gray-400 mb-3">
          Unlock Status
        </p>

        <h2 className="text-2xl font-bold text-cyan-300">

          {

            unlocked
              ? "Unlocked"
              : unlockCountdown ||
                "No Active Lock"

          }

        </h2>

        <p className="text-xs text-gray-500 mt-3">

          {

            unlocked
              ? "Tokens available for unstake"
              : "Live staking countdown"

          }

        </p>

      </div>

      {/* POSITION ANALYTICS */}

<div className="rounded-xlborder border-purple-500/10 bg-[#07101f]/80 p-6 transition-all duration-300 hover:border-purple-500/30 md:col-span-2">

  <div className="flex items-center justify-between mb-6">

    <div>

      <p className="text-gray-400 text-sm mb-2">

        Staking Position

      </p>

      <h3 className="text-2xl font-bold">

        Advanced Analytics

      </h3>

    </div>

    <div className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm font-semibold">

      Live Position

    </div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

    {/* YEARLY */}

    <div className="rounded-2xl border border-blue-500/10 bg-[#0b1728] p-5">

      <p className="text-xs text-gray-400 mb-2">

        Estimated Yearly

      </p>

      <h4 className="text-2xl font-bold text-cyan-300">

        {

          formatToken(

            (stakedTokens * apr) / 100

          )

        }

      </h4>

      <p className="text-xs text-cyan-400 mt-2">

        NON / year

      </p>

    </div>

    {/* MONTHLY */}

    <div className="rounded-2xl border border-blue-500/10 bg-[#0b1728] p-5">

      <p className="text-xs text-gray-400 mb-2">

        Estimated Monthly

      </p>

      <h4 className="text-2xl font-bold text-green-300">

        {

          formatToken(

            ((stakedTokens * apr) / 100) / 12

          )

        }

      </h4>

      <p className="text-xs text-green-400 mt-2">

        NON / month

      </p>

    </div>

    {/* DAILY */}

    <div className="rounded-2xl border border-blue-500/10 bg-[#0b1728] p-5">

      <p className="text-xs text-gray-400 mb-2">

        Estimated Daily

      </p>

      <h4 className="text-2xl font-bold text-purple-300">

        {

          formatToken(

            ((stakedTokens * apr) / 100) / 365

          )

        }

      </h4>

      <p className="text-xs text-purple-400 mt-2">

        NON / day

      </p>

    </div>

    {/* ROI */}

    <div className="rounded-2xl border border-blue-500/10 bg-[#0b1728] p-5">

      <p className="text-xs text-gray-400 mb-2">

        Estimated ROI

      </p>

      <h4 className="text-2xl font-bold text-yellow-300">

        {formatPercent(apr)}

      </h4>

      <p className="text-xs text-yellow-400 mt-2">

        Annual yield

      </p>

    </div>

  </div>

</div>

      {/* ACTION PANEL */}

      <div className="rounded-xlborder border-blue-500/10 bg-[#07101f]/80 p-6 flex flex-col gap-4 transition-all duration-300 hover:border-blue-500/30 md:col-span-2">

        <p className="text-gray-400 text-sm">
          Enter amount
        </p>

        <input

          type="text"

          value={stakeAmount ?? ""}

          onChange={(e) =>
            setStakeAmount(
              e.target.value
            )
          }

          placeholder="100"

          autoComplete="off"

          disabled={txLoading}

          className="bg-[#020617] border border-blue-500/20 rounded-2xl px-4 py-3 outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"

        />

        {/* TX STATUS */}

        {

          statusText && (

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-300 animate-pulse">

              {statusText}

            </div>

          )

        }

        {/* BUTTONS */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* STAKE */}

          <button

            disabled={txLoading}

            onClick={() =>
              handleStake(
                stakeAmount
              )
            }

            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"

          >

            {
              txLoading
                ? "Processing..."
                : "Stake NON"
            }

          </button>

          {/* UNSTAKE */}

          <button

            disabled={
              txLoading ||
              !unlocked
            }

            onClick={() =>
              handleUnstake(
                stakeAmount
              )
            }

            className="px-5 py-3 rounded-2xl border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed"

          >

            {
              txLoading
                ? "Processing..."
                : unlocked
                ? "Unstake NON"
                : "Locked"
            }

          </button>

          {/* CLAIM */}

          <button

            disabled={txLoading}

            onClick={
              handleClaimRewards
            }

            className="px-5 py-3 rounded-2xl border border-green-500/30 text-green-400 transition-all duration-300 hover:border-green-500/60 disabled:opacity-50 disabled:cursor-not-allowed"

          >

            {
              txLoading
                ? "Processing..."
                : "Claim Rewards"
            }

          </button>

          {/* COMPOUND */}

          <button

            disabled={txLoading}

            onClick={
              handleCompoundRewards
            }

            className="px-5 py-3 rounded-2xl border border-purple-500/30 text-purple-400 transition-all duration-300 hover:border-purple-500/60 disabled:opacity-50 disabled:cursor-not-allowed"

          >

            {
              txLoading
                ? "Processing..."
                : "Compound Rewards"
            }

          </button>

        </div>

      </div>

    </div>
  );
}