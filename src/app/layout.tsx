import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Briefy — Tu resumen diario de noticias",
  description: "Noticias de Argentina y el mundo, resumidas y contrastadas por IA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <main className="min-h-screen max-w-2xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}