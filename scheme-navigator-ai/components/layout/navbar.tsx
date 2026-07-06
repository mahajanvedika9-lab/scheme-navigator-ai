export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-8 py-5">
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
