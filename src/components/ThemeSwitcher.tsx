"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "disco";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "disco") {
      let isDark = false;
      const interval = setInterval(() => {
        isDark = !isDark;
        document.documentElement.classList.toggle("dark", isDark);
      }, 250);
      return () => clearInterval(interval);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-lg transition-colors ${
          theme === "light"
            ? "bg-[var(--accent)] text-white"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
        aria-label="Light mode"
        title="Light mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-lg transition-colors ${
          theme === "dark"
            ? "bg-[var(--accent)] text-white"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
        aria-label="Dark mode"
        title="Dark mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </button>
      <button
        onClick={() => setTheme("disco")}
        className={`p-2 rounded-lg transition-colors ${
          theme === "disco"
            ? "bg-[var(--accent)] text-white"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
        aria-label="Disco mode"
        title="Disco mode"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9" />
          <path d="M12 2c2.5 0 4.5 4.5 4.5 10s-2 10-4.5 10" />
          <path d="M12 2c-2.5 0-4.5 4.5-4.5 10s2 10 4.5 10" />
          <path d="M2 12h20" />
          <path d="M4 6h16" />
          <path d="M4 18h16" />
        </svg>
      </button>
    </div>
  );
}
