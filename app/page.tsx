export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur border-b border-gray-800 bg-black/70 px-8 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">
          SkodriNΩN
        </h1>

        <div className="flex gap-6 text-sm text-gray-400">

          <a
            href="#tokenomics"
            className="hover:text-blue-400 transition"
          >
            Tokenomics
          </a>

          <a
            href="#security"
            className="hover:text-blue-400 transition"
          >
            Security
          </a>

          <a
            href="#contracts"
            className="hover:text-blue-400 transition"
          >
            Contracts
          </a>

          <a
            href="#community"
            className="hover:text-blue-400 transition"
          >
            Community
          </a>

        </div>

      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <img
          src="/non.png"
          alt="SkodriNΩN"
          className="mb-12 rounded-3xl border border-blue-500/20 shadow-2xl max-w-5xl w-full hover:scale-[1.01] transition duration-500"
        />

        <h2 className="text-6xl font-bold mb-8 text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]">
          Governance-first ecosystem
        </h2>

        <p className="text-xl text-gray-400 max-w-3xl mb-12">
          Built on Ethereum with focus on transparency,
          liquidity security and long-term decentralized governance.
        </p>

        <div className="grid grid-cols-2 gap-4 max-w-2xl w-full">

          <div className="border border-gray-800 p-8 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">
            LP Locked
          </div>

          <div className="border border-gray-800 p-8 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">
            Multisig Protected
          </div>

          <div className="border border-gray-800 p-8 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">
            Verified Contracts
          </div>

          <div className="border border-gray-800 p-8 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">
            Governance System
          </div>

        </div>

      </section>

      {/* TOKENOMICS */}

      <section
        id="tokenomics"
        className="px-8 py-24 border-t border-gray-900"
      >

        <h3 className="text-4xl font-bold mb-12 text-center">
          Tokenomics
        </h3>

        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6">

          <div className="border border-gray-800 p-6 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">
            <h4 className="text-xl font-semibold mb-2">
              Owner
            </h4>

            <p className="text-gray-400">
              20%
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">
            <h4 className="text-xl font-semibold mb-2">
              Community
            </h4>

            <p className="text-gray-400">
              30%
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">
            <h4 className="text-xl font-semibold mb-2">
              Liquidity
            </h4>

            <p className="text-gray-400">
              20%
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">
            <h4 className="text-xl font-semibold mb-2">
              Treasury
            </h4>

            <p className="text-gray-400">
              20%
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">
            <h4 className="text-xl font-semibold mb-2">
              Reserve
            </h4>

            <p className="text-gray-400">
              10%
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">

            <h4 className="text-xl font-semibold mb-2">
              Total Supply
            </h4>

            <p className="text-gray-400">
              1,000,000,000 NΩN
            </p>

          </div>

        </div>

      </section>

      {/* SECURITY */}

      <section
        id="security"
        className="px-8 py-24 border-t border-gray-900"
      >

        <h3 className="text-4xl font-bold mb-12 text-center">
          Security Architecture
        </h3>

        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6">

          <div className="border border-gray-800 p-8 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">

            <h4 className="text-2xl font-semibold mb-4">
              LP Timelock
            </h4>

            <p className="text-gray-400">
              Liquidity is locked on-chain for 24 months.
              No early withdrawal possible.
            </p>

          </div>

          <div className="border border-gray-800 p-8 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">

            <h4 className="text-2xl font-semibold mb-4">
              Multisig Protection
            </h4>

            <p className="text-gray-400">
              No single wallet controls liquidity or protocol security.
            </p>

          </div>

          <div className="border border-gray-800 p-8 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">

            <h4 className="text-2xl font-semibold mb-4">
              Verified Contracts
            </h4>

            <p className="text-gray-400">
              All core contracts are publicly verifiable on-chain.
            </p>

          </div>

          <div className="border border-gray-800 p-8 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">

            <h4 className="text-2xl font-semibold mb-4">
              Governance System
            </h4>

            <p className="text-gray-400">
              Snapshot-based governance with decentralized voting power.
            </p>

          </div>

        </div>

      </section>

      {/* CONTRACTS */}

      <section
        id="contracts"
        className="px-8 py-24 border-t border-gray-900"
      >

        <h3 className="text-4xl font-bold mb-12 text-center">
          Contracts
        </h3>

        <div className="max-w-5xl mx-auto flex flex-col gap-6">

          {/* TOKEN */}

          <div className="border border-gray-800 p-6 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">

            <h4 className="text-xl font-semibold mb-2">
              NΩN Token
            </h4>

            <a
              href="https://sepolia.etherscan.io/address/0xE9380E2C0DFaA2b77691f4824AaCe6E4ca0132e5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 break-all hover:text-blue-300 transition"
            >
              0xE9380E2C0DFaA2b77691f4824AaCe6E4ca0132e5
            </a>

          </div>

          {/* LP TIMELOCK */}

          <div className="border border-gray-800 p-6 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">

            <h4 className="text-xl font-semibold mb-2">
              LP Timelock
            </h4>

            <a
              href="https://sepolia.etherscan.io/address/0x7818AD63a64771e3c8fD2e5CEd0A5d0Ca199BFDe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 break-all hover:text-blue-300 transition"
            >
              0x7818AD63a64771e3c8fD2e5CEd0A5d0Ca199BFDe
            </a>

          </div>

          {/* MULTISIG */}

          <div className="border border-gray-800 p-6 rounded-2xl bg-zinc-900/40 hover:border-blue-500/40 transition">

            <h4 className="text-xl font-semibold mb-2">
              Multisig
            </h4>

            <a
              href="https://sepolia.etherscan.io/address/0x83a962B986aB12a6316a4E7Dccf8261221A7C068"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 break-all hover:text-blue-300 transition"
            >
              0x83a962B986aB12a6316a4E7Dccf8261221A7C068
            </a>

          </div>

        </div>

      </section>

      {/* COMMUNITY */}

      <section
        id="community"
        className="px-8 py-24 border-t border-gray-900"
      >

        <h3 className="text-4xl font-bold mb-12 text-center">
          Community
        </h3>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="https://x.com/SkodriNON_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 px-8 py-4 rounded-2xl hover:border-blue-500/40 transition bg-zinc-900/40"
          >
            X / Twitter
          </a>

          <a
            href="https://github.com/SkodriNON"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 px-8 py-4 rounded-2xl hover:border-blue-500/40 transition bg-zinc-900/40"
          >
            GitHub
          </a>

          <a
            href="https://t.me/SkodriNON_Official"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 px-8 py-4 rounded-2xl hover:border-blue-500/40 transition bg-zinc-900/40"
          >
            Telegram
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-gray-900 py-10 text-center text-gray-500 text-sm">
        © 2026 SkodriNΩN — Built on Ethereum
      </footer>

    </main>
  );
}