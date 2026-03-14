"use client";

import { useState } from "react";
import type { GlossaryTerm } from "@/types/news";

interface GlossaryTooltipProps {
  term: GlossaryTerm;
}

export default function GlossaryTooltip({ term }: GlossaryTooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span className="relative inline">
      <span
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="border-b border-dashed border-black dark:border-white cursor-help"
      >
        {term.term}
      </span>

      {visible && (
        <span className="absolute bottom-full left-0 z-50 mb-2 w-64 bg-black dark:bg-white text-white dark:text-black text-xs p-3 leading-relaxed shadow-lg">
          <span className="font-bold block mb-1 uppercase tracking-widest text-neutral-400 dark:text-neutral-600 text-[10px]">
            {term.term}
          </span>
          {term.definition}
        </span>
      )}
    </span>
  );
}