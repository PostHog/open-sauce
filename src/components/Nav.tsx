"use client";

import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-4 py-6">
        <a href="/" className="text-2xl font-bold text-[var(--accent)]">
          PostHog&apos;s open sauce
        </a>
      </nav>
    </header>
  );
}
