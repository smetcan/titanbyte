import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - TitanByte",
  description: "TitanByte gizlilik politikası. Kişisel verilerinizin nasıl işlendiği ve korunduğu hakkında bilgi edinin.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Gizlilik Politikası
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Son güncelleme: {new Date().toLocaleDateString("tr-TR")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              1. Giriş
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TitanByte ("biz", "bizim" veya "sitemiz"), kişisel verilerinizin gizliliğini ve güvenliğini
              ciddiye almaktadır. Bu Gizlilik Politikası, TitanByte web sitesini ("Site") kullandığınızda
              kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              2. Topladığımız Bilgiler
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sitemizi kullandığınızda aşağıdaki türde bilgileri toplayabiliriz:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Otomatik Olarak Toplanan Bilgiler:</strong> IP adresi, tarayıcı türü, işletim
                sistemi, ziyaret süresi ve sayfa görüntüleme sayısı gibi teknik bilgiler.
              </li>
              <li>
                <strong>Çerezler:</strong> Site deneyiminizi iyileştirmek için çerezler ve benzeri teknolojiler
                kullanabiliriz.
              </li>
              <li>
                <strong>Kullanıcı İçeriği:</strong> Yorumlar ve beğeniler gibi kullanıcı tarafından sağlanan
                içerikler (anonim olarak).
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              3. Bilgilerin Kullanımı
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Topladığımız bilgileri aşağıdaki amaçlarla kullanabiliriz:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Siteyi işletmek ve geliştirmek</li>
              <li>Kullanıcı deneyimini iyileştirmek</li>
              <li>İçerikleri kişiselleştirmek</li>
              <li>İstatistiksel analizler yapmak</li>
              <li>Güvenliği sağlamak</li>
              <li>Yasal gereklilikleri karşılamak</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              4. Bilgi Paylaşımı
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kişisel verilerinizi aşağıdaki durumlar dışında üçüncü taraflarla paylaşmayız:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Yasal olarak zorunlu olduğumuzda</li>
              <li>Haklarımızı korumak veya savunmak için</li>
              <li>Sitenin işletilmesi için gerekli hizmet sağlayıcılarla (örn. hosting)</li>
              <li>Kullanıcının açık rızası ile</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              5. Veri Güvenliği
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kişisel verilerinizi korumak için uygun teknik ve organizasyonel önlemler alıyoruz. Ancak,
              internet üzerinden yapılan hiçbir veri aktarımı %100 güvenli değildir ve bu garantiyi veremeyiz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              6. Çerezler
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Siteyi kullanarak çerezlerin kullanımını kabul etmiş olursunuz. Çerezleri tarayıcı
              ayarlarınızdan devre dışı bırakabilirsiniz, ancak bu durumda bazı özellikler düzgün çalışmayabilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              7. Üçüncü Taraf Hizmetler
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sitemiz Google Analytics gibi üçüncü taraf hizmetleri kullanabilir. Bu hizmetlerin kendi
              gizlilik politikaları vardır ve bu politikaları incelemenizi öneririz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              8. Çocukların Gizliliği
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sitemiz 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamaz. Eğer 13 yaşın altındaki
              bir çocuktan kişisel bilgi topladığımızı fark edersek, bu bilgiyi derhal sileriz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              9. Gizlilik Politikasındaki Değişiklikler
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikleri bu sayfada
              yayınlayarak bildiririz. Politikadaki önemli değişiklikler hakkında sizi e-posta yoluyla
              bilgilendirebiliriz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              10. İletişim
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gizlilik politikamız hakkında sorularınız varsa, lütfen{" "}
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
