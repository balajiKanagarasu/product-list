import Link from "next/link";

export default function Home() {
  return (
    <main className="flex text-white min-h-screen flex-col items-center justify-center gap-6 p-24 splash-screen">
      <h1 className="text-7xl font-bold">Welcome</h1>

      <div className="mb-32 flex flex-col items-center gap-3 text-center w-fit">
        <Link
          href="/login"
          className="group splash-button rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="m-0 text-2xl font-semibold">Login</h2>
        </Link>
      </div>
    </main>
  );
}
