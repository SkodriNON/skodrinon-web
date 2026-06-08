type Transaction = {

  hash: string;

  from: string;
  to: string;

  value: string;

  timestamp: string;

  type: string;

  explorerUrl: string;
};

export async function getTransactions(
  address: string
): Promise<Transaction[]> {

  try {

    if (
      !address ||
      !address.startsWith("0x")
    ) {
      return [];
    }

    const apiKey =
      process.env
        .NEXT_PUBLIC_ETHERSCAN_API;

    if (!apiKey) {
      return [];
    }

    const res = await fetch(

      "https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=${apiKey}"

    );

    if (!res.ok) {
      return [];
    }

    const data =
      await res.json();

    if (
      !data ||
      !Array.isArray(
        data.result
      )
    ) {
      return [];
    }

    return data.result.map(
      (tx: any) => {

        let type = "Transfer";

        if (
          tx.input?.startsWith(
            "0xa694fc3a"
          )
        ) {
          type = "Stake";
        }

        if (
          tx.input?.startsWith(
            "0x2e17de78"
          )
        ) {
          type = "Claim";
        }

        if (
          tx.input?.startsWith(
            "0x51cff8d9"
          )
        ) {
          type = "Unstake";
        }

        return {

          hash: tx.hash,

          from: tx.from,

          to: tx.to,

          value: (
            Number(tx.value) /
            1e18
          ).toFixed(4),

          timestamp:
            new Date(
              Number(
                tx.timeStamp
              ) * 1000
            ).toLocaleString(),

          type,

          explorerUrl:
            `https://sepolia.etherscan.io/tx/${tx.hash}`,
        };
      }
    );

  } catch (error) {

    console.error(
      "Transaction fetch error:",
      error
    );

    return [];
  }
}