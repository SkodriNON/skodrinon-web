export const erc20Abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
  },

  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    ,
{
  inputs: [
    {
      internalType: "address",
      name: "spender",
      type: "address",
    },
    {
      internalType: "uint256",
      name: "amount",
      type: "uint256",
    },
  ],
  name: "approve",
  outputs: [
    {
      internalType: "bool",
      name: "",
      type: "bool",
    },
  ],
  stateMutability: "nonpayable",
  type: "function",
}
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    type: "function",
    stateMutability: "view",
  },
] as const;