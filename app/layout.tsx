import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import { ThemeProvider } from "@/components/public/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TitanByte - Bilim ve Teknoloji Haberleri",
  description: "Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler. TitanByte ile geleceği keşfedin.",
  keywords: ["bilim", "teknoloji", "haber", "makale", "yapay zeka", "uzay", "teknoloji haberleri"],
  authors: [{ name: "TitanByte" }],
  creator: "TitanByte",
  publisher: "TitanByte",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://titanbyte.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "TitanByte",
    title: "TitanByte - Bilim ve Teknoloji Haberleri",
    description: "Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TitanByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TitanByte - Bilim ve Teknoloji Haberleri",
    description: "Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler.",
    images: ["/og-image.png"],
    creator: "@titanbyte",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://titanbyte.com"} />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <a href="#main-content" className="skip-to-content">
            Ana içeriğe atla
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}