import Link from "next/link";
import { Settings } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl flex items-center justify-between px-5 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full shadow-sm">
        <Link href="/" className="flex items-baseline gap-0.5">
          <span className="text-lg font-black tracking-tighter uppercase">
            Briefy
          </span>
        </Link>

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