"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const THEMES = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
  { value: "system", label: "Sistema" },
] as const;

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita hydration mismatch — next-themes no sabe el tema hasta que corre en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-3">
      {THEMES.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
            theme === t.value
              ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
              : "border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}