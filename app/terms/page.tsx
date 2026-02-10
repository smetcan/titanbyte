import { Metadata } from "next";
import { FileText, CheckCircle, AlertCircle, ExternalLink, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Kullanım Şartları - TitanByte",
  description: "TitanByte kullanım şartları. Siteyi kullanarak bu şartları kabul etmiş olursunuz.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-4">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Kullanım Şartları
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
                Kabul Edilme
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              TitanByte web sitesini ("Site") kullanarak, bu Kullanım Şartlarını ("Şartlar") okuduğunuzu,
              anladığınızı ve kabul ettiğinizi beyan edersiniz. Bu Şartları kabul etmiyorsanız, Siteyi
              kullanmamalısınız.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Site Kullanımı
              </h2>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Siteyi aşağıdaki şartlara uygun olarak kullanmayı kabul edersiniz:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {["Yasalara uygun kullanım", "Başkalarının haklarına saygı gösterme", "Siteyi kötüye kullanmama", "Virüs veya zararlı kod yaymama", "Siteyi ticari amaçla kullanmama (izin alınmadıkça)"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-surface-hover">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                İçerik
              </h2>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Sitedeki tüm içerikler (makaleler, görseller, videolar vb.) telif hakkı ile korunmaktadır.
            </p>
            <div className="space-y-2">
              {["İçerikler kişisel kullanım içindir", "İzinsiz kopyalama, dağıtım veya kullanım yasaktır", "Alıntı yaparken kaynak belirtmek zorunludur", "Ticari kullanım için önceden izin alınmalıdır"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-surface-hover">
                  <AlertCircle className="h-4 w-4 text-accent flex-shrink-0" />
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
                Kullanıcı İçeriği
              </h2>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Siteye yorum veya diğer içerikleri göndererek:
            </p>
            <div className="space-y-2">
              {["İçeriğin size ait olduğunu beyan edersiniz", "İçeriğin başkalarının haklarını ihlal etmediğini garanti edersiniz", "İçeriğin yasa dışı, müstehcen veya zararlı olmadığını kabul edersiniz", "Bize içeriği kullanma, düzenleme ve yayınlama hakkı verirsiniz"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-surface-hover">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
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
                Fikri Mülkiyet Hakları
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Site ve tüm içerikleri, tasarımı ve işlevselliği TitanByte'ın mülkiyetindedir ve telif
              hakları, ticari marka ve diğer fikri mülkiyet yasaları ile korunmaktadır.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                6
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Sorumluluk Reddi
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Site "olduğu gibi" ve "mevcut olduğu şekilde" sağlanmaktadır. Site'nin kesintisiz, hatasız
              veya virüssüz olacağı garanti edilmez. Site'nin kullanımından kaynaklanan herhangi bir zarardan
              TitanByte sorumlu değildir.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                7
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Üçüncü Taraf Bağlantıları
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar sadece kolaylık
              sağlamak amacıyla verilmiştir ve bağlantı verilen sitelerin içeriği üzerinde kontrolümüz yoktur.
              Bu sitelerin gizlilik politikaları ve kullanım şartları geçerlidir.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                8
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Şartların Değiştirilmesi
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              TitanByte, bu Şartları herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler
              Site'de yayınlandığı anda yürürlüğe girer. Site'yi kullanmaya devam ederek güncellenmiş Şartları
              kabul etmiş olursunuz.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-surface rounded-xl p-6 border border-border animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                9
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Uygulanabilir Hukuk
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Bu Şartlar ve Site'nin kullanımı, Türkiye Cumhuriyeti yasalarına tabi olacaktır. Herhangi bir
              anlaşmazlık durumunda Türkiye mahkemeleri yetkilidir.
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
              Bu Şartlar hakkında sorularınız varsa, lütfen{" "}
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
