"use client";

import {
  useState,
  useMemo,
} from "react";

import {
  parseEther,
} from "viem";

import {
  useAccount,
  useWriteContract,
} from "wagmi";

import {
  stakingAbi,
} from "../../lib/stakingAbi";

import { CONTRACTS }
from "../../lib/contracts";

const OWNER_ADDRESS =
  process.env
    .NEXT_PUBLIC_OWNER_ADDRESS
    ?.toLowerCase();

export default function AdminControls({

  setDisplayApr

}: {

  setDisplayApr: (
    value: number
  ) => void;

}) {

  const {
    address,
  } = useAccount();

  const {
    writeContractAsync,
  } = useWriteContract();

  const isOwner = useMemo(() => {

    if (!address) {
      return false;
    }

    return (
      address.toLowerCase() ===
      OWNER_ADDRESS
    );

  }, [address]);

  const [rewardRate, setRewardRate] =
    useState("");

  const [aprInput, setAprInput] =
  useState("12");

  const [minimumStake, setMinimumStake] =
    useState("");

  const [lockDays, setLockDays] =
    useState("");

  const [rewardDeposit, setRewardDeposit] =
    useState("");

  const [txLoading, setTxLoading] =
    useState(false);

  const [status, setStatus] =
    useState<string | null>(null);

  function updateApr() {

  const value =
    Number(aprInput);

  if (
    Number.isNaN(value)
  ) {
    return;
  }

  setDisplayApr(value);
}

  if (!isOwner) {

    return (

      <div className="rounded-xlborder border-red-500/20 bg-[#07101f]/80 p-8 text-center">

        <h2 className="text-2xl font-bold text-red-400 mb-3">
          Admin Only
        </h2>

        <p className="text-gray-400">
          Connected wallet is not protocol owner.
        </p>

      </div>
    );
  }

  async function executeAction(
    callback: () => Promise<void>,
    successMessage: string
  ) {

    if (txLoading) {
      return;
    }

    try {

      setTxLoading(true);
      setStatus("Processing transaction...");

      await callback();

      setStatus(successMessage);

    } catch (error) {

      console.error(error);

      setStatus(
        "Transaction failed"
      );

    } finally {

      setTxLoading(false);
    }
  }

  return (

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

      {/* REWARD RATE */}

      <div className="rounded-xlborder border-red-500/20 bg-[#07101f]/80 p-6 flex flex-col gap-4">

        <h2 className="text-2xl font-bold text-red-400">
          Reward Rate
        </h2>

        <p className="text-gray-400 text-sm">
          Controls protocol APR emissions.
        </p>

        <input
          type="number"
          value={rewardRate}
          onChange={(e) =>
            setRewardRate(
              e.target.value
            )
          }
          placeholder="1000000000000"
          className="bg-[#020617] border border-red-500/20 rounded-2xl px-4 py-3 outline-none"
        />

        <button
          disabled={txLoading}
          onClick={() =>
            executeAction(async () => {

              await writeContractAsync({

                address:
                  CONTRACTS.ethereum.STAKING,

                abi:
                  stakingAbi,

                functionName:
                  "setRewardRate",

                args: [
                  BigInt(rewardRate),
                ],
              });

            }, "Reward rate updated")
          }
          className="px-5 py-3 rounded-2xl bg-red-600 font-semibold disabled:opacity-50"
        >
          Update Reward Rate
        </button>

      </div>
      <div className="rounded-xlborder border-blue-500/20 bg-[#07101f]/80 p-6 flex flex-col gap-4">

  <h2 className="text-2xl font-bold text-blue-400">
    Display APR
  </h2>

  <p className="text-gray-400 text-sm">
    Manual frontend APR display.
  </p>

  <input

    type="number"

    value={aprInput}

    onChange={(e) =>
      setAprInput(
  e.target.value
)
    }

    placeholder="12"

    className="bg-[#020617] border border-blue-500/20 rounded-2xl px-4 py-3 outline-none"

  />

  <button

    onClick={updateApr}

    className="px-5 py-3 rounded-2xl bg-blue-600 font-semibold"

  >

    Update APR

  </button>

</div>

      {/* MINIMUM STAKE */}

      <div className="rounded-xlborder border-red-500/20 bg-[#07101f]/80 p-6 flex flex-col gap-4">

        <h2 className="text-2xl font-bold text-red-400">
          Minimum Stake
        </h2>

        <p className="text-gray-400 text-sm">
          Update protocol minimum stake.
        </p>

        <input
          type="number"
          value={minimumStake}
          onChange={(e) =>
            setMinimumStake(
              e.target.value
            )
          }
          placeholder="100"
          className="bg-[#020617] border border-red-500/20 rounded-2xl px-4 py-3 outline-none"
        />

        <button
          disabled={txLoading}
          onClick={() =>
            executeAction(async () => {

              await writeContractAsync({

                address:
                  CONTRACTS.ethereum.STAKING,

                abi:
                  stakingAbi,

                functionName:
                  "setMinimumStake",

                args: [
                  parseEther(minimumStake),
                ],
              });

            }, "Minimum stake updated")
          }
          className="px-5 py-3 rounded-2xl bg-red-600 font-semibold disabled:opacity-50"
        >
          Update Minimum Stake
        </button>

      </div>

      {/* LOCK PERIOD */}

      <div className="rounded-xlborder border-red-500/20 bg-[#07101f]/80 p-6 flex flex-col gap-4">

        <h2 className="text-2xl font-bold text-red-400">
          Lock Period
        </h2>

        <p className="text-gray-400 text-sm">
          Update staking lock duration.
        </p>

        <input
          type="number"
          value={lockDays}
          onChange={(e) =>
            setLockDays(
              e.target.value
            )
          }
          placeholder="7"
          className="bg-[#020617] border border-red-500/20 rounded-2xl px-4 py-3 outline-none"
        />

        <button
          disabled={txLoading}
          onClick={() =>
            executeAction(async () => {

              const seconds =
                Number(lockDays) *
                24 *
                60 *
                60;

              await writeContractAsync({

                address:
                  CONTRACTS.ethereum.STAKING,

                abi:
                  stakingAbi,

                functionName:
                  "setLockPeriod",

                args: [
                  BigInt(seconds),
                ],
              });

            }, "Lock period updated")
          }
          className="px-5 py-3 rounded-2xl bg-red-600 font-semibold disabled:opacity-50"
        >
          Update Lock Period
        </button>

      </div>

      {/* PAUSE CONTROLS */}

      <div className="rounded-xlborder border-red-500/20 bg-[#07101f]/80 p-6 flex flex-col gap-4">

        <h2 className="text-2xl font-bold text-red-400">
          Protocol Controls
        </h2>

        <p className="text-gray-400 text-sm">
          Emergency protocol actions.
        </p>

        <button
          disabled={txLoading}
          onClick={() =>
            executeAction(async () => {

              await writeContractAsync({

                address:
                  CONTRACTS.ethereum.STAKING,

                abi:
                  stakingAbi,

                functionName:
                  "pause",

                args: [],
              });

            }, "Protocol paused")
          }
          className="px-5 py-3 rounded-2xl bg-yellow-600 font-semibold disabled:opacity-50"
        >
          Pause Protocol
        </button>

        <button
          disabled={txLoading}
          onClick={() =>
            executeAction(async () => {

              await writeContractAsync({

                address:
                  CONTRACTS.ethereum.STAKING,

                abi:
                  stakingAbi,

                functionName:
                  "unpause",

                args: [],
              });

            }, "Protocol unpaused")
          }
          className="px-5 py-3 rounded-2xl bg-green-600 font-semibold disabled:opacity-50"
        >
          Unpause Protocol
        </button>

      </div>

      {/* EMERGENCY */}

      <div className="rounded-xlborder border-red-500/20 bg-[#07101f]/80 p-6 flex flex-col gap-4">

        <h2 className="text-2xl font-bold text-red-400">
          Emergency Withdraw
        </h2>

        <p className="text-gray-400 text-sm">
          Toggle emergency withdrawals.
        </p>

        <div className="flex gap-4">

          <button
            disabled={txLoading}
            onClick={() =>
              executeAction(async () => {

                await writeContractAsync({

                  address:
                    CONTRACTS.ethereum.STAKING,

                  abi:
                    stakingAbi,

                  functionName:
                    "setEmergencyWithdraw",

                  args: [true],
                });

              }, "Emergency withdraw enabled")
            }
            className="flex-1 px-5 py-3 rounded-2xl bg-red-600 font-semibold disabled:opacity-50"
          >
            Enable
          </button>

          <button
            disabled={txLoading}
            onClick={() =>
              executeAction(async () => {

                await writeContractAsync({

                  address:
                    CONTRACTS.ethereum.STAKING,

                  abi:
                    stakingAbi,

                  functionName:
                    "setEmergencyWithdraw",

                  args: [false],
                });

              }, "Emergency withdraw disabled")
            }
            className="flex-1 px-5 py-3 rounded-2xl bg-gray-700 font-semibold disabled:opacity-50"
          >
            Disable
          </button>

        </div>

      </div>

      {/* DEPOSIT REWARDS */}

      <div className="rounded-xlborder border-red-500/20 bg-[#07101f]/80 p-6 flex flex-col gap-4">

        <h2 className="text-2xl font-bold text-red-400">
          Deposit Rewards
        </h2>

        <p className="text-gray-400 text-sm">
          Add reward liquidity to protocol.
        </p>

        <input
          type="number"
          value={rewardDeposit}
          onChange={(e) =>
            setRewardDeposit(
              e.target.value
            )
          }
          placeholder="1000"
          className="bg-[#020617] border border-red-500/20 rounded-2xl px-4 py-3 outline-none"
        />

        <button
          disabled={txLoading}
          onClick={() =>
            executeAction(async () => {

              await writeContractAsync({

                address:
                  CONTRACTS.ethereum.STAKING,

                abi:
                  stakingAbi,

                functionName:
                  "depositRewards",

                args: [
                  parseEther(
                    rewardDeposit
                  ),
                ],
              });

            }, "Rewards deposited")
          }
          className="px-5 py-3 rounded-2xl bg-purple-600 font-semibold disabled:opacity-50"
        >
          Deposit Rewards
        </button>

      </div>

      {/* STATUS */}

      <div className="rounded-xlborder border-blue-500/20 bg-[#07101f]/80 p-6 flex items-center justify-center text-center">

        <div>

          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Protocol Status
          </h2>

          <p className="text-gray-300">
            {
              status ||
              "Admin system ready"
            }
          </p>

        </div>

      </div>

    </div>
  );
}
