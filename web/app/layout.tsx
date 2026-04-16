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
      <body>
        <header className="nav">
          <div className="shell nav-inner">
            <Link href="/" className="logo">agent-skills</Link>

            <nav className="nav-links">
              <Link href="/skills">Skills</Link>
              <Link href="/providers">Providers</Link>
              <Link href="/categories">Categories</Link>
            </nav>

            <div className="nav-right">
              <a
                href="https://github.com/rakibulism/agent-skills"
                target="_blank"
                rel="noreferrer"
                className="social-chip github-chip"
                aria-label="GitHub repository for agent-skills"
              >
                <i className="ri-github-fill" aria-hidden="true" />
                <span>Star on GitHub</span>
                <img
                  src="https://img.shields.io/github/stars/rakibulism/agent-skills?style=social"
                  alt="GitHub stars for agent-skills"
                />
              </a>
              <a
                href="https://x.com/rakibulism"
                target="_blank"
                rel="noreferrer"
                className="social-chip"
                aria-label="Follow the author on X"
              >
                <i className="ri-twitter-x-fill" aria-hidden="true" />
                <span>Author on X</span>
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
