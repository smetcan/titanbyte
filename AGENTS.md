# TitanByte - AI Agent Guidelines

## Proje Özeti

TitanByte, bilim ve teknoloji odaklı haber paylaşımlarının yapıldığı bir blog platformudur. Kullanıcılar içerikleri okuyabilir, beğenebilir ve yorum yapabilir. Tüm etkileşimler anonimdir.

## Teknoloji Yığını

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Dil:** TypeScript
- **Styling:** Tailwind CSS
- **UI Kütüphanesi:** shadcn/ui
- **Rich Text Editor:** TinyMCE

### Backend
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **API:** Next.js API Routes

### Deployment
- **Hosting:** Vercel
- **Database Hosting:** Supabase
- **Repository:** GitHub

## Proje Yapısı

```
titanbyte/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Ana sayfa
│   ├── globals.css         # Global stiller
│   ├── sitemap.ts          # Dinamik sitemap
│   ├── manifest.ts         # PWA manifest
│   ├── about/              # Hakkımızda sayfası
│   ├── contact/            # İletişim sayfası
│   ├── privacy/            # Gizlilik politikası
│   ├── terms/              # Kullanım şartları
│   ├── post/[slug]/        # İçerik detay (planlanıyor)
│   ├── category/[slug]/    # Kategori sayfası (planlanıyor)
│   └── admin/              # Admin paneli (planlanıyor)
├── components/
│   └── public/             # Public UI bileşenleri
│       ├── Header.tsx      # Site header
│       └── Footer.tsx      # Site footer
├── lib/
│   ├── prisma.ts           # Prisma client
│   ├── supabase.ts         # Supabase client
│   ├── types.ts            # TypeScript tipleri
│   └── utils.ts            # Yardımcı fonksiyonlar
├── prisma/
│   └── schema.prisma       # Veritabanı şeması
├── public/                 # Statik dosyalar
└── plans/                  # Proje planları
```

## Veritabanı Şeması

### Tablolar

| Tablo | Açıklama |
|-------|----------|
| `Category` | İçerik kategorileri |
| `Post` | Blog içerikleri |
| `Like` | Beğeniler (IP tabanlı, tekil) |
| `Comment` | Yorumlar (anonim, moderasyonlu) |
| `AdminUser` | Admin kullanıcıları |

### İlişkiler

- `Category` 1-N `Post`
- `Post` 1-N `Like`
- `Post` 1-N `Comment`

## Renk Paleti

| Değişken | Değer | Kullanım |
|----------|-------|----------|
| `--primary` | #7c3aed | Ana renk (violet) |
| `--secondary` | #0891b2 | İkincil renk (cyan) |
| `--accent` | #f59e0b | Vurgu rengi (amber) |
| `--background` | #0b0f19 / #f8fafc | Arka plan (dark/light) |
| `--surface` | #1e293b / #ffffff | Kart arka planı |
| `--muted` | #94a3b8 | Soluk metin |

## Kod Standartları

### TypeScript
- Strict mode aktif
- Interface'ler `lib/types.ts` dosyasında tanımlanmalı
- Type import'ları için `import type` kullanımı

### React
- Functional components
- Server Components öncelikli
- Client Components için `"use client"` directive
- Props için interface tanımları

### CSS
- Tailwind CSS utility classes
- CSS değişkenleri `globals.css` dosyasında
- Gradient için `.gradient-text` ve `.gradient-bg` class'ları
- Animasyonlar için `.animate-fade-in`, `.animate-slide-up`

### Git Commits
- `feat:` Yeni özellik
- `fix:` Hata düzeltmesi
- `docs:` Dokümantasyon
- `style:` Format değişiklikleri
- `refactor:` Kod yeniden düzenleme
- `test:` Test ekleme/düzeltme
- `chore:` Diğer değişiklikler

## Özellik Durumu

### Tamamlanan
- [x] Proje yapısı ve veritabanı şeması
- [x] Supabase projesi ve tablolar
- [x] Temel sayfalar (ana, hakkında, iletişim, gizlilik, şartlar)
- [x] Modern UI tasarımı ve renk paleti
- [x] SEO dosyaları (robots.txt, sitemap.ts, manifest.ts)
- [x] GitHub repository
- [x] İçerik detay sayfası (app/post/[slug])
- [x] Kategori sayfası (app/category/[slug])
- [x] Beğeni sistemi (IP tabanlı, tekil)
- [x] Yorum sistemi (anonim, moderasyonlu)
- [x] Admin paneli (dashboard, kategoriler, postlar, yorumlar)
- [x] API route'ları (CRUD işlemleri)
- [x] Authentication (NextAuth.js credentials)
- [x] TinyMCE editörü (rich text editing)
- [x] PWA ikonları (dinamik ikon oluşturma)
- [x] Dark/Light mode toggle (tema değiştirici)

### Planlanan
- [x] shadcn/ui kurulumu
- [ ] Structured Data (Schema.org)
- [x] Vercel deployment
- [ ] İletişim formu backend (e-posta gönderimi)
- [ ] Görüntüleme sayacı (view count)
- [ ] İlgili içerikler önerisi
- [ ] Arama fonksiyonu

## Ortam Değişkenleri

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
DATABASE_URL=your_database_url

# NextAuth.js (planlanıyor)
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=your_url
```

## Komutlar

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Prisma client oluşturma
npx prisma generate

# Prisma studio
npx prisma studio
```

## Notlar

- Kullanıcı kaydı yok, tüm etkileşimler anonim
- Beğeni sistemi IP tabanlı, her IP sadece bir kez beğenebilir
- Yorumlar moderatör onayı gerektirir
- Google AdSense uyumlu sayfalar mevcut (about, contact, privacy, terms)
- Dark/Light mode desteği mevcut

---

*Bu dosya AI asistanlar için proje bağlamı sağlamak amacıyla oluşturulmuştur.*