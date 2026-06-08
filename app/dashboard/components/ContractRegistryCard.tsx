"use client";

import {
  useProtocolContracts,
} from "../hooks/useProtocolContracts";

export default function ContractRegistryCard() {

  const {

    router,

    treasury,

    factory,

  } = useProtocolContracts();

  return (

    <div className="rounded-3xl border border-cyan-500/10 bg-[#07101f]/80 p-6">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-2xl font-bold">

          Contract Registry

        </h3>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

          ONCHAIN READY

        </div>

      </div>

      <div className="space-y-5">

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Router Contract

          </p>

          <p className="text-sm font-semibold text-cyan-300 break-all">

            {router.address}

          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Treasury Contract

          </p>

          <p className="text-sm font-semibold text-pink-300 break-all">

            {treasury.address}

          </p>

        </div>

        <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-5">

          <p className="text-xs text-gray-400 mb-2">

            Factory Contract

          </p>

          <p className="text-sm font-semibold text-yellow-300 break-all">

            {factory.address}

          </p>

        </div>

      </div>

    </div>
  );
}