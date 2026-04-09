import type { Metadata } from "next";

const domingoImage = "https://tutores-ai-alpha.vercel.app/_next/image?url=%2Ftutors%2Fdomingo-nba.png&w=1200&q=75";

export const metadata: Metadata = {
  title: "NBA Hub · La experiencia NBA para tus usuarios",
  description:
    "Scores en vivo, predicciones, noticias y un tutor AI conversacional. Plataforma mobile-first para carriers de telecomunicaciones.",
  openGraph: {
    title: "NBA Hub · La experiencia NBA que tus usuarios merecen",
    description: "Scores en vivo, predicciones Super6, noticias y Domingo, tu experto NBA por voz.",
    images: [{ url: domingoImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NBA Hub · La experiencia NBA que tus usuarios merecen",
    description: "Scores en vivo, predicciones Super6, noticias y Domingo, tu experto NBA por voz.",
    images: [domingoImage],
  },
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-screen relative left-1/2 -translate-x-1/2"
      style={{ maxWidth: "100vw" }}
    >
      {children}
    </div>
  );
}
