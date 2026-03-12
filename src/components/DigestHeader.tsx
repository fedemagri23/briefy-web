import Link from "next/link";

interface DigestHeaderProps {
  date: string;
}

export default function DigestHeader({ date }: DigestHeaderProps) {
  return (
    <header className="mb-14">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-6xl font-bold tracking-tighter uppercase leading-none">
          Briefy
        </h1>
        <Link
          href="/settings"
          className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ⚙ Config
        </Link>
      </div>
      <div className="flex items-center gap-4 border-t border-b border-black dark:border-white py-3">
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
          {date}
        </p>
        <div className="h-1 w-1 rounded-full bg-neutral-400" />
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
          Digest diario
        </p>
      </div>
    </header>
  );
}