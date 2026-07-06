import { Search } from "lucide-react";

export default function SearchSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex items-center rounded-xl border bg-white p-3 shadow-md">
        <Search className="mr-3 h-5 w-5 text-gray-500" />

        <input
          type="text"
          placeholder="Search for schemes, scholarships, pensions..."
          className="w-full outline-none"
        />

        <button className="rounded-lg bg-indigo-600 px-6 py-2 text-white rounded-2xl
shadow-xl
border focus:ring-4
focus:ring-indigo-200">
          Search
        </button>
      </div>
    </section>
  );
}