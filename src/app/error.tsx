"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col justify-center">
      <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
        Algo salió mal
      </p>
      <h2 className="text-4xl font-bold tracking-tight mb-8">
        No pudimos cargar las noticias
      </h2>
      <p className="text-sm text-neutral-500 mb-8">
        El servidor puede estar iniciando. Esto suele tardar hasta 30 segundos
        en el primer acceso del día.
      </p>
      <button
        onClick={reset}
        className="w-fit px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
      >
        Reintentar
      </button>
    </div>
  );
}