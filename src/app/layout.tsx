import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";
import { PostHogPageView } from "@/components/PostHogPageView";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Open Sauce - Recipe Blog",
  description: "Delicious recipes for home cooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PostHogProvider>
          <PostHogPageView />
          <Nav />
          <main>{children}</main>
          <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
            <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center gap-4 text-[var(--muted)]">
              <ThemeSwitcher />
              <p>
                <a
                  href="https://posthog.com"
                  className="hover:text-(--accent) transition-colors"
                >
                  PostHog
                </a>{" "}
                is so open source here&apos;s our open sauce
              </p>
            </div>
          </footer>
        </PostHogProvider>
      </body>
    </html>
  );
}
