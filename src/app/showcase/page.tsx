"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { TeamLogo } from "@/components/ui/TeamLogo";
import { Lock, Eye, EyeOff } from "lucide-react";

const cycleTeams = ["OKC", "BOS", "LAL", "DET", "SAS", "NYK", "DEN", "CLE", "MIA", "GSW"];

const features = [
  {
    tag: "Tutor AI",
    title: "Domingo, tu experto NBA por voz",
    description:
      "Un tutor conversacional que responde cualquier pregunta sobre la NBA hablando. Resultados, historia, jugadores. Una experiencia única impulsada por inteligencia artificial.",
    screenshot: "/experiences/nba/screenshots/tutor.png",
    color: "#A855F7",
    image: "https://tutores-ai-alpha.vercel.app/_next/image?url=%2Ftutors%2Fdomingo-nba.png&w=3840&q=75",
  },
  {
    tag: "Scores en Vivo",
    title: "Cada partido, en tiempo real",
    description:
      "Resultados en vivo, estadísticas detalladas, forma reciente y enfrentamientos directos. Todo lo que tu usuario necesita para vivir la NBA.",
    screenshot: "/experiences/nba/screenshots/home.png",
    color: "#22C55E",
  },
  {
    tag: "Super6",
    title: "Predicciones que enganchan",
    description:
      "Los usuarios predicen resultados de 6 partidos semanales, compiten en un leaderboard y usan IA para mejorar sus picks. Retención y engagement real.",
    screenshot: "/experiences/nba/screenshots/super6.png",
    color: "#F97316",
  },
  {
    tag: "Noticias",
    title: "Contenido editorial premium",
    description:
      "Feed de noticias NBA con artículos completos, imágenes y botones de compartir. Los usuarios se quedan dentro de la app con contenido fresco cada día.",
    screenshot: "/experiences/nba/screenshots/noticias.png",
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
  const router = useRouter();
  const [teamIdx, setTeamIdx] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTeamIdx((i) => (i + 1) % cycleTeams.length);
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

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            La experiencia
            <br />
            <span className="inline-flex items-center gap-3 sm:gap-4">
              <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FBBF24] bg-clip-text text-transparent">
                NBA
              </span>
              <span key={teamIdx} className="inline-block animate-fade-in-up">
                <TeamLogo abbrev={cycleTeams[teamIdx]} size={112} />
              </span>
              <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FBBF24] bg-clip-text text-transparent">
                que
              </span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FBBF24] bg-clip-text text-transparent">
              tus usuarios
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FBBF24] bg-clip-text text-transparent">
              merecen
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Scores en vivo, predicciones, noticias y un tutor AI conversacional.
            Una plataforma mobile-first lista para integrar en cualquier carrier.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => { setShowPassword(true); setTimeout(() => inputRef.current?.focus(), 100); }}
              className="px-8 py-4 rounded-2xl text-[15px] font-bold text-white cursor-pointer"
              style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
            >
              Ver Demo en Vivo
            </button>
            <a
              href="#features"
              className="px-8 py-4 rounded-2xl text-[15px] font-semibold text-white/70 bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              Explorar Features
            </a>
          </div>
        </div>

        {/* Hero phones — 3 tight together */}
        <div className="relative z-10 mt-16 flex items-end justify-center -space-x-8 sm:-space-x-12">
          {/* Left phone */}
          <div className="relative w-[200px] sm:w-[240px] -rotate-2 hidden sm:block" style={{ marginBottom: -12 }}>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/experiences/nba/screenshots/super6-detail.png" alt="Super6" className="w-full" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent pointer-events-none" />
          </div>

          {/* Center phone — main */}
          <div className="relative z-10 w-[250px] sm:w-[290px]">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/experiences/nba/screenshots/home.png" alt="NBA Hub Home" className="w-full" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent pointer-events-none" />
            <div
              className="absolute -inset-10 -z-10 rounded-full blur-[60px] opacity-20"
              style={{ background: "radial-gradient(circle, #F97316, transparent 70%)" }}
            />
          </div>

          {/* Right phone */}
          <div className="relative w-[200px] sm:w-[240px] rotate-2 hidden sm:block" style={{ marginBottom: -12 }}>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/experiences/nba/screenshots/leaderboard.png" alt="Leaderboard" className="w-full" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent pointer-events-none" />
          </div>
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
            <button
              onClick={() => { setShowPassword(true); setTimeout(() => inputRef.current?.focus(), 100); }}
              className="inline-block px-10 py-5 rounded-2xl text-[16px] font-bold text-white cursor-pointer"
              style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
            >
              Abrir NBA Hub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <p className="text-[12px] text-white/20">
          NBA Hub · Prototipo VAS
        </p>
      </footer>

      {/* Password Modal */}
      {showPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => { setShowPassword(false); setPassword(""); setPasswordError(false); }}
          />
          <div className="relative bg-[#0d0d14] border border-white/10 rounded-3xl p-8 w-full max-w-sm animate-fade-in-up">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#F97316]/10 mx-auto mb-5">
              <Lock size={24} className="text-[#F97316]" />
            </div>
            <h3 className="text-xl font-extrabold text-center mb-2">Acceso al Demo</h3>
            <p className="text-[13px] text-white/40 text-center mb-6">Ingresa la clave para acceder a la experiencia</p>

            <div className="relative mb-4">
              <input
                ref={inputRef}
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setPasswordError(false); }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (password === "OWLAI!NBA") {
                      router.push("/home");
                    } else {
                      setPasswordError(true);
                    }
                  }
                }}
                placeholder="Clave de acceso"
                className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border ${passwordError ? "border-red-500/50" : "border-white/10"} text-white text-[15px] placeholder:text-white/25 outline-none focus:border-[#F97316]/40 transition-colors`}
              />
              <button
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
              >
                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {passwordError && (
              <p className="text-[13px] text-red-400 mb-4 text-center">Clave incorrecta</p>
            )}

            <button
              onClick={() => {
                if (password === "OWLAI!NBA") {
                  router.push("/home");
                } else {
                  setPasswordError(true);
                }
              }}
              className="w-full py-3.5 rounded-xl text-[15px] font-bold text-white cursor-pointer"
              style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
            >
              Acceder
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
