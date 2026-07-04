export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-600">
          SchemeAI
        </h1>

        <div className="flex items-center gap-8">
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">AI Assistant</a>
          <a href="#">About</a>
        </div>

        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white">
          Login
        </button>
      </div>
    </nav>
  );
}