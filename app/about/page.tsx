import { Metadata } from "next";
import { Target, Eye, BookOpen, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda - TitanByte",
  description: "TitanByte hakkında bilgi edinin. Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler sunuyoruz.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Hakkımızda
          </h1>
          <p className="text-muted text-lg">
            Bilim ve teknoloji dünyasının kapılarını aralıyoruz
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* What is TitanByte */}
          <section className="bg-surface rounded-xl p-8 border border-border animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg gradient-bg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                TitanByte Nedir?
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              TitanByte, bilim ve teknoloji dünyasından en son haberleri, makaleleri ve analizleri sunan
              modern bir blog platformudur. 2024 yılında kurulan platformumuz, teknoloji tutkunları için
              güvenilir ve güncel bir bilgi kaynağı olmayı hedeflemektedir.
            </p>
          </section>

          {/* Mission */}
          <section className="bg-surface rounded-xl p-8 border border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Misyonumuz
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Misyonumuz, karmaşık teknoloji ve bilim haberlerini anlaşılır bir dille sunarak, okuyucularımızın
              bilinçli kararlar vermelerine yardımcı olmaktır. Teknoloji dünyasındaki gelişmeleri takip etmek
              isteyen herkes için erişilebilir bir platform sunuyoruz.
            </p>
          </section>

          {/* Vision */}
          <section className="bg-surface rounded-xl p-8 border border-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Vizyonumuz
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Vizyonumuz, Türkiye'nin en güvenilir ve kapsamlı teknoloji blogu olmak ve teknoloji
              okuryazarlığını artırmaktır. Gelecekte uluslararası arenada da tanınan bir marka olmayı
              hedefliyoruz.
            </p>
          </section>

          {/* Content Topics */}
          <section className="bg-surface rounded-xl p-8 border border-border animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              İçeriklerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Yapay zeka ve makine öğrenmesi haberleri",
                "Uzay ve astronomi gelişmeleri",
                "Mobil teknoloji incelemeleri",
                "Yazılım geliştirme trendleri",
                "Bilimsel keşifler ve araştırmalar",
                "Blockchain ve kripto para haberleri",
                "İnternet of things (IoT) teknolojileri",
                "Siber güvenlik güncellemeleri",
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-surface-hover">
                  <div className="h-2 w-2 rounded-full gradient-bg" />
                  <span className="text-muted">{topic}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="gradient-bg rounded-xl p-8 text-white animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6" />
              <h2 className="text-2xl font-semibold">
                İletişim
              </h2>
            </div>
            <p className="leading-relaxed mb-4">
              Bizimle iletişime geçmek, sorularınızı sormak veya işbirliği teklif etmek için
              <a href="/contact" className="underline font-semibold ml-1 hover:text-white/80 transition-colors">
                iletişim sayfamızı
              </a>
              ziyaret edebilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
