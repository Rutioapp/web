import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        "muted-foreground": "rgb(var(--color-muted-foreground) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-strong": "rgb(var(--color-surface-strong) / <alpha-value>)",
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        "brand-strong": "rgb(var(--color-brand-strong) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(39, 37, 31, 0.08)",
        float: "0 32px 80px rgba(39, 37, 31, 0.14)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.55)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(212, 163, 115, 0.22), transparent 35%), radial-gradient(circle at 85% 10%, rgba(140, 146, 108, 0.16), transparent 28%), linear-gradient(180deg, rgba(255, 252, 246, 1) 0%, rgba(247, 242, 233, 1) 52%, rgba(245, 239, 228, 1) 100%)",
        "brand-sheen":
          "linear-gradient(135deg, rgba(194, 139, 88, 0.16) 0%, rgba(140, 146, 108, 0.08) 100%)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      maxWidth: {
        shell: "78rem"
      },
      letterSpacing: {
        calm: "-0.03em"
      }
    }
  },
  plugins: []
};

export default config;
