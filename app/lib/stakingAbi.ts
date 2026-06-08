export const stakingAbi = [

  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "stakedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },

  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "pendingRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },

  {
    inputs: [],
    name: "rewardPerSecond",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },

  {
    inputs: [],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },

  // =====================================
  // UNLOCK TIMER
  // =====================================

  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "unlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },

  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [],
    name: "compoundRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [
      {
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "setRewardRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMinimum",
        type: "uint256",
      },
    ],
    name: "setMinimumStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [
      {
        internalType: "uint256",
        name: "newLockPeriod",
        type: "uint256",
      },
    ],
    name: "setLockPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setEmergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

] as const;