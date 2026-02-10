import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - TitanByte",
  description: "TitanByte ile iletişime geçin. Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize ulaşın.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          İletişim
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TitanByte ile iletişime geçmek, sorularınızı sormak veya işbirliği teklif etmek için
              aşağıdaki bilgileri kullanabilirsiniz.
            </p>
          </section>

          <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              İletişim Bilgileri
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  E-posta
                </h3>
                <a
                  href="mailto:info@titanbyte.com"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  info@titanbyte.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Sosyal Medya
                </h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://twitter.com/titanbyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://github.com/titanbyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/company/titanbyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              İşbirliği ve Reklam
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TitanByte ile işbirliği yapmak, reklam vermek veya içerik sponsorluğu hakkında bilgi almak
              için e-posta yoluyla bizimle iletişime geçebilirsiniz. Tekliflerinizi değerlendirmekten
              mutluluk duyarız.
            </p>
          </section>

          <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Geri Bildirim
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TitanByte'ı geliştirmek için geri bildirimleriniz çok değerli. İçeriklerimiz, site tasarımı
              veya herhangi bir konudaki önerilerinizi bizimle paylaşabilirsiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Yanıt Süresi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Genellikle 24-48 saat içinde e-postalarınıza yanıt vermeye çalışıyoruz. Acil durumlarda
              lütfen konu satırında "Acil" belirtiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
