export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl py-20 text-center">
      <h1 className="text-balance text-4xl font-extrabold tracking-tight text-purple-700 sm:text-5xl">
        Design Your Style 💜
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
        Let AI inspire your next outfit — from casual to couture.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a
          href="/generator"
          className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
        >
          Try the Generator ✨
        </a>
      </div>
    </section>
  );
}
