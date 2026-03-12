interface SectionHeaderProps {
  type: "argentina" | "international";
}

const SECTION_CONFIG = {
  argentina: { label: "Argentina", emoji: "🇦🇷" },
  international: { label: "Internacional", emoji: "🌍" },
};

export default function SectionHeader({ type }: SectionHeaderProps) {
  const { label, emoji } = SECTION_CONFIG[type];

  return (
    <div className="flex items-center gap-3 mb-8 mt-12">
      <span>{emoji}</span>
      <h2 className="text-xs font-bold uppercase tracking-widest">{label}</h2>
    </div>
  );
}