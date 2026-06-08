const ZERO_ADDRESS =
  "0x0000000000000000000000000000000000000000" as const;

// =====================================================
// VALIDATE ADDRESS
// =====================================================

function validateAddress(

  name: string,

  address?: string

) {

  // MISSING

  if (!address) {

    console.error(
      `[ENV ERROR] Missing ${name}`
    );

    return ZERO_ADDRESS;
  }

  // FORMAT

  if (
    !address.startsWith("0x")
  ) {

    console.error(
      `[ENV ERROR] Invalid ${name}: ${address}`
    );

    return ZERO_ADDRESS;
  }

  // LENGTH

  if (address.length !== 42) {

    console.error(
      `[ENV ERROR] Invalid length for ${name}: ${address}`
    );

    return ZERO_ADDRESS;
  }

  return address as `0x${string}`;
}

// =====================================================
// CONTRACTS
// =====================================================

export const contracts = {

  token: validateAddress(

    "NEXT_PUBLIC_TOKEN_ADDRESS",

    process.env
      .NEXT_PUBLIC_TOKEN_ADDRESS
  ),

  treasury: validateAddress(

    "NEXT_PUBLIC_TREASURY_ADDRESS",

    process.env
      .NEXT_PUBLIC_TREASURY_ADDRESS
  ),

  governance: validateAddress(

    "NEXT_PUBLIC_GOVERNANCE_ADDRESS",

    process.env
      .NEXT_PUBLIC_GOVERNANCE_ADDRESS
  ),

  staking: validateAddress(

    "NEXT_PUBLIC_STAKING_ADDRESS",

    process.env
      .NEXT_PUBLIC_STAKING_ADDRESS
  ),

  liquidity: validateAddress(

    "NEXT_PUBLIC_LIQUIDITY_ADDRESS",

    process.env
      .NEXT_PUBLIC_LIQUIDITY_ADDRESS
  ),

  router: validateAddress(

    "NEXT_PUBLIC_ROUTER_ADDRESS",

    process.env
      .NEXT_PUBLIC_ROUTER_ADDRESS
  ),
};