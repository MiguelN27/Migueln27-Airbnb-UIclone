import Link from "next/link";

type RoomPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RoomPage({ params }: RoomPageProps) {
  const { id } = await params;

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col gap-4 px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Room {id}</h1>
      <p className="text-zinc-600">You are viewing the dynamic route: /rooms/{id}</p>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link href="/catalog" className="rounded-lg border border-zinc-300 px-4 py-2 hover:bg-zinc-100">
          Back to catalog
        </Link>
        <Link href="/" className="rounded-lg border border-zinc-300 px-4 py-2 hover:bg-zinc-100">
          Back to home
        </Link>
      </div>
    </main>
  );
}
