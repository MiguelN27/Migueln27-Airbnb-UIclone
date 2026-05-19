"use client";

import { useState } from "react";

type Listing = {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  tag: "Guest favorite" | "Superhost" | null;
  imageUrl: string;
};

type ListingSection = {
  title: string;
  listings: Listing[];
};

const sectionTitles = [
  "Popular homes in Orlando",
  "Featured hotels in Madrid",
  "Stay in Medellin",
  "Homes in Madrid",
  "Places to stay in Naples",
  "Check out homes in Fort Lauderdale",
  "Popular homes in Hollywood",
];

const listingNames = [
  "Home in Kissimmee",
  "Apartment in Madrid",
  "Loft in Medellin",
  "Condo in Naples",
  "Villa in Fort Lauderdale",
  "Room in Hollywood",
  "Studio in Orlando",
];

const listingLocations = [
  "2 beds · 2 baths",
  "1 bed · 1 bath",
  "3 beds · 2 baths",
  "4 beds · 3 baths",
  "5 beds · 4 baths",
  "2 guests · 1 bedroom",
  "Ocean view · Pool",
];

const sections: ListingSection[] = sectionTitles.map((title, sectionIndex) => ({
  title,
  listings: Array.from({ length: 7 }, (_, index) => {
    return {
      id: `${sectionIndex}-${index}`,
      title: listingNames[(index + sectionIndex) % listingNames.length],
      location: listingLocations[(index + sectionIndex) % listingLocations.length],
      price: `$${120 + sectionIndex * 36 + index * 14} for 2 nights`,
      rating: Number((4.2 + ((index + sectionIndex) % 8) * 0.1).toFixed(2)),
      tag: index % 4 === 0 ? "Superhost" : index % 2 === 0 ? "Guest favorite" : null,
      imageUrl: `https://picsum.photos/seed/airbnb-${sectionIndex}-${index}/640/440`,
    };
  }),
}));

const tabs = [
  "Popular",
  "Arts & culture",
  "Beach",
  "Mountains",
  "Outdoors",
  "Things to do",
  "Travel tips & inspiration",
  "Airbnb-friendly apartments",
];

const tabContent: Record<string, string[]> = {
  Popular: [
    "Dallas - Monthly Rentals",
    "Kauai - Vacation rentals",
    "Philadelphia - Monthly Rentals",
    "Cleveland - House rentals",
    "Gulf Shores - Condo rentals",
    "Tokyo - House rentals",
    "Barcelona - Condo rentals",
    "Amsterdam - House rentals",
  ],
  "Arts & culture": [
    "Florence - Creative stays",
    "Kyoto - Historic districts",
    "Lisbon - Gallery routes",
    "Mexico City - Design homes",
    "Paris - Museum walks",
    "Athens - Ancient neighborhoods",
  ],
  Beach: [
    "Mykonos - Sea view villas",
    "Nice - Coastal apartments",
    "Miami - Waterfront homes",
    "Bali - Surf bungalows",
    "Ibiza - Beach houses",
    "San Diego - Sunset rentals",
  ],
  Mountains: [
    "Aspen - Ski chalets",
    "Banff - Alpine cabins",
    "Andorra - Snow retreats",
    "Cusco - Valley lodges",
    "Alps - Panorama stays",
    "Hokkaido - Winter homes",
  ],
  Outdoors: [
    "Yosemite - Cabin stays",
    "Patagonia - Nature domes",
    "Lake Tahoe - Forest homes",
    "Sedona - Desert villas",
    "Moab - Trail camps",
    "Queensland - Rainforest lodges",
  ],
  "Things to do": [
    "Guided city tours",
    "Cooking workshops",
    "Sunset sailing",
    "Architecture walks",
    "Street-food tastings",
    "Family adventure packs",
  ],
  "Travel tips & inspiration": [
    "How to travel with kids",
    "Best flexible booking advice",
    "How to choose neighborhoods",
    "Plan a long-weekend getaway",
    "Packing lists for every season",
    "How to find hidden gems",
  ],
  "Airbnb-friendly apartments": [
    "Boston - Flexible lease homes",
    "Berlin - Furnished monthly stays",
    "Austin - Modern apartment rentals",
    "Toronto - Verified serviced apartments",
    "Seoul - High-speed work-friendly homes",
    "Sao Paulo - New-build rentals",
  ],
};

function IconHome() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M6.5 9v10.5h11V9" />
    </svg>
  );
}

function IconTicket() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 8.5A2.5 2.5 0 016.5 6h11A2.5 2.5 0 0120 8.5v2a2 2 0 010 4v2a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 16.5v-2a2 2 0 010-4z" />
      <path d="M12 7v10" strokeDasharray="2 2" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 16h12l-1.5-2.5V10A4.5 4.5 0 0012 5.5 4.5 4.5 0 007.5 10v3.5z" />
      <path d="M10 18a2 2 0 004 0" />
    </svg>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-900">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1440px] items-center gap-3 px-4 py-4 lg:px-8">
          <button className="flex min-w-32 items-center gap-2 text-[#FD6565]" aria-label="Go to homepage">
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
              <path d="M12 1.5a5.4 5.4 0 00-5.4 5.4c0 2.8 1.9 4.7 3.7 6.5l1.7 1.6 1.7-1.6c1.8-1.8 3.7-3.7 3.7-6.5A5.4 5.4 0 0012 1.5z" />
              <path d="M4 13.8a8 8 0 0116 0c0 4.1-3.6 6.7-8 8.7-4.4-2-8-4.6-8-8.7z" opacity=".65" />
            </svg>
            <span className="text-xl font-bold tracking-tight">airbnb</span>
          </button>

          <div className="hidden flex-1 items-center justify-center gap-5 text-sm font-medium xl:flex">
            <button className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-zinc-100">
              <IconHome />
              Homes
            </button>
            <button className="flex items-center gap-2 rounded-full px-3 py-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900">
              <IconTicket />
              Experiences
            </button>
            <button className="flex items-center gap-2 rounded-full px-3 py-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900">
              <IconBell />
              Services
            </button>
          </div>

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <button className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-zinc-100">Become a host</button>
            <button className="rounded-full border border-zinc-200 p-2 hover:bg-zinc-100" aria-label="Language selector">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
              </svg>
            </button>
            <button className="rounded-full border border-zinc-200 p-2 hover:bg-zinc-100" aria-label="Settings menu">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-4 pb-4 lg:px-8">
          <div className="mx-auto flex max-w-3xl items-center rounded-full border border-zinc-200 bg-white shadow-md shadow-zinc-300/40">
            <button className="flex-1 rounded-l-full px-5 py-3 text-left hover:bg-zinc-100">
              <p className="text-xs font-semibold">Where</p>
              <p className="text-sm text-zinc-500">Search destinations</p>
            </button>
            <button className="hidden flex-1 px-5 py-3 text-left md:block hover:bg-zinc-100">
              <p className="text-xs font-semibold">When</p>
              <p className="text-sm text-zinc-500">Add dates</p>
            </button>
            <button className="hidden flex-1 px-5 py-3 text-left md:block hover:bg-zinc-100">
              <p className="text-xs font-semibold">Who</p>
              <p className="text-sm text-zinc-500">Add guests</p>
            </button>
            <button className="mr-2 rounded-full bg-[#FD6565] p-3 text-white transition hover:brightness-95" aria-label="Search">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.4-3.4" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1440px] space-y-10 bg-white px-4 py-8 lg:px-8">
        {sections.map((section) => (
          <section key={section.title} className="space-y-4 border-b border-zinc-100 pb-6">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                {section.title}
                <span className="text-zinc-400">→</span>
              </h2>
              <button className="rounded-full border border-zinc-200 p-2 text-zinc-500 hover:text-zinc-900" aria-label="Show more homes">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {section.listings.map((listing) => (
                <article key={listing.id} className="w-[185px] shrink-0 space-y-2">
                  <div
                    className="relative h-44 overflow-hidden rounded-2xl"
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.08)), url(${listing.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label={listing.title}
                  >
                    {listing.tag ? (
                      <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-zinc-700">
                        {listing.tag}
                      </span>
                    ) : null}
                    <button className="absolute right-2 top-2 rounded-full bg-black/20 p-1 text-white" aria-label="Save listing">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M12 20.8S4.8 16.3 4.8 10.5A3.7 3.7 0 018.5 6.8c1.4 0 2.7.8 3.5 2 0.8-1.2 2.1-2 3.5-2a3.7 3.7 0 013.7 3.7c0 5.8-7.2 10.3-7.2 10.3z" />
                      </svg>
                    </button>
                  </div>

                  <div>
                    <h3 className="line-clamp-1 text-sm font-semibold">{listing.title}</h3>
                    <p className="line-clamp-1 text-xs text-zinc-500">{listing.location}</p>
                    <div className="mt-1 flex items-center gap-1.5 text-xs">
                      <h4 className="font-semibold text-zinc-700">{listing.price}</h4>
                      <span className="text-zinc-400">·</span>
                      <p className="flex items-center gap-1 text-zinc-600">
                        <span className="text-[#FD6565]">★</span>
                        {listing.rating}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-none border-b border-zinc-200 bg-[#f2f2f2] p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Inspiration for future getaways</h2>

          <div className="mt-5 flex flex-wrap gap-5 border-b border-zinc-300 pb-4 text-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 transition ${
                  activeTab === tab
                    ? "border-b-2 border-zinc-900 font-semibold text-zinc-900"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-700 sm:grid-cols-2 lg:grid-cols-4">
            {tabContent[activeTab].map((item) => (
              <p key={item} className="px-1 py-1">{item}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-zinc-200 bg-[#f2f2f2] p-6 md:grid-cols-3 md:p-8">
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>Help Center</li>
              <li>Get help with a safety issue</li>
              <li>AirCover</li>
              <li>Report neighborhood concern</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Hosting</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>Airbnb your home</li>
              <li>Airbnb your experience</li>
              <li>Community forum</li>
              <li>Hosting resources</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Airbnb</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>2025 Summer Release</li>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Investors</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-[#f2f2f2]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-4 py-5 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Your Privacy Choices</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-zinc-900" aria-label="Facebook">f</a>
            <a href="#" className="hover:text-zinc-900" aria-label="X">x</a>
            <a href="#" className="hover:text-zinc-900" aria-label="Instagram">◎</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
