/**
 * NavbarRegression - Modified Version with Intentional Regressions
 * Visual regressions introduced for testing:
 * 1. Logo size changed (inconsistent branding)
 * 2. Navbar height increased, causing overlap with content
 * 3. Navigation links styling changed and misaligned
 * 4. Icons repositioned and resized
 * 5. Color scheme altered (different primary color)
 * 6. Spacing and padding broken
 */
export function NavbarRegression() {
  return (
    <nav className="navbar h-24 px-4 flex items-center justify-between bg-indigo-700">
      {/* REGRESSION: Logo size changed from w-8 h-8 to w-10 h-10 */}
      <div className="flex items-center gap-1">
        <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
          <span className="text-indigo-700 font-bold text-lg">ID</span>
        </div>
        {/* REGRESSION: Text styling changed - different color and size */}
        <span className="text-2xl font-black text-white">Insight</span>
      </div>

      {/* REGRESSION: Navigation links - different styling, reduced on md screens */}
      <div className="hidden lg:flex gap-6">
        <a href="#products" className="text-white font-bold text-sm hover:text-green-300">
          PRODUCTS
        </a>
        <a href="#checkout" className="text-white font-bold text-sm hover:text-green-300">
          CHECK
        </a>
        <a href="#about" className="text-white font-bold text-sm hover:text-green-300">
          INFO
        </a>
      </div>

      {/* REGRESSION: Icons - repositioned and resized */}
      <div className="flex items-center gap-3">
        <button className="p-1 hover:bg-indigo-600 rounded transition-colors">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="p-1 hover:bg-indigo-600 rounded transition-colors relative">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {/* REGRESSION: Badge position changed */}
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-indigo-700 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            5
          </span>
        </button>
        <button className="p-1 hover:bg-indigo-600 rounded transition-colors">
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
