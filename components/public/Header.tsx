"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center bg-primary rounded-sm group-hover:bg-primary-dark transition-colors">
              <span className="text-primary-foreground font-bold text-sm">TB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground tracking-tight">
                TitanByte
              </span>
              <span className="text-xs text-muted-foreground tracking-wider font-mono">BİLİM & TEKNOLOJİ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-surface rounded-md transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/category"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-md transition-colors"
            >
              Kategoriler
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-md transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-md transition-colors"
            >
              İletişim
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-surface transition-colors text-foreground"
              aria-label="Menüyü aç"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-surface rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/category"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kategoriler
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
