import CategoryCard from "@/components/common/categorycard";

export default function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Browse by Category
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CategoryCard
          icon="🎓"
          title="Education"
        />

        <CategoryCard
          icon="👩"
          title="Women"
        />

        <CategoryCard
          icon="🌾"
          title="Farmers"
        />

        <CategoryCard
          icon="🏥"
          title="Healthcare"
        />

        <CategoryCard
          icon="💼"
          title="Business"
        />

        <CategoryCard
          icon="👴"
          title="Senior Citizens"
        />
      </div>
    </section>
  );
}