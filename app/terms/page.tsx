import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları - TitanByte",
  description: "TitanByte kullanım şartları. Siteyi kullanarak bu şartları kabul etmiş olursunuz.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Kullanım Şartları
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              1. Kabul Edilme
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TitanByte web sitesini ("Site") kullanarak, bu Kullanım Şartlarını ("Şartlar") okuduğunuzu,
              anladığınızı ve kabul ettiğinizi beyan edersiniz. Bu Şartları kabul etmiyorsanız, Siteyi
              kullanmamalısınız.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              2. Site Kullanımı
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Siteyi aşağıdaki şartlara uygun olarak kullanmayı kabul edersiniz:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Yasalara uygun kullanım</li>
              <li>Başkalarının haklarına saygı gösterme</li>
              <li>Siteyi kötüye kullanmama</li>
              <li>Virüs veya zararlı kod yaymama</li>
              <li>Siteyi ticari amaçla kullanmama (izin alınmadıkça)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              3. İçerik
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sitedeki tüm içerikler (makaleler, görseller, videolar vb.) telif hakkı ile korunmaktadır.
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>İçerikler kişisel kullanım içindir</li>
              <li>İzinsiz kopyalama, dağıtım veya kullanım yasaktır</li>
              <li>Alıntı yaparken kaynak belirtmek zorunludur</li>
              <li>Ticari kullanım için önceden izin alınmalıdır</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              4. Kullanıcı İçeriği
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Siteye yorum veya diğer içerikleri göndererek:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>İçeriğin size ait olduğunu beyan edersiniz</li>
              <li>İçeriğin başkalarının haklarını ihlal etmediğini garanti edersiniz</li>
              <li>İçeriğin yasa dışı, müstehcen veya zararlı olmadığını kabul edersiniz</li>
              <li>Bize içeriği kullanma, düzenleme ve yayınlama hakkı verirsiniz</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              5. Fikri Mülkiyet Hakları
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Site ve tüm içerikleri, tasarımı ve işlevselliği TitanByte'ın mülkiyetindedir ve telif
              hakları, ticari marka ve diğer fikri mülkiyet yasaları ile korunmaktadır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              6. Sorumluluk Reddi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Site "olduğu gibi" ve "mevcut olduğu şekilde" sağlanmaktadır. Site'nin kesintisiz, hatasız
              veya virüssüz olacağı garanti edilmez. Site'nin kullanımından kaynaklanan herhangi bir zarardan
              TitanByte sorumlu değildir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              7. Üçüncü Taraf Bağlantıları
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar sadece kolaylık
              sağlamak amacıyla verilmiştir ve bağlantı verilen sitelerin içeriği üzerinde kontrolümüz yoktur.
              Bu sitelerin gizlilik politikaları ve kullanım şartları geçerlidir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              8. Şartların Değiştirilmesi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TitanByte, bu Şartları herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler
              Site'de yayınlandığı anda yürürlüğe girer. Site'yi kullanmaya devam ederek güncellenmiş Şartları
              kabul etmiş olursunuz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              9. Uygulanabilir Hukuk
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu Şartlar ve Site'nin kullanımı, Türkiye Cumhuriyeti yasalarına tabi olacaktır. Herhangi bir
              anlaşmazlık durumunda Türkiye mahkemeleri yetkilidir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              10. İletişim
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu Şartlar hakkında sorularınız varsa, lütfen{" "}
              <a href="/contact" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
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
