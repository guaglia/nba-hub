"use client";

import { useState } from "react";
import { news } from "@/lib/data/news";
import { NewsItem } from "@/lib/types";
import { NewsCardLarge, NewsCardMedium } from "@/components/news/NewsCard";
import { ArticleModal } from "@/components/news/ArticleModal";
import { cn } from "@/lib/utils";

const categories = ["Todos", "Playoffs", "Recap", "Analysis", "Trade", "Injury"] as const;

export default function NoticiasPage() {
  const [filter, setFilter] = useState<string>("Todos");
  const [openArticle, setOpenArticle] = useState<NewsItem | null>(null);

  const filtered = filter === "Todos"
    ? news
    : news.filter((n) => n.category === filter);

  return (
    <>
      <div className="px-4 pt-6">
        {/* Header */}
        <h1 className="text-2xl font-extrabold mb-4">Noticias NBA</h1>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-5 -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-colors",
                filter === cat
                  ? "bg-[var(--accent-primary)] text-white"
                  : "bg-[var(--bg-tertiary)] text-[var(--text-secondary)]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Feed */}
        <div className="space-y-3 mb-6">
          {filtered.map((item, i) =>
            i === 0 ? (
              <NewsCardLarge key={item.id} item={item} onClick={() => setOpenArticle(item)} />
            ) : (
              <NewsCardMedium key={item.id} item={item} onClick={() => setOpenArticle(item)} />
            )
          )}
          {filtered.length === 0 && (
            <p className="text-center text-[var(--text-tertiary)] py-8 text-sm">
              No hay noticias en esta categoría
            </p>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-[var(--text-muted)] pb-4">
          Powered by ESPN & Bleacher Report
        </p>
      </div>

      {/* Article Modal */}
      {openArticle && (
        <ArticleModal item={openArticle} onClose={() => setOpenArticle(null)} />
      )}
    </>
  );
}
