import type { Metadata } from "next";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";
import { PostHogPageView } from "@/components/PostHogPageView";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "PostHog's Open Sauce",
  description: "Recipes our colleagues swear by",
  openGraph: {
    title: "PostHog's Open Sauce",
    description: "Recipes our colleagues swear by",
    images: [
      {
        url: "/images/chef-hero.jpg",
        width: 1200,
        height: 630,
        alt: "PostHog's Open Sauce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PostHog's Open Sauce",
    description: "Recipes our colleagues swear by",
    images: ["/images/chef-hero.jpg"],
  },
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
