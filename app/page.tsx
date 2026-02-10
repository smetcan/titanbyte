import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TitanByte - Bilim ve Teknoloji Haberleri",
  description: "Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler. TitanByte ile geleceği keşfedin.",
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          TitanByte
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Bilim ve Teknoloji Haberleri
        </p>
        <p className="text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
          Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler. Geleceği keşfedin.
        </p>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Öne Çıkanlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  Kategori
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  İçerik Başlığı
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  İçerik özeti burada yer alacak...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
          Son Eklenenler
        </h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    Kategori
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    İçerik Başlığı
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    İçerik özeti burada yer alacak...
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500 ml-4">
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
