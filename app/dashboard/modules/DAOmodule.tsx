export default function DAOmodule() {

  return (

    <div className="space-y-6 max-w-5xl">

      {/* HEADER */}

      <div>

        <h2 className="text-3xl font-bold mb-2">
          DAO
        </h2>

        <p className="text-gray-400 text-sm">
          Decentralized governance and community coordination.
        </p>

      </div>

      {/* DAO STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/40 backdrop-blur-md p-6">

          <h3 className="text-xl font-bold mb-5">
            DAO Activity
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex justify-between">
              <span className="text-gray-400">
                Active Proposals
              </span>

              <span className="text-cyan-400">
                12
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">
                Votes Cast
              </span>

              <span className="text-green-400">
                8,421
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">
                Treasury Votes
              </span>

              <span className="text-purple-400">
                94%
              </span>
            </div>

          </div>

        </div>

        <div className="rounded-3xl border border-blue-500/10 bg-[#07101f]/40 backdrop-blur-md p-6">

          <h3 className="text-xl font-bold mb-5">
            Community Metrics
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex justify-between">
              <span className="text-gray-400">
                DAO Members
              </span>

              <span className="text-cyan-400">
                3,218
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">
                Participation
              </span>

              <span className="text-green-400">
                81%
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">
                Treasury Growth
              </span>

              <span className="text-purple-400">
                +28%
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}