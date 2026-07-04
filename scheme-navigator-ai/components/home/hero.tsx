export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-6xl font-bold">
        Find Government Schemes
        <span className="text-indigo-600">
          {" "}Made For You
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Discover scholarships, subsidies, pensions,
        healthcare, and more in seconds.
      </p>

      <button className="mt-10 rounded-xl bg-indigo-600 px-8 py-4 text-white">
        Explore Schemes
      </button>
    </section>
  );
}