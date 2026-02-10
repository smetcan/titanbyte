import { Metadata } from "next";
import { Shield, Database, Cookie, Lock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - TitanByte",
  description: "TitanByte gizlilik politikası. Kişisel verilerinizin nasıl işlendiği ve korunduğu hakkında bilgi edinin.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Gizlilik Politikası
          </h1>
          <p className="text-muted">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Section 1 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Giriş
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              TitanByte ("biz", "bizim" veya "sitemiz"), kişisel verilerinizin gizliliğini ve güvenliğini
              ciddiye almaktadır. Bu Gizlilik Politikası, TitanByte web sitesini ("Site") kullandığınızda
              kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Topladığımız Bilgiler
              </h2>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Sitemizi kullandığınızda aşağıdaki türde bilgileri toplayabiliriz:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-hover">
                <Database className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Otomatik Olarak Toplanan Bilgiler:</strong>
                  <p className="text-muted text-sm mt-1">IP adresi, tarayıcı türü, işletim sistemi, ziyaret süresi ve sayfa görüntüleme sayısı gibi teknik bilgiler.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-hover">
                <Cookie className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Çerezler:</strong>
                  <p className="text-muted text-sm mt-1">Site deneyiminizi iyileştirmek için çerezler ve benzeri teknolojiler kullanabiliriz.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-hover">
                <Lock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Kullanıcı İçeriği:</strong>
                  <p className="text-muted text-sm mt-1">Yorumlar ve beğeniler gibi kullanıcı tarafından sağlanan içerikler (anonim olarak).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Bilgilerin Kullanımı
              </h2>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Topladığımız bilgileri aşağıdaki amaçlarla kullanabiliriz:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {["Siteyi işletmek ve geliştirmek", "Kullanıcı deneyimini iyileştirmek", "İçerikleri kişiselleştirmek", "İstatistiksel analizler yapmak", "Güvenliği sağlamak", "Yasal gereklilikleri karşılamak"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-surface-hover">
                  <div className="h-1.5 w-1.5 rounded-full gradient-bg" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Bilgi Paylaşımı
              </h2>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:
            </p>
            <div className="space-y-2">
              {["Yasal olarak zorunlu olduğumuzda", "Haklarımızı korumak veya savunmak için", "Sitenin işletilmesi için gerekli hizmet sağlayıcılarla (örn. hosting)", "Kullanıcının açık rızası ile"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-surface-hover">
                  <div className="h-1.5 w-1.5 rounded-full gradient-bg" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                5
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Veri Güvenliği
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Kişisel verilerinizi korumak için uygun teknik ve organizasyonel önlemler alıyoruz. Ancak,
              internet üzerinden yapılan hiçbir veri aktarımı %100 güvenli değildir ve bu garantiyi veremeyiz.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                6
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Çerezler
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Siteyi kullanarak çerezlerin kullanımını kabul etmiş olursunuz. Çerezleri tarayıcı
              ayarlarınızdan devre dışı bırakabilirsiniz, ancak bu durumda bazı özellikler düzgün çalışmayabilir.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                7
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Üçüncü Taraf Hizmetler
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Sitemiz Google Analytics gibi üçüncü taraf hizmetleri kullanabilir. Bu hizmetlerin kendi
              gizlilik politikaları vardır ve bu politikaları incelemenizi öneririz.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                8
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Çocukların Gizliliği
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Sitemiz 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamaz. Eğer 13 yaşın altındaki
              bir çocuktan kişisel bilgi topladığımızı fark edersek, bu bilgiyi derhal sileriz.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                9
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Gizlilik Politikasındaki Değişiklikler
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikleri bu sayfada
              yayınlayarak bildiririz. Politikadaki önemli değişiklikler hakkında sizi e-posta yoluyla
              bilgilendirebiliriz.
            </p>
          </section>

          {/* Section 10 */}
          <section className="gradient-bg rounded-xl p-6 text-white animate-slide-up" style={{ animationDelay: "0.9s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                10
              </div>
              <h2 className="text-xl font-semibold">
                İletişim
              </h2>
            </div>
            <p className="leading-relaxed">
              Gizlilik politikamız hakkında sorularınız varsa, lütfen{" "}
              <a href="/contact" className="underline font-semibold hover:text-white/80 transition-colors">
                iletişim sayfamız
              </a>{" "}
              aracılığıyla bizimle iletişime geçin.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
