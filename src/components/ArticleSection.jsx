import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const CATEGORIES = ["Highlight", "Cat", "Inspiration", "General"];

export default function ArticleSection() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <section className="mx-auto w-full max-w-7xl pb-10 md:px-12 md:pb-16 lg:px-[72px]">
      <h2 className="mb-4 px-4 text-2xl font-semibold text-brown-600 md:mb-8 md:px-0">
        Latest articles
      </h2>

      <div className="flex flex-col gap-4 bg-brown-200 px-4 py-4 md:flex-row-reverse md:items-center md:justify-between md:rounded-2xl md:px-6">
        {/* Search */}
        <div className="relative w-full md:max-w-[360px]">
          <Input
            type="text"
            placeholder="Search"
            aria-label="Search articles"
            className="h-12 rounded-lg border-brown-300 bg-white pr-12 pl-4 text-base text-brown-600 placeholder:text-brown-400 focus-visible:ring-brown-300/50 md:text-base"
          />
          <Search
            className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-brown-400"
            aria-hidden="true"
          />
        </div>

        {/* Mobile: Category dropdown */}
        <div className="flex flex-col gap-1 md:hidden">
          <label htmlFor="category" className="text-base font-medium text-brown-400">
            Category
          </label>
          <div className="relative">
            <select
              id="category"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="h-12 w-full appearance-none rounded-lg border border-brown-300 bg-white pr-12 pl-4 text-base font-medium text-brown-400 outline-none focus-visible:ring-3 focus-visible:ring-brown-300/50"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-brown-400"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Desktop: Category tabs */}
        <div className="hidden items-center gap-2 md:flex" role="tablist">
          {CATEGORIES.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-5 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-brown-300 text-brown-500"
                    : "text-brown-400 hover:bg-brown-300/50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
