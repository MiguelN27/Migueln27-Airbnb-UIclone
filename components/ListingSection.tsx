import { Listing, ListingCard } from "./ListingCard";

type ListingSectionProps = {
  title: string;
  listings: Listing[];
};

export function ListingSection({ title, listings }: ListingSectionProps) {
  return (
    <section className="space-y-4 border-b border-zinc-100 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          {title}
          <span className="text-zinc-400">→</span>
        </h2>
        <button className="rounded-full border border-zinc-200 p-2 text-zinc-500 hover:text-zinc-900" aria-label="Show more homes">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
