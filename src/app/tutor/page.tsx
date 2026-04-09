"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mic } from "lucide-react";

const suggestions = [
  "¿Quién va primero en el Este?",
  "Cuéntame sobre LeBron",
  "¿Quién es el MVP esta temporada?",
  "¿Lakers en playoffs?",
  "¿Cómo le fue a los Thunder?",
  "Explícame el shot clock",
];

export default function TutorPage() {
  const router = useRouter();
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [talking, setTalking] = useState(false);
  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_0201kmp1t8hve4v9890pq2t4w994";

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIdx((i) => (i + 1) % suggestions.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!talking) return;
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, [talking]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Basketball court background — SVG top-down view */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
        <svg width="480" height="900" viewBox="0 0 480 900" fill="none" className="w-full h-full">
          {/* Court outline */}
          <rect x="40" y="100" width="400" height="700" rx="0" stroke="#F97316" strokeWidth="2" fill="none" />
          {/* Center line */}
          <line x1="40" y1="450" x2="440" y2="450" stroke="#F97316" strokeWidth="2" />
          {/* Center circle */}
          <circle cx="240" cy="450" r="60" stroke="#F97316" strokeWidth="2" fill="none" />
          <circle cx="240" cy="450" r="6" fill="#F97316" />
          {/* Top three-point arc */}
          <path d="M 100 100 L 100 280 Q 100 380 240 380 Q 380 380 380 280 L 380 100" stroke="#F97316" strokeWidth="2" fill="none" />
          {/* Top key */}
          <rect x="160" y="100" width="160" height="190" stroke="#F97316" strokeWidth="2" fill="none" />
          {/* Top free throw circle */}
          <circle cx="240" cy="290" r="60" stroke="#F97316" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
          {/* Top basket */}
          <circle cx="240" cy="140" r="12" stroke="#F97316" strokeWidth="2" fill="none" />
          {/* Bottom three-point arc */}
          <path d="M 100 800 L 100 620 Q 100 520 240 520 Q 380 520 380 620 L 380 800" stroke="#F97316" strokeWidth="2" fill="none" />
          {/* Bottom key */}
          <rect x="160" y="610" width="160" height="190" stroke="#F97316" strokeWidth="2" fill="none" />
          {/* Bottom free throw circle */}
          <circle cx="240" cy="610" r="60" stroke="#F97316" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
          {/* Bottom basket */}
          <circle cx="240" cy="760" r="12" stroke="#F97316" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Ambient light glow in center */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 px-4 pt-6 mb-4">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-bold text-[15px] text-white/80">Volver</h1>
      </div>

      {/* Main content — centered orb */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        {/* Orb glow behind */}
        <div
          className="absolute w-[280px] h-[280px] rounded-full blur-[60px] opacity-30"
          style={{
            background: "radial-gradient(circle, #F97316 0%, #EA580C 40%, transparent 70%)",
          }}
        />

        {/* Title — above the orb */}
        <h2 className="text-[13px] text-white/40 font-medium tracking-wide uppercase mb-1">
          Tu Experto NBA
        </h2>
        <h3 className="text-[24px] font-extrabold text-white mb-6">
          Domingo
        </h3>

        {/* Orb ring */}
        <div
          className="relative w-[220px] h-[220px] rounded-full flex items-center justify-center mb-10"
          style={{
            background: "conic-gradient(from 180deg, rgba(249,115,22,0.15), rgba(249,115,22,0.4), rgba(234,88,12,0.6), rgba(249,115,22,0.4), rgba(249,115,22,0.15))",
            padding: 3,
          }}
        >
          {/* Inner orb — Domingo's avatar */}
          <div className="w-full h-full rounded-full overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://tutores-ai-alpha.vercel.app/_next/image?url=%2Ftutors%2Fdomingo-nba.png&w=3840&q=75"
              alt="Domingo"
              className="w-full h-full object-cover object-top"
            />
            {/* Orange tint overlay for cohesion */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(160,74,8,0.4)]" />
          </div>
        </div>

        {/* CTA Button or active widget */}
        <div className="-mt-6 relative z-20">
          {!talking ? (
            <button
              onClick={() => setTalking(true)}
              className="relative group"
            >
              <div
                className="absolute -inset-1 rounded-full blur-md opacity-40 group-active:opacity-60 transition-opacity"
                style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
              />
              <div
                className="relative flex items-center gap-3 px-8 py-4 rounded-full border border-[#F97316]/30"
                style={{ background: "rgba(249,115,22,0.15)", backdropFilter: "blur(16px)" }}
              >
                <Mic size={18} className="text-[#F97316]" />
                <span className="text-[15px] font-bold text-white">Hablemos de NBA</span>
              </div>
            </button>
          ) : (
            <div className="flex flex-col items-center gap-4">
              {/* @ts-expect-error custom web component */}
              <elevenlabs-convai agent-id={agentId} />
              <button
                onClick={() => setTalking(false)}
                className="text-[13px] text-white/40 hover:text-white/70 transition-colors"
              >
                Terminar conversación
              </button>
            </div>
          )}
        </div>

        {/* Animated suggestion */}
        {!talking && (
          <div className="mt-10 h-8 flex items-center justify-center">
            <span
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] text-white/40 font-medium italic transition-opacity duration-400"
              style={{ opacity: visible ? 1 : 0 }}
            >
              &ldquo;{suggestions[activeIdx]}&rdquo;
            </span>
          </div>
        )}
      </div>

      <div className="h-8" />
    </div>
  );
}
