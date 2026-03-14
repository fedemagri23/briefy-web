import GlossaryTooltip from "./GlossaryTooltip";
import type { GlossaryTerm } from "@/types/news";

interface ArticleContentProps {
  content: string;
  glossary: GlossaryTerm[];
}

function highlightTerms(
  text: string,
  glossary: GlossaryTerm[],
): React.ReactNode[] {
  if (glossary.length === 0) return [text];

  const sorted = [...glossary].sort((a, b) => b.term.length - a.term.length);

  const termMap = new Map(
    sorted.map((g) => [g.term.toLowerCase(), g]),
  );

  const pattern = sorted
    .map((g) => g.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  const regex = new RegExp(`\\b(${pattern})\\b`, "gi");

  const parts: React.ReactNode[] = [];
  const usedTerms = new Set<string>();
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const matchedText = match[0];
    const key = matchedText.toLowerCase();
    const term = termMap.get(key);

    if (!term || usedTerms.has(key)) {
      parts.push(matchedText);
      lastIndex = regex.lastIndex;
      continue;
    }

    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    usedTerms.add(key);
    parts.push(
      <GlossaryTooltip key={`${key}-${match.index}`} term={term} />,
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function ArticleContent({
  content,
  glossary,
}: ArticleContentProps) {
  const paragraphs = content.split("\n\n");

  return (
    <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{highlightTerms(paragraph, glossary)}</p>
      ))}
    </div>
  );
}