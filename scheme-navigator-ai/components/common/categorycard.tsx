type CategoryCardProps = {
  icon: string;
  title: string;
};

export default function CategoryCard({
  icon,
  title,
}: CategoryCardProps) {
  return (
    <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>
    </div>
  );
}