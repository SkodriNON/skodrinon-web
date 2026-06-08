"use client";

import {
  mockPools,
} from "../data/mockPool";

type PoolSelectorProps = {

  selectedPool:
    string;

  setSelectedPool:
    (
      value: string
    ) => void;
};

export default function PoolSelector({

  selectedPool,

  setSelectedPool,

}: PoolSelectorProps) {

  return (

    <div className="rounded-2xl border border-cyan-500/10 bg-[#081222] p-4">

      <p className="text-sm text-gray-400 mb-3">

        Select Pool

      </p>

      <select

        value={selectedPool}

        onChange={(e) =>
          setSelectedPool(
            e.target.value
          )
        }

        className="w-full rounded-2xl bg-[#07101f] border border-cyan-500/10 px-4 py-4 outline-none"

      >

        {mockPools.map((pool) => (

          <option

            key={pool.id}

            value={pool.id}

          >

            {pool.tokenA}
            {" / "}
            {pool.tokenB}

          </option>
        ))}

      </select>

    </div>
  );
}