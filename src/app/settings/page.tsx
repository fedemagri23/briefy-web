import type { Metadata } from "next";
import ThemeSelector from "@/components/ThemeSelector";
import { Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Configuración — Briefy",
};

export default function SettingsPage() {
  return (
    <>
      <h1 className="text-4xl font-black tracking-tight mb-12">
        Configuración
      </h1>

      <section className="space-y-10">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Palette size={14} strokeWidth={2} className="text-neutral-400" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Apariencia
            </h2>
          </div>
          <ThemeSelector />
        </div>
      </section>
    </>
  );
}