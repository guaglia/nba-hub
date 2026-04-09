"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TeamLogo } from "@/components/ui/TeamLogo";

const cycleTeams = ["OKC", "BOS", "LAL", "DET", "SAS", "NYK", "DEN", "CLE", "MIA", "GSW"];

const features = [
  {
    tag: "Tutor AI",
    title: "Domingo, tu experto NBA por voz",
    description:
      "Un tutor conversacional que responde cualquier pregunta sobre la NBA hablando. Resultados, historia, jugadores. Una experiencia única impulsada por inteligencia artificial.",
    screenshot: "/screenshots/tutor.png",
    color: "#A855F7",
    image: "https://tutores-ai-alpha.vercel.app/_next/image?url=%2Ftutors%2Fdomingo-nba.png&w=3840&q=75",
  },
  {
    tag: "Scores en Vivo",
    title: "Cada partido, en tiempo real",
    description:
      "Resultados en vivo, estadísticas detalladas, forma reciente y enfrentamientos directos. Todo lo que tu usuario necesita para vivir la NBA.",
    screenshot: "/screenshots/home.png",
    color: "#22C55E",
  },
  {
    tag: "Super6",
    title: "Predicciones que enganchan",
    description:
      "Los usuarios predicen resultados de 6 partidos semanales, compiten en un leaderboard y usan IA para mejorar sus picks. Retención y engagement real.",
    screenshot: "/screenshots/super6.png",
    color: "#F97316",
  },
  {
    tag: "Noticias",
    title: "Contenido editorial premium",
    description:
      "Feed de noticias NBA con artículos completos, imágenes y botones de compartir. Los usuarios se quedan dentro de la app con contenido fresco cada día.",
    screenshot: "/screenshots/noticias.png",
    color: "#3B82F6",
  },
];

const stats = [
  { value: "30", label: "Equipos NBA" },
  { value: "5+", label: "Partidos diarios" },
  { value: "AI", label: "Tutor por voz" },
  { value: "0ms", label: "Latencia percibida" },
];

export default function ShowcasePage() {
  const [teamIdx, setTeamIdx] = useState(0);
  const [teamVisible, setTeamVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTeamVisible(false);
      setTimeout(() => {
        setTeamIdx((i) => (i + 1) % cycleTeams.length);
        setTeamVisible(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        {/* Background glows */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #F97316 0%, #EA580C 40%, transparent 70%)" }}
        />
        <div
          className="absolute top-2/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F97316]" />
            <span className="text-[13px] text-white/60 font-medium">Value Added Service</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
            La experiencia{" "}
            <span className="inline-flex items-center gap-3">
              <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FBBF24] bg-clip-text text-transparent">
                NBA
              </span>
              <span
                className="inline-block transition-opacity duration-300"
                style={{ opacity: teamVisible ? 1 : 0 }}
              >
                <TeamLogo abbrev={cycleTeams[teamIdx]} size={56} />
              </span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FBBF24] bg-clip-text text-transparent">
              que tus usuarios merecen
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Scores en vivo, predicciones, noticias y un tutor AI conversacional.
            Una plataforma mobile-first lista para integrar en cualquier carrier.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/home"
              className="px-8 py-4 rounded-2xl text-[15px] font-bold text-white"
              style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
            >
              Ver Demo en Vivo
            </Link>
            <a
              href="#features"
              className="px-8 py-4 rounded-2xl text-[15px] font-semibold text-white/70 bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              Explorar Features
            </a>
          </div>
        </div>

        {/* Hero screenshot */}
        <div className="relative z-10 mt-16 max-w-sm mx-auto">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/hero.png"
              alt="NBA Hub Preview"
              className="w-full"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div
            className="absolute -inset-8 -z-10 rounded-full blur-[60px] opacity-20"
            style={{ background: "radial-gradient(circle, #F97316, transparent 70%)" }}
          />
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative py-20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[60px] font-extrabold leading-none bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-[14px] text-white/40 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[13px] font-bold uppercase tracking-widest text-[#F97316] mb-3">Features</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Todo lo que necesitas
            </h2>
          </div>

          <div className="space-y-32">
            {features.map((feature, i) => (
              <div
                key={feature.tag}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
              >
                {/* Screenshot or custom image */}
                <div className="relative flex-1 max-w-sm">
                  <div
                    className="rounded-3xl overflow-hidden border border-white/10"
                    style={{
                      boxShadow: `0 20px 60px ${feature.color}15, 0 8px 24px rgba(0,0,0,0.4)`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={feature.image || feature.screenshot}
                      alt={feature.tag}
                      className="w-full"
                      style={{ objectFit: "cover", minHeight: feature.image ? 300 : undefined }}
                      onError={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.style.display = "none";
                        el.parentElement!.style.height = "400px";
                        el.parentElement!.style.background = `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`;
                      }}
                    />
                  </div>
                  <div
                    className="absolute -inset-12 -z-10 rounded-full blur-[80px] opacity-15"
                    style={{ background: feature.color }}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 max-w-lg">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wide mb-4"
                    style={{ background: `${feature.color}15`, color: feature.color }}
                  >
                    {feature.tag}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Carriers */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[13px] font-bold uppercase tracking-widest text-[#F97316] mb-3">Para Carriers</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Listo para tu plataforma
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-xl mx-auto">
            NBA Hub se integra como servicio de valor agregado en cualquier carrier
            de telecomunicaciones. Personalizable, mobile-first, sin fricción.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "White Label", desc: "Personalizable con tu marca y colores corporativos" },
              { title: "Mobile First", desc: "Pensado para cualquier dispositivo, sin descargas" },
              { title: "AI Powered", desc: "Tutor conversacional que diferencia tu oferta" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
              >
                <h4 className="text-[15px] font-bold mb-2">{item.title}</h4>
                <p className="text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="relative max-w-3xl mx-auto text-center">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px] opacity-15"
            style={{ background: "#F97316" }}
          />
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Probalo ahora
            </h2>
            <p className="text-lg text-white/50 mb-10">
              Explora el demo completo y descubri lo que NBA Hub puede hacer por tus usuarios.
            </p>
            <Link
              href="/home"
              className="inline-block px-10 py-5 rounded-2xl text-[16px] font-bold text-white"
              style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
            >
              Abrir NBA Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <p className="text-[12px] text-white/20">
          NBA Hub · Prototipo VAS
        </p>
      </footer>
    </div>
  );
}
