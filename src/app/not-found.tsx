import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center">
      <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
        404
      </p>
      <h2 className="text-4xl font-bold tracking-tight mb-8">
        Página no encontrada
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