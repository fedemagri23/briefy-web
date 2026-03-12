import type { Metadata } from "next";
import ThemeSelector from "@/components/ThemeSelector";

export const metadata: Metadata = {
  title: "Configuración — Briefy",
};

export default function SettingsPage() {
  return (
    <>
      <nav className="mb-10">
        <a
          href="/"
          className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Volver
        </a>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight mb-12">
        Configuración
      </h1>

      <section className="space-y-10">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest mb-6 text-neutral-400">
            Apariencia
          </h2>
          <ThemeSelector />
        </div>
      </section>
    </>
  );
}