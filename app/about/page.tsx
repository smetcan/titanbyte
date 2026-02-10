import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - TitanByte",
  description: "TitanByte hakkında bilgi edinin. Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler sunuyoruz.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Hakkımızda
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              TitanByte Nedir?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TitanByte, bilim ve teknoloji dünyasından en son haberleri, makaleleri ve analizleri sunan
              modern bir blog platformudur. 2024 yılında kurulan platformumuz, teknoloji tutkunları için
              güvenilir ve güncel bir bilgi kaynağı olmayı hedeflemektedir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Misyonumuz
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Misyonumuz, karmaşık teknoloji ve bilim haberlerini anlaşılır bir dille sunarak, okuyucularımızın
              bilinçli kararlar vermelerine yardımcı olmaktır. Teknoloji dünyasındaki gelişmeleri takip etmek
              isteyen herkes için erişilebilir bir platform sunuyoruz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Vizyonumuz
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Vizyonumuz, Türkiye'nin en güvenilir ve kapsamlı teknoloji blogu olmak ve teknoloji
              okuryazarlığını artırmaktır. Gelecekte uluslararası arenada da tanınan bir marka olmayı
              hedefliyoruz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              İçeriklerimiz
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Yapay zeka ve makine öğrenmesi haberleri</li>
              <li>Uzay ve astronomi gelişmeleri</li>
              <li>Mobil teknoloji incelemeleri</li>
              <li>Yazılım geliştirme trendleri</li>
              <li>Bilimsel keşifler ve araştırmalar</li>
              <li>Blockchain ve kripto para haberleri</li>
              <li>İnternet of things (IoT) teknolojileri</li>
              <li>Siber güvenlik güncellemeleri</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              İletişim
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bizimle iletişime geçmek, sorularınızı sormak veya işbirliği teklif etmek için
              <a href="/contact" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ml-1">
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
