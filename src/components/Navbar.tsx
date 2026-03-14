"use client";

import Link from "next/link";
import { Settings } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-5 py-3 rounded-full border transition-all duration-300 ${
            scrolled
            ? "bg-white/30 dark:bg-black/30 backdrop-blur-xl border-neutral-200/30 dark:border-neutral-800/30 shadow-md"
            : "bg-white/50 dark:bg-black/50 backdrop-blur-md border-neutral-200/50 dark:border-neutral-800/50 shadow-sm"
        }`}
        >
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-baseline gap-0.5 cursor-pointer"
        >
          <span className="text-lg font-black tracking-tighter uppercase">
            Briefy
          </span>
        </button>

        <div className="flex items-center gap-4">
          <Link
            href="/settings"
            className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Configuración"
          >
            <Settings size={18} strokeWidth={2} />
          </Link>
        </div>
      </nav>
    </div>
  );
}