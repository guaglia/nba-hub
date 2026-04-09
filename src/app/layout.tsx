import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NBA Hub — Scores, Predicciones y Tutor AI",
  description:
    "Tu centro de NBA: resultados en vivo, predicciones Super6, noticias y un tutor AI experto.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-bg-primary min-h-screen">
        <div className="mx-auto max-w-[480px] min-h-screen relative bg-bg-primary shadow-2xl">
          {children}
        </div>
      </body>
    </html>
  );
}
