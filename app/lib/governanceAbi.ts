export const governanceAbi = [

  // =====================================================
  // CREATE PROPOSAL
  // =====================================================

  {
    inputs: [

      {
        internalType: "string",
        name: "description",
        type: "string",
      },

      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },

    ],

    name: "createProposal",

    outputs: [],

    stateMutability: "nonpayable",

    type: "function",
  },

  // =====================================================
  // VOTE
  // =====================================================

  {
    inputs: [

      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },

      {
        internalType: "uint256",
        name: "yesPercent",
        type: "uint256",
      },

      {
        internalType: "uint256",
        name: "noPercent",
        type: "uint256",
      },

    ],

    name: "vote",

    outputs: [],

    stateMutability: "nonpayable",

    type: "function",
  },

  // =====================================================
  // EXECUTE
  // =====================================================

  {
    inputs: [

      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },

    ],

    name: "executeProposal",

    outputs: [],

    stateMutability: "nonpayable",

    type: "function",
  },

  // =====================================================
  // PROPOSAL COUNT
  // =====================================================

  {
    inputs: [],

    name: "proposalCount",

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

  // =====================================================
  // PROPOSALS
  // =====================================================

  {
    inputs: [

      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },

    ],

    name: "proposals",

    outputs: [

      {
        internalType: "string",
        name: "description",
        type: "string",
      },

      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },

      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },

      {
        internalType: "uint256",
        name: "yesVotes",
        type: "uint256",
      },

      {
        internalType: "uint256",
        name: "noVotes",
        type: "uint256",
      },

      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },

    ],

    stateMutability: "view",

    type: "function",
  },

] as const;