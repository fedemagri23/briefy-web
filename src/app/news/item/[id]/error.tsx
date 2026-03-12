"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
}

export default function NewsItemError({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col justify-center">
      <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
        Error
      </p>
      <h2 className="text-4xl font-bold tracking-tight mb-8">
        No pudimos cargar esta noticia
      </h2>
      <Link
        href="/"
        className="w-fit px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
      >
        Volver al inicio
      </Link>
    </div>
  );
}