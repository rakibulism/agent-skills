import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

export const metadata: Metadata = {
  title: "Agent Skills Platform",
  description: "Browse, preview, and download AI agent skills"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-background text-foreground font-sans">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto max-w-7xl flex h-14 items-center justify-between px-4 sm:px-8">
            <Link href="/" className="font-bold text-lg tracking-tight">
              agent-skills
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link href="/skills" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                Skills
              </Link>
              <Link href="/providers" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                Providers
              </Link>
              <Link href="/categories" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors">
                Categories
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/rakibulism/agent-skills"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-full bg-background hover:bg-muted transition-colors border-border"
              >
                <i className="ri-github-fill text-sm" />
                <span>Star on GitHub</span>
                <img
                  src="https://img.shields.io/github/stars/rakibulism/agent-skills?style=social"
                  alt="GitHub stars"
                  className="h-4"
                />
              </a>
              <a
                href="https://x.com/rakibulism"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors"
                aria-label="Author on X"
              >
                <i className="ri-twitter-x-fill" />
              </a>
            </div>
          </div>
        </header>

        <main className="min-h-[calc(100vh-3.5rem)]">{children}</main>
      </body>
    </html>
  );
}
