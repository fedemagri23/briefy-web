interface DigestHeaderProps {
  date: string;
}

export default function DigestHeader({ date }: DigestHeaderProps) {
  return (
    <header className="mb-10">
      <div className="flex items-center gap-4 border-t border-b border-black dark:border-white py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          {date}
        </p>
        <div className="h-1 w-1 rounded-full bg-neutral-400" />
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Digest diario
        </p>
      </div>
    </header>
  );
}