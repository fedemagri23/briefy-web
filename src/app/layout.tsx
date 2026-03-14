import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
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
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <ThemeProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 pt-28 pb-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}