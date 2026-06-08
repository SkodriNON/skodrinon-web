import GovernanceCard
from "../components/GovernanceCard";

import {
  useVotingPower,
} from "../hooks/useVotingPower";

import {
  useProposals,
} from "../hooks/useProposals";

import {
  useAccount,
  useReadContract,
} from "wagmi";

import { erc20Abi }
from "../../lib/erc20";

import { CONTRACTS }
from "../../lib/contracts";

export default function GovernanceModule() {

  const { address } =
    useAccount();

  const {
    data: tokenBalance,
  } = useReadContract({

    address:
      CONTRACTS.ethereum.TOKEN,

    abi:
      erc20Abi,

    functionName:
      "balanceOf",

    args:
      address
        ? [address]
        : undefined,

  });

  const {
    votingPower,
  } = useVotingPower(
    tokenBalance
  );

  const {
    proposals,
  } = useProposals();

  return (

    <div className="space-y-7">

      <div>

        <h2 className="text-xl font-bold mb-3">
          Governance
        </h2>

        <p className="text-gray-400">
          DAO voting, delegation and proposals.
        </p>

      </div>

      <GovernanceCard
        votingPower={votingPower}
        proposals={proposals}
      />

    </div>
  );
}