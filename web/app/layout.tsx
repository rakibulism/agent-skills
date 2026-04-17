import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import { 
  Github, 
  Twitter, 
  Menu, 
  Search, 
  LayoutGrid, 
  Box, 
  Users, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const metadata: Metadata = {
  title: "Agent Skills Platform",
  description: "Browse, preview, and download AI agent skills",
};

const NAV_LINKS = [
  { name: "Skills", href: "/skills", icon: Box },
  { name: "Providers", href: "/providers", icon: Users },
  { name: "Categories", href: "/categories", icon: LayoutGrid },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-background text-foreground font-sans">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-8">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Box className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl tracking-tight hidden sm:block">
                  agent<span className="text-primary/70">-</span>skills
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-3">
                <a
                  href="https://github.com/rakibulism/agent-skills"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-semibold border rounded-full bg-background hover:bg-muted transition-all border-border shadow-sm group"
                >
                  <Github className="w-4 h-4" />
                  <span>Star on GitHub</span>
                  <div className="ml-1 px-1.5 py-0.5 bg-muted rounded text-[10px] group-hover:bg-primary/10 transition-colors">
                    32
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://x.com/rakibulism"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors"
                  aria-label="Author on X"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col gap-6 py-6 font-sans">
                      <Link href="/" className="flex items-center gap-2">
                        <Box className="w-6 h-6 text-primary" />
                        <span className="font-bold text-xl tracking-tight">agent-skills</span>
                      </Link>
                      <div className="flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center justify-between px-4 py-3 text-lg font-medium rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border"
                          >
                            <div className="flex items-center gap-3">
                              <link.icon className="w-5 h-5" />
                              {link.name}
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-auto flex flex-col gap-4">
                        <Button className="w-full h-12 rounded-xl" asChild>
                          <Link href="/submit">Submit a Skill</Link>
                        </Button>
                        <div className="flex items-center justify-center gap-4 text-muted-foreground">
                          <Github className="w-5 h-5" />
                          <Twitter className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        <main id="main-content" className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>

        <footer className="border-t bg-muted/30">
          <div className="container mx-auto max-w-7xl px-4 sm:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2 space-y-6">
                <Link href="/" className="flex items-center gap-2 group">
                  <Box className="w-6 h-6 text-primary" />
                  <span className="font-bold text-xl tracking-tight">
                    agent<span className="text-primary/70">-</span>skills
                  </span>
                </Link>
                <p className="text-muted-foreground max-w-xs leading-relaxed">
                  The curated marketplace for AI agent instructions, skills, and behavior prompts. Open source and community driven.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="p-2 border rounded-full hover:bg-muted transition-colors"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="p-2 border rounded-full hover:bg-muted transition-colors"><Github className="w-4 h-4" /></a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
                <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                  <li><Link href="/skills" className="hover:text-primary transition-colors">Browse Skills</Link></li>
                  <li><Link href="/providers" className="hover:text-primary transition-colors">Providers</Link></li>
                  <li><Link href="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
                  <li><Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Community</h4>
                <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                  <li><Link href="/submit" className="hover:text-primary transition-colors flex items-center gap-1">Submit Skill <ExternalLink className="w-3 h-3" /></Link></li>
                  <li><a href="https://github.com/rakibulism/agent-skills" className="hover:text-primary transition-colors">GitHub Repository</a></li>
                  <li><Link href="/about" className="hover:text-primary transition-colors">About the Project</Link></li>
                  <li><Link href="/api" className="hover:text-primary transition-colors font-mono">/api/v1</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground">
              <p>© {new Date().getFullYear()} Agent Skills Platform. Created with ❤️ by @rakibulism</p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
