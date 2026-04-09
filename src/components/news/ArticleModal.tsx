"use client";

import { useEffect } from "react";
import { NewsItem } from "@/lib/types";
import { ArrowLeft, Share2, Link2, Send } from "lucide-react";

function shareArticle(item: NewsItem, method: string) {
  const text = `${item.headline} — NBA Hub`;
  const url = typeof window !== "undefined" ? window.location.href : "";

  switch (method) {
    case "native":
      if (navigator.share) {
        navigator.share({ title: item.headline, text: item.summary, url });
      }
      break;
    case "twitter":
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
      break;
    case "facebook":
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
      break;
    case "whatsapp":
      window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
      break;
    case "copy":
      navigator.clipboard.writeText(url);
      break;
  }
}

export function ArticleModal({ item, onClose }: { item: NewsItem; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg-primary)] flex flex-col max-w-[480px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-[var(--border-subtle)]">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center flex-shrink-0"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="min-w-0 flex-1">
          <span className="text-[11px] font-semibold text-[var(--accent-secondary)]">{item.source}</span>
          <span className="text-[11px] text-[var(--text-muted)]"> · {item.timestamp}</span>
        </div>
        <button
          onClick={() => shareArticle(item, "native")}
          className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center flex-shrink-0"
        >
          <Share2 size={18} className="text-[var(--text-secondary)]" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imageUrl}
          alt={item.headline}
          className="w-full h-52 object-cover"
        />

        <div className="px-5 py-6">
          {/* Category + meta */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-2.5 py-1 rounded-full text-[12px] font-bold uppercase bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]">
              {item.category}
            </span>
            <span className="text-[12px] text-[var(--text-muted)]">{item.timestamp}</span>
          </div>

          {/* Headline */}
          <h1 className="text-[24px] font-extrabold leading-[1.2] tracking-tight mb-4">
            {item.headline}
          </h1>

          {/* Source */}
          <p className="text-[13px] text-[var(--text-tertiary)] mb-5">
            Por <span className="font-semibold text-[var(--accent-secondary)]">{item.source}</span>
          </p>

          {/* Summary / lede */}
          <p className="text-[17px] text-[var(--text-primary)] font-medium leading-[1.6] mb-6 border-l-2 border-[var(--accent-secondary)] pl-4">
            {item.summary}
          </p>

          {/* Body */}
          <div className="space-y-5">
            {item.body.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-[15px] text-[var(--text-secondary)] leading-[1.75]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share buttons */}
          <div className="mt-8 pt-5 border-t border-[var(--border-subtle)]">
            <p className="text-[12px] font-bold text-[var(--text-tertiary)] uppercase tracking-wide mb-3">
              Compartir
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={() => shareArticle(item, "twitter")}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#1DA1F2]/15 text-[#1DA1F2] text-[12px] font-semibold"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X
              </button>
              <button
                onClick={() => shareArticle(item, "whatsapp")}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366]/15 text-[#25D366] text-[12px] font-semibold"
              >
                <Send size={14} />
                WhatsApp
              </button>
              <button
                onClick={() => shareArticle(item, "copy")}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 text-[var(--text-secondary)] text-[12px] font-semibold"
              >
                <Link2 size={14} />
                Copiar
              </button>
            </div>
          </div>

          {/* Source footer */}
          <div className="mt-5 pb-4">
            <p className="text-[12px] text-[var(--text-muted)]">
              Fuente: <span className="text-[var(--accent-secondary)] font-semibold">{item.source}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
