export async function getEthPrice() {

  try {

    const controller =
      new AbortController();

    const timeout =
      setTimeout(() => {

        controller.abort();

      }, 8000);

    const res = await fetch(

      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",

      {

        signal:
          controller.signal,

        next: {

          revalidate: 30,
        },
      }
    );

    clearTimeout(timeout);

    if (!res.ok) {
      return 0;
    }

    const data =
      await res.json();

    const price =
      data?.ethereum?.usd;

    return typeof price ===
      "number"
        ? price
        : 0;

  } catch (error) {

    console.error(
      "ETH price error:",
      error
    );

    return 0;
  }
}