# 🌐 Panduan Edit Website Lengkap - PESONA GLAMPING TAWANGMANGU

## 📁 Struktur File Utama

```
📦 Website Root
├── 📁 client/                    # Frontend React App
│   ├── 📁 src/
│   │   ├── 📁 components/        # Komponen UI
│   │   │   ├── 📄 hero-section-new.tsx       # Hero utama
│   │   │   ├── 📄 navigation-new.tsx         # Menu navigasi  
│   │   │   ├── 📄 search-bar-new.tsx         # Bar pencarian
│   │   │   ├── 📄 property-card-new.tsx      # Card properti
│   │   │   ├── 📄 property-modal.tsx         # Detail properti
│   │   │   ├── 📄 about-section-new.tsx      # Tentang kami
│   │   │   ├── 📄 contact-section-new.tsx    # Kontak footer
│   │   │   └── 📄 theme-toggle.tsx           # Switch mode gelap/terang
│   │   ├── 📁 pages/
│   │   │   └── 📄 home.tsx                   # Halaman utama
│   │   ├── 📄 index.css                      # Style utama
│   │   └── 📄 App.tsx                        # Root aplikasi
│   └── 📄 index.html                         # HTML utama + SEO
├── 📁 shared/
│   ├── 📄 data.ts                            # Data properti (PENTING!)
│   └── 📄 schema.ts                          # Struktur data
├── 📁 attached_assets/                       # Gambar & aset
│   └── 📄 logo pesona_1756221891563.png      # Logo resmi
├── 📄 CARA_MENAMBAH_PROPERTI.md              # Panduan add properti
└── 📄 replit.md                              # Dokumentasi project
```

## 🎯 Edit Konten Utama

### 1. 📝 Menambah/Edit Properti
**File:** `shared/data.ts`
- Cari array `villaData` atau `glampingData`  
- Copy template dari `CARA_MENAMBAH_PROPERTI.md`
- Paste & edit sesuai kebutuhan

### 2. 🏠 Edit Hero Section
**File:** `client/src/components/hero-section-new.tsx`
```typescript
// Ganti judul utama (line ~24-27)
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
  <span className="text-yellow-400">Pesona</span>
  <span className="dynamic-text"> Glamping</span>
  <br />
  <span className="dynamic-text">Tawangmangu</span>
</h1>

// Ganti subtitle (line ~29-31)
<p className="text-xl dynamic-text-muted mb-10 max-w-4xl mx-auto leading-relaxed">
  Nikmati pengalaman glamping dan villa terbaik di kaki Gunung Lawu
</p>
```

### 3. 🔍 Edit Search Bar
**File:** `client/src/components/search-bar-new.tsx`
```typescript
// Ganti placeholder search (line ~22)
placeholder="Cari glamping atau villa impian Anda..."
```

### 4. ℹ️ Edit About Section  
**File:** `client/src/components/about-section-new.tsx`
```typescript
// Ganti statistik (line ~5-8)
const stats = [
  { icon: Star, label: "Rating 4.9/5", value: "4.9", color: "text-yellow-400" },
  { icon: Users, label: "5000+ Tamu Puas", value: "5K+", color: "text-green-400" },
  { icon: MapPin, label: "50+ Properti", value: "50+", color: "text-blue-400" }
];

// Ganti deskripsi about (line ~33-39)
<p className="text-xl dynamic-text-muted mb-8 leading-relaxed">
  Kami adalah penyedia akomodasi glamping dan villa terpercaya...
</p>
```

### 5. 📱 Edit Kontak Footer
**File:** `client/src/components/contact-section-new.tsx`
```typescript
// Ganti nomor WhatsApp (line ~9)
{ 
  title: "WhatsApp", 
  description: "Chat langsung untuk info & booking",
  value: "+62 812-2637-4041",  // ← GANTI NOMOR DISINI
  action: "Chat Sekarang",
  href: "https://wa.me/6281226374041"  // ← DAN DISINI
}

// Ganti nomor telepon (line ~16)
{
  title: "Telepon",
  description: "Hubungi kami langsung",  
  value: "+62 812-2637-4041",  // ← GANTI NOMOR DISINI
  action: "Telepon",
  href: "tel:+6281226374041"   // ← DAN DISINI
}
```

## 🎨 Edit Style & Tema

### 1. 🌈 Ganti Warna Tema
**File:** `client/src/index.css`
```css
/* Light Mode Colors (line ~14-19) */
--background: hsl(0, 0%, 88%);     /* Background utama */
--primary: hsl(340, 82%, 52%);     /* Warna pink utama */

/* Dark Mode Colors (line ~52-58) */  
--background: hsl(240, 15%, 4%);   /* Background gelap */
--primary: hsl(271, 91%, 65%);     /* Warna ungu utama */
```

### 2. 🔤 Ganti Font
**File:** `client/index.html` (line ~100)
```html
<!-- Tambah Google Font baru -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

**File:** `client/src/index.css`
```css
/* Ganti font family di body */
body {
  font-family: 'Poppins', sans-serif;
}
```

## 📊 Edit SEO & Meta Tags

### 1. 🏷️ Edit Title & Description  
**File:** `client/index.html`
```html
<!-- Ganti title (line ~8) -->
<title>Glamping & Villa Terbaik di Tawangmangu | PESONA GLAMPING</title>

<!-- Ganti description (line ~10) -->
<meta name="description" content="Temukan pengalaman glamping dan villa terbaik...">

<!-- Ganti keywords (line ~11) -->
<meta name="keywords" content="glamping tawangmangu, villa tawangmangu...">
```

### 2. 🖼️ Ganti Favicon
**File:** `client/index.html` (line ~48-49)
```html
<link rel="icon" type="image/png" sizes="32x32" href="/attached_assets/logo-baru.png">
<link rel="shortcut icon" href="/attached_assets/logo-baru.png">
```

## 📱 Ganti Nomor WhatsApp Global

### File yang Perlu Diedit:
1. **`client/src/components/contact-section-new.tsx`** (line ~12 & 19)
2. **`client/src/components/property-modal.tsx`** (line ~180 & 190)

### Cari & Ganti:
- `6281226374041` → Nomor baru (tanpa +62)
- `+62 812-2637-4041` → Format tampilan baru
- `https://wa.me/6281226374041` → URL WhatsApp baru  
- `tel:+6281226374041` → URL telepon baru

## 🔧 Tips Development

### 1. 🔄 Hot Reload
- Setiap perubahan file otomatis reload browser
- Cek console browser jika ada error
- Gunakan F12 → Network untuk debug

### 2. 📱 Responsive Testing  
- Ctrl+Shift+M untuk mobile view
- Test di berbagai ukuran layar
- Pastikan scroll dan touch berfungsi

### 3. 🌙 Mode Gelap/Terang
- Toggle ada di kanan atas
- Pastikan kontras text readable
- Cek semua komponen di kedua mode

### 4. 🚀 Performance  
- Compress gambar sebelum upload
- Gunakan format WebP jika memungkinkan  
- Lazy load untuk gambar besar

## ⚠️ Hal yang Harus Dihindari

❌ **JANGAN EDIT:**
- `vite.config.ts` - Konfigurasi build
- `package.json` - Dependencies
- `tailwind.config.ts` - Config CSS
- File di folder `node_modules/`

❌ **JANGAN HAPUS:**
- Class CSS `dynamic-text` (untuk theme toggle)
- Attribute `data-testid` (untuk testing)
- Import statements di atas file

✅ **SELALU LAKUKAN:**
- Backup file sebelum edit besar
- Test di mobile dan desktop
- Cek console untuk error JavaScript
- Verify link WhatsApp & telepon bekerja

## 🆘 Troubleshooting

### Website Blank/Error:
1. Cek console browser (F12)
2. Periksa syntax JavaScript/TypeScript  
3. Pastikan import path benar
4. Restart development server

### Gambar Tidak Muncul:
1. Cek URL gambar bisa diakses
2. Pastikan format JPG/PNG/WebP
3. Periksa path relatif benar

### WhatsApp Tidak Buka:
1. Cek format nomor: `6281226374041`
2. Pastikan URL: `https://wa.me/6281226374041`
3. Test di mobile dan desktop

### Style Tidak Berubah:
1. Hard refresh: Ctrl+Shift+R
2. Clear browser cache
3. Cek CSS syntax error
4. Pastikan class Tailwind benar

---

📞 **Butuh Bantuan?** Hubungi developer atau lihat dokumentasi di `replit.md`