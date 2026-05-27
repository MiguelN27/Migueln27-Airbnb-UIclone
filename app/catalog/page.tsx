import Link from "next/link";

export default function CatalogPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col gap-4 px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Catalog</h1>
      <p className="text-zinc-600">Browse all available rooms from the catalog route.</p>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link href="/rooms/101" className="rounded-lg border border-zinc-300 px-4 py-2 hover:bg-zinc-100">
          Open room 101
        </Link>
        <Link href="/rooms/202" className="rounded-lg border border-zinc-300 px-4 py-2 hover:bg-zinc-100">
          Open room 202
        </Link>
      </div>
    </main>
  );
}
