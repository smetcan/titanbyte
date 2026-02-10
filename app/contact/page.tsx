import { Metadata } from "next";
import { Mail, Twitter, Github, Linkedin, Handshake, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim - TitanByte",
  description: "TitanByte ile iletişime geçin. Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize ulaşın.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            İletişim
          </h1>
          <p className="text-muted text-lg">
            Bizimle iletişime geçin, sorularınızı paylaşın
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Intro */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up">
            <p className="text-muted leading-relaxed">
              TitanByte ile iletişime geçmek, sorularınızı sormak veya işbirliği teklif etmek için
              aşağıdaki bilgileri kullanabilirsiniz.
            </p>
          </section>

          {/* Contact Info */}
          <section className="bg-surface rounded-xl p-8 border border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg gradient-bg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                İletişim Bilgileri
              </h2>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-surface-hover">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  E-posta
                </h3>
                <a
                  href="mailto:info@titanbyte.com"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  info@titanbyte.com
                </a>
              </div>
              <div className="p-4 rounded-lg bg-surface-hover">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Twitter className="h-4 w-4 text-primary" />
                  Sosyal Medya
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://twitter.com/titanbyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                  <a
                    href="https://github.com/titanbyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-foreground hover:text-background transition-all duration-200"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/company/titanbyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-[#0077b5] hover:text-white transition-all duration-200"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Collaboration */}
          <section className="bg-surface rounded-xl p-8 border border-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                İşbirliği ve Reklam
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              TitanByte ile işbirliği yapmak, reklam vermek veya içerik sponsorluğu hakkında bilgi almak
              için e-posta yoluyla bizimle iletişime geçebilirsiniz. Tekliflerinizi değerlendirmekten
              mutluluk duyarız.
            </p>
          </section>

          {/* Feedback */}
          <section className="bg-surface rounded-xl p-8 border border-border animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <MessageSquare className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Geri Bildirim
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              TitanByte'ı geliştirmek için geri bildirimleriniz çok değerli. İçeriklerimiz, site tasarımı
              veya herhangi bir konudaki önerilerinizi bizimle paylaşabilirsiniz.
            </p>
          </section>

          {/* Response Time */}
          <section className="gradient-bg rounded-xl p-8 text-white animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6" />
              <h2 className="text-2xl font-semibold">
                Yanıt Süresi
              </h2>
            </div>
            <p className="leading-relaxed">
              Genellikle 24-48 saat içinde e-postalarınıza yanıt vermeye çalışıyoruz. Acil durumlarda
              lütfen konu satırında "Acil" belirtiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
