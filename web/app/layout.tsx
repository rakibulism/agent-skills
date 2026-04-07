import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Skills Platform",
  description: "Browse, preview, and download AI agent skills"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="nav shell">
          <Link href="/" className="logo">agent-skills</Link>
          <nav>
            <Link href="/skills">Skills</Link>
            <Link href="/providers">Providers</Link>
            <Link href="/categories">Categories</Link>
          </nav>
        </header>
        <main className="shell">{children}</main>
      </body>
    </html>
  );
}
