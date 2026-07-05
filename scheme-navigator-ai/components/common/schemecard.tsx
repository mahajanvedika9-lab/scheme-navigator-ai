type SchemeCardProps = {
  name: string;
  category: string;
  description: string;
};

export default function SchemeCard({
  name,
  category,
  description,
}: SchemeCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
        {category}
      </span>

      <h3 className="mt-4 text-2xl font-bold">
        {name}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

      <button className="mt-6 rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
        View Details
      </button>
    </div>
  );
}