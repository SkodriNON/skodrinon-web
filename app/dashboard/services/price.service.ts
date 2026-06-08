export async function getEthPrice() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return 0;
    }

    const data = await res.json();

    const price = Number(
      data?.ethereum?.usd ?? 0
    );

    if (!Number.isFinite(price)) {
      return 0;
    }

    return price;
  } catch {
    return 0;
  }
}