import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — driven by CSS variables so light/dark swap automatically.
        // See app/globals.css for the :root and .dark variable definitions.
        bg: "var(--bg)",
        surface: "var(--surface)",
        primary: "var(--primary)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        border: "var(--border)",
        success: "var(--success)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero-name": ["64px", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "hero-heading": ["52px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        section: ["40px", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "card-title": ["24px", { lineHeight: "1.3" }],
      },
      borderRadius: {
        md: "12px",
        lg: "16px",
      },
      boxShadow: {
        card: "0 4px 16px rgba(17,24,39,0.06)",
        "card-lg": "0 12px 32px rgba(17,24,39,0.10)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
