export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-6xl font-bold">
        Discover Government Schemes

        <span className="bg-gradient-to-r
from-indigo-600
to-violet-500
bg-clip-text
text-transparent">
          {" "}You're Eligible For
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        AI-powered platform helping students,
farmers, women, senior citizens,
entrepreneurs and families discover
government benefits in seconds.</p>

      <button className="rounded-xl
bg-indigo-600
px-8
py-4
font-semibold
text-white
transition-all
hover:scale-105
hover:bg-indigo-700">
        Explore Schemes
      </button>
    </section>
  );
}