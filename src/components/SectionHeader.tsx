interface SectionHeaderProps {
  type: "argentina" | "international";
}

const SECTION_CONFIG = {
  argentina: { label: "Argentina", flag: "🇦🇷" },
  international: { label: "Internacional", flag: "🌍" },
};

export default function SectionHeader({ type }: SectionHeaderProps) {
  const { label, flag } = SECTION_CONFIG[type];

  return (
    <div className="flex items-center gap-3 mb-8 mt-10">
      <span className="text-base">{flag}</span>
      <h2 className="text-xs font-bold uppercase tracking-widest">{label}</h2>
      <div className="h-px flex-1 bg-neutral-100 dark:bg-neutral-900" />
    </div>
  );
}