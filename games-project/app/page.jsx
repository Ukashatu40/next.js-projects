import Link from "next/link";

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto max-w-5xl text-center">
        <span className="inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
          🎮 Ultimate Gaming Experience
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Play.
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            {" "}
            Compete.
          </span>
          <br />
          Conquer.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Challenge yourself with exciting games, climb the leaderboard, unlock
          achievements, and compete with players from around the world.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/games"
            className="rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-violet-500 hover:shadow-violet-500/40"
          >
            🎮 Start Playing
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-slate-600 bg-slate-900/50 px-8 py-4 text-lg font-semibold text-slate-200 transition duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300"
          >
            Login
          </Link>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <div className="text-4xl">🏆</div>
            <h3 className="mt-4 text-xl font-bold">Leaderboards</h3>
            <p className="mt-3 text-slate-400">
              Compete against players worldwide and rise to the top.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <div className="text-4xl">⚡</div>
            <h3 className="mt-4 text-xl font-bold">Fast Gameplay</h3>
            <p className="mt-3 text-slate-400">
              Enjoy smooth performance and instant matchmaking.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur">
            <div className="text-4xl">🎯</div>
            <h3 className="mt-4 text-xl font-bold">Daily Challenges</h3>
            <p className="mt-3 text-slate-400">
              Complete missions, earn rewards, and unlock exclusive content.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-cyan-400">100+</h2>
            <p className="mt-2 text-slate-400">Games Available</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-violet-400">10K+</h2>
            <p className="mt-2 text-slate-400">Active Players</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-pink-400">24/7</h2>
            <p className="mt-2 text-slate-400">Online Matches</p>
          </div>
        </div>
      </section>
    </main>
  );
}
