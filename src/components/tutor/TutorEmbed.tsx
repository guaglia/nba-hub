"use client";

import { useEffect, useState } from "react";

export default function TutorEmbed({ agentId }: { agentId?: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!agentId) return;
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [agentId]);

  if (!agentId) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="w-24 h-24 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center mb-4">
          <span className="text-4xl">🎙️</span>
        </div>
        <p className="text-[var(--text-secondary)] text-sm mb-2">
          Widget del tutor no configurado
        </p>
        <p className="text-[var(--text-muted)] text-xs">
          Configura NEXT_PUBLIC_ELEVENLABS_AGENT_ID para activar
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center min-h-[400px]">
      {/* @ts-expect-error - custom web component element */}
      <elevenlabs-convai agent-id={agentId} />
      {!loaded && (
        <p className="text-[var(--text-tertiary)] text-sm">Cargando tutor...</p>
      )}
    </div>
  );
}
