"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mic, Square } from "lucide-react";
import { useConversation } from "@/hooks/use-conversation";

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_0201kmp1t8hve4v9890pq2t4w994";

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
  const { status, mode, inputVolume, outputVolume, start, stop } = useConversation(AGENT_ID);
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const isDisconnected = status === "disconnected";
  const isConnecting = status === "connecting";
  const isConnected = status === "connected";
  const isSpeaking = mode === "speaking";

  const volume = isSpeaking ? outputVolume : inputVolume;
  const orbScale = 1 + volume * 0.12;
  const glowOpacity = isConnected ? 0.3 + volume * 0.4 : 0.3;
  const ringOpacity = isConnected ? 0.4 + volume * 0.5 : 0.15;

  useEffect(() => {
    if (!isDisconnected) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIdx((i) => (i + 1) % suggestions.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [isDisconnected]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Basketball court background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
        <svg width="480" height="900" viewBox="0 0 480 900" fill="none" className="w-full h-full">
          <rect x="40" y="100" width="400" height="700" rx="0" stroke="#F97316" strokeWidth="2" fill="none" />
          <line x1="40" y1="450" x2="440" y2="450" stroke="#F97316" strokeWidth="2" />
          <circle cx="240" cy="450" r="60" stroke="#F97316" strokeWidth="2" fill="none" />
          <circle cx="240" cy="450" r="6" fill="#F97316" />
          <path d="M 100 100 L 100 280 Q 100 380 240 380 Q 380 380 380 280 L 380 100" stroke="#F97316" strokeWidth="2" fill="none" />
          <rect x="160" y="100" width="160" height="190" stroke="#F97316" strokeWidth="2" fill="none" />
          <circle cx="240" cy="290" r="60" stroke="#F97316" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
          <circle cx="240" cy="140" r="12" stroke="#F97316" strokeWidth="2" fill="none" />
          <path d="M 100 800 L 100 620 Q 100 520 240 520 Q 380 520 380 620 L 380 800" stroke="#F97316" strokeWidth="2" fill="none" />
          <rect x="160" y="610" width="160" height="190" stroke="#F97316" strokeWidth="2" fill="none" />
          <circle cx="240" cy="610" r="60" stroke="#F97316" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
          <circle cx="240" cy="760" r="12" stroke="#F97316" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Ambient light glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
          opacity: isConnected ? 1.5 : 1,
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-center gap-3 px-4 pt-6 mb-4">
        <button
          onClick={() => { stop(); router.back(); }}
          className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-bold text-[15px] text-white/80">Volver</h1>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        {/* Orb glow behind */}
        <div
          className="absolute w-[280px] h-[280px] rounded-full blur-[60px] transition-opacity duration-200"
          style={{
            background: isConnected && isSpeaking
              ? "radial-gradient(circle, #3B82F6 0%, #1D4ED8 40%, transparent 70%)"
              : "radial-gradient(circle, #F97316 0%, #EA580C 40%, transparent 70%)",
            opacity: glowOpacity,
          }}
        />

        {/* Title */}
        <h2 className="text-[13px] text-white/40 font-medium tracking-wide uppercase mb-1">
          Tu Experto NBA
        </h2>
        <h3 className="text-[24px] font-extrabold text-white mb-6">
          Domingo
        </h3>

        {/* Orb ring — reacts to voice */}
        <div
          className="relative w-[220px] h-[220px] rounded-full flex items-center justify-center mb-10 transition-transform duration-100"
          style={{
            background: `conic-gradient(from 180deg, rgba(249,115,22,${ringOpacity * 0.4}), rgba(249,115,22,${ringOpacity}), rgba(234,88,12,${ringOpacity * 1.5}), rgba(249,115,22,${ringOpacity}), rgba(249,115,22,${ringOpacity * 0.4}))`,
            padding: 3,
            transform: `scale(${orbScale})`,
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
            {/* Overlay — changes color when speaking */}
            <div
              className="absolute inset-0 transition-all duration-300"
              style={{
                background: isConnected && isSpeaking
                  ? "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(29,78,216,0.3) 100%)"
                  : isConnected
                    ? "radial-gradient(circle, rgba(34,197,94,0.1) 0%, rgba(0,0,0,0.1) 100%)"
                    : "linear-gradient(to bottom, transparent 50%, rgba(160,74,8,0.4) 100%)",
              }}
            />
          </div>
        </div>

        {/* Status text when connected */}
        {isConnected && (
          <p className="text-[12px] font-medium uppercase tracking-widest text-white/40 -mt-6 mb-6 animate-fade-in-up">
            {isSpeaking ? "Domingo está hablando..." : "Escuchando..."}
          </p>
        )}
        {isConnecting && (
          <p className="text-[12px] font-medium uppercase tracking-widest text-white/40 -mt-6 mb-6 animate-fade-in-up">
            Conectando...
          </p>
        )}

        {/* CTA Button */}
        <div className="relative z-20">
          {isDisconnected && (
            <button onClick={start} className="relative group">
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
          )}

          {isConnecting && (
            <div
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)" }}
            >
              <div className="w-4 h-4 border-2 border-[#F97316] border-t-transparent rounded-full animate-spin" />
              <span className="text-[15px] font-medium text-white/60">Conectando...</span>
            </div>
          )}

          {isConnected && (
            <button
              onClick={stop}
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 transition-colors hover:border-red-500/30 hover:bg-red-500/10"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)" }}
            >
              <Square size={14} className="text-white/60" fill="currentColor" />
              <span className="text-[15px] font-medium text-white/60">Terminar</span>
            </button>
          )}
        </div>

        {/* Animated suggestion — only when disconnected */}
        {isDisconnected && (
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
