export function formatToken(
  value: number
) {

  return value.toFixed(2);
}

export function formatUsd(
  value: number
) {

  return `$${value.toFixed(2)}`;
}

export function formatPercent(
  value: number
) {

  return `${value.toFixed(2)}%`;
}

export function fromWei(
  value: bigint | number | string
) {

  return Number(value) / 1e18;
}