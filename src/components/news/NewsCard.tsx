"use client";

import { NewsItem } from "@/lib/types";

export function NewsCardLarge({ item, onClick }: { item: NewsItem; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="w-full text-left rounded-md overflow-hidden select-none cursor-pointer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.headline}
        className="w-full h-44 object-cover"
      />
      <div className="bg-[var(--bg-secondary)] px-4 py-3">
        <span className="inline-block px-2 py-0.5 rounded text-[12px] font-bold uppercase bg-white/10 text-[var(--text-secondary)] mb-2">
          {item.category}
        </span>
        <h3 className="text-lg font-bold leading-snug text-[var(--text-primary)] mb-2">
          {item.headline}
        </h3>
        <p className="text-[14px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed mb-2">
          {item.summary}
        </p>
        <div className="flex items-center gap-2 text-[12px] text-[var(--text-tertiary)]">
          <span className="font-semibold text-[var(--accent-secondary)]">
            {item.source}
          </span>
          <span>·</span>
          <span>{item.timestamp}</span>
        </div>
      </div>
    </div>
  );
}

export function NewsCardMedium({ item, onClick }: { item: NewsItem; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex gap-3 rounded-md bg-[var(--bg-secondary)] p-3 w-full text-left select-none cursor-pointer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.headline}
        className="w-20 h-20 rounded-lg flex-shrink-0 object-cover"
      />
      <div className="flex-1 min-w-0">
        <span className="inline-block px-1.5 py-0.5 rounded text-[12px] font-bold uppercase bg-white/10 text-[var(--text-tertiary)] mb-1">
          {item.category}
        </span>
        <h4 className="text-[15px] font-bold leading-snug text-[var(--text-primary)] line-clamp-2 mb-1">
          {item.headline}
        </h4>
        <div className="flex items-center gap-2 text-[12px] text-[var(--text-tertiary)]">
          <span className="font-semibold text-[var(--accent-secondary)]">{item.source}</span>
          <span>·</span>
          <span>{item.timestamp}</span>
        </div>
      </div>
    </div>
  );
}
