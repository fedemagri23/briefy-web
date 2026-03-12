interface DigestHeaderProps {
  date: string;
}

export default function DigestHeader({ date }: DigestHeaderProps) {
  return (
    <header className="mb-14">
      <h1 className="text-6xl font-bold tracking-tighter uppercase mb-6 leading-none">
        Briefy
      </h1>
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