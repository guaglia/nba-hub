"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Trophy, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/home", icon: Home, label: "Home" },
  { href: "/super6", icon: Trophy, label: "Super6" },
  { href: "/noticias", icon: Newspaper, label: "Noticias" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] safe-bottom z-50">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const isActive = pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[44px] transition-colors duration-200",
                isActive
                  ? "text-[var(--accent-primary)]"
                  : "text-[var(--text-tertiary)]"
              )}
            >
              <tab.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[11px] font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
