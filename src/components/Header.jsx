export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            Fake API Store
          </span>
        </div>
        <p className="text-sm text-gray-400">Minimal product explorer</p>
      </div>
    </header>
  );
}
