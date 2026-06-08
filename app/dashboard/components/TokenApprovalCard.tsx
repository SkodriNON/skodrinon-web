"use client";

import {
  useTokenApproval,
} from "../hooks/useTokenApproval";

export default function TokenApprovalCard() {

  const {

    approveToken,

    isPending,

    error,

  } = useTokenApproval();

  async function handleApprove() {

    await approveToken(

      "0x0000000000000000000000000000000000000000",

      BigInt(
        "1000000000000000000"
      )
    );
  }

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Token Approval

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          ERC20 APPROVAL

        </div>

      </div>

      <div className="space-y-5">

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Approval Status

          </p>

          <p className={`text-lg font-semibold ${
            isPending

              ? "text-yellow-300"

              : error

              ? "text-red-300"

              : "text-green-300"
          }`}>

            {isPending

              ? "Approval Pending"

              : error

              ? "Approval Failed"

              : "Ready For Approval"}
          </p>

        </div>

        <button

          onClick={handleApprove}

          className="w-full rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all px-5 py-4 text-black font-bold"

        >

          Approve Token

        </button>

      </div>

    </div>
  );
}