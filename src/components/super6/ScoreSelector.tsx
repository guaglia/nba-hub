"use client";

import { useState, useRef, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

interface ScoreSelectorProps {
  value: number;
  onChange: (value: number) => void;
  isDefault?: boolean;
}

export function ScoreSelector({ value, onChange, isDefault }: ScoreSelectorProps) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(String(value));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const clamp = (v: number) => Math.max(70, Math.min(160, v));

  const commitInput = () => {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed)) {
      onChange(clamp(parsed));
    }
    setEditing(false);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(clamp(value - 1))}
        className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)] active:bg-[var(--bg-surface)] transition-colors"
      >
        <Minus size={14} />
      </button>

      {editing ? (
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.replace(/\D/g, "").slice(0, 3))}
          onBlur={commitInput}
          onKeyDown={(e) => e.key === "Enter" && commitInput()}
          className="w-12 text-center font-mono text-xl font-bold bg-[var(--bg-tertiary)] rounded-lg py-1 text-white outline-none border border-[var(--accent-primary)]"
        />
      ) : (
        <button
          onClick={() => {
            setInputValue(String(value));
            setEditing(true);
          }}
          className={`font-mono text-xl font-bold w-12 text-center py-1 rounded-lg transition-colors ${
            isDefault
              ? "text-[var(--text-muted)]"
              : "text-[var(--text-primary)]"
          }`}
        >
          {value}
        </button>
      )}

      <button
        onClick={() => onChange(clamp(value + 1))}
        className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)] active:bg-[var(--bg-surface)] transition-colors"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
