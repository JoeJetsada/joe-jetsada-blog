import { useState } from "react";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brown-300 bg-brown-100">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:h-16 md:px-12 lg:px-[72px]">
        
        <a
          href="/"
          className="text-2xl font-medium leading-none text-brown-600"
          aria-label="hh. home"
        >
          hh<span className="text-brand-green">.</span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="rounded-full border border-brown-400 bg-white px-7 py-2 text-sm font-normal text-brown-600 transition-colors hover:bg-brown-200"
          >
            Log in
          </button>
          <button
            type="button"
            className="rounded-full bg-brown-600 px-7 py-2 text-sm font-normal text-white transition-colors hover:bg-brown-500"
          >
            Sign up
          </button>
        </div>

        <button
          type="button"
          className="p-1 text-brown-500 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="flex flex-col gap-3 border-t border-brown-300 bg-brown-100 px-5 py-4 md:hidden">
          <button
            type="button"
            className="rounded-full border border-brown-400 bg-white py-2.5 text-sm text-brown-600"
          >
            Log in
          </button>
          <button
            type="button"
            className="rounded-full bg-brown-600 py-2.5 text-sm text-white"
          >
            Sign up
          </button>
        </div>
      )}
    </header>
  );
}
