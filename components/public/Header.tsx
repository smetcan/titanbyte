"use client";

import Link from "next/link";
import { Menu, X, Atom, Zap } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl gradient-bg shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
              <Atom className="h-6 w-6 text-white" />
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent animate-pulse-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">
                TitanByte
              </span>
              <span className="text-xs text-muted tracking-wider">SCIENCE & TECH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/category"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200"
            >
              Kategoriler
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200"
            >
              Hakkımızda
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200"
            >
              İletişim
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors text-foreground"
            aria-label="Menüyü aç"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/category"
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Kategoriler
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-all duration-200"
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
