import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center bg-primary rounded-sm">
                <span className="text-primary-foreground font-bold text-sm">TB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-foreground tracking-tight">
                  TitanByte
                </span>
                <span className="text-xs text-muted-foreground tracking-wider font-mono">BİLİM & TEKNOLOJİ</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Geleceği şekillendiren bilimsel keşifler ve teknoloji haberleri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-sm">
              BAĞLANTILAR
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/category"
                  className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                >
                  Kategoriler
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-sm">
              YASAL
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                >
                  Kullanım Şartları
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground text-sm">
              BÜLTEN
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Haftalık haberleri alın.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="E-posta"
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-2 rounded-md text-sm font-medium transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} TitanByte. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
