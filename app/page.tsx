import { Metadata } from "next";
import { Sparkles, Zap, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "TitanByte - Bilim ve Teknoloji Haberleri",
  description: "Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler. TitanByte ile geleceği keşfedin.",
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 animate-fade-in relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl animate-float" />
        </div>
        
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6 animate-slide-up">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted">Bilim ve Teknoloji Dünyası</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            TitanByte
          </h1>
          
          <p className="text-xl md:text-2xl text-muted mb-4">
            Bilim ve Teknoloji Haberleri
          </p>
          
          <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler. Geleceği keşfedin.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Hızlı Güncellemeler</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border">
              <TrendingUp className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">Derinlemesine Analizler</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 rounded-full gradient-bg" />
          <h2 className="text-2xl font-bold text-foreground">
            Öne Çıkanlar
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group bg-surface rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
            >
              <div className="h-48 gradient-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    Kategori
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  İçerik Başlığı
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  İçerik özeti burada yer alacak...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 rounded-full gradient-bg" />
          <h2 className="text-2xl font-bold text-foreground">
            Son Eklenenler
          </h2>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="group bg-surface rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                      Kategori
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    İçerik Başlığı
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    İçerik özeti burada yer alacak...
                  </p>
                </div>
                <div className="text-sm text-muted whitespace-nowrap">
                  {new Date().toLocaleDateString("tr-TR")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
