import SchemeCard from "@/components/common/schemecard";
import { featuredSchemes } from "@/constants/schemes";

export default function FeaturedSchemes() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Government Schemes
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredSchemes.map((scheme) => (
          <SchemeCard
            key={scheme.id}
            name={scheme.name}
            category={scheme.category}
            description={scheme.description}
          />
        ))}
      </div>
    </section>
  );
}