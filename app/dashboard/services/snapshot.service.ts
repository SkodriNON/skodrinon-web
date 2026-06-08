export async function getSnapshotProposals() {

  return [
    {
      id: "1",
      title:
        "Treasury Expansion Proposal",
      votes: 12450,
      quorum: 68,
      participation: 82,
      status: "Active",
    },

    {
      id: "2",
      title:
        "Staking Rewards Adjustment",
      votes: 8420,
      quorum: 51,
      participation: 64,
      status: "Pending",
    },
  ];
}