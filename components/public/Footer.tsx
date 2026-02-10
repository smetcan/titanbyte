import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Atom } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg shadow-lg shadow-primary/20">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">
                  TitanByte
                </span>
                <span className="text-xs text-muted tracking-wider">SCIENCE & TECH</span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/category"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  Kategoriler
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              Yasal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  Kullanım Şartları
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">
              Bizi Takip Edin
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://twitter.com/titanbyte"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface hover:bg-primary hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/titanbyte"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface hover:bg-foreground hover:text-background transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/titanbyte"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface hover:bg-[#0077b5] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@titanbyte.com"
                className="p-2.5 rounded-lg bg-surface hover:bg-accent hover:text-background transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted">
            © {new Date().getFullYear()} TitanByte. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
