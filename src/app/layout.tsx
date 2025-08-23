import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog de Inteligencia Artificial y Tecnología | Cristian Cantero López",
  description: "Descubre artículos, tutoriales y análisis sobre inteligencia artificial, machine learning y avances tecnológicos de la mano de Cristian Cantero López.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex gap-[24px] flex-wrap items-center justify-center mb-8 p-4">
          <h1>Header</h1>
        </header>
        <main className="flex flex-col gap-[32px] row-start-2 items-center mb-8 p-4">
          {children}
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-4">
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
