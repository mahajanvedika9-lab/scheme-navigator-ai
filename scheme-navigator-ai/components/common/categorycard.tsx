type CategoryCardProps = {
  icon: string;
  title: string;
};

export default function CategoryCard({
  icon,
  title,
}: CategoryCardProps) {
  return (
    <div className="rounded-2xl border p-6 text-center shadow-md
hover:shadow-xl
transition-all
duration-300
hover:-translate-y-2">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>
    </div>
  );
}