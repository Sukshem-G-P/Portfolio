"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[52px] h-[28px]" />;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-[52px] h-[28px] rounded-full bg-surface border border-border"
    >
      <span
        className="absolute top-[2px] left-[2px] w-[22px] h-[22px] rounded-full bg-primary text-white flex items-center justify-center text-[11px] transition-all duration-200"
        style={{ left: isDark ? "26px" : "2px" }}
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </span>
    </button>
  );
}
