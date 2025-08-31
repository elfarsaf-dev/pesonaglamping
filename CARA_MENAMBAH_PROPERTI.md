# 📋 Template & Panduan Menambah Properti

## 🚀 Template Form Cepat

### ✂️ Copy Template Ini untuk Properti Baru:

```typescript
{
  id: "[TIPE]-[NAMA-SINGKAT]",
  name: "[NAMA LENGKAP PROPERTI]",
  location: "[ALAMAT LENGKAP]",
  rates: [
    { label: "Minggu-Kamis", price: [HARGA_WEEKDAY] },
    { label: "Jumat-Sabtu", price: [HARGA_WEEKEND] }
  ],
  units: [JUMLAH_UNIT],
  facilities: [
    "[FASILITAS 1]",
    "[FASILITAS 2]",
    "[FASILITAS 3]"
  ],
  capacity: "[KAPASITAS TAMU]",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00",
    "[ATURAN KHUSUS]"
  ],
  image: "[URL_GAMBAR]",
  type: "[villa/glamping]"
},
```

## 🗂️ File yang Perlu Diedit

File utama yang berisi data properti: `shared/data.ts`

## 📍 Lokasi Penambahan Data

### Untuk Villa:
- Cari array `villaData` di file `shared/data.ts`
- Tambahkan properti baru di akhir array sebelum tanda `];`

### Untuk Glamping:
- Cari array `glampingData` di file `shared/data.ts`
- Tambahkan properti baru di akhir array sebelum tanda `];`

## 📋 Contoh Lengkap Per Tipe

### 🏠 Contoh Villa:
```typescript
{
  id: "villa-pinus-hijau",
  name: "Villa Pinus Hijau", 
  location: "Jl. Lawu No. 25, Sekipan, Tawangmangu",
  rates: [
    { label: "Minggu-Kamis", price: 2000000 },
    { label: "Jumat", price: 2500000 },
    { label: "Sabtu", price: 3000000 }
  ],
  units: 1,
  facilities: [
    "4 Kamar tidur AC",
    "3 Kamar mandi water heater",
    "Kolam renang private",
    "Karaoke keluarga",
    "Kitchen set lengkap",
    "Free Wi-Fi",
    "Parkir 6 mobil",
    "View gunung Lawu"
  ],
  capacity: "20-25 orang",
  notes: [
    "Check in jam 14.00",
    "Check out jam 12.00", 
    "DP 30% dari total harga",
    "Bukti nikah untuk pasangan",
    "Jam malam 23.00 WIB",
    "Dilarang membawa miras"
  ],
  image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/villa-pinus.jpg?raw=true",
  type: "villa"
},
```

### 🏕️ Contoh Glamping:
```typescript
{
  id: "glamping-dome-aurora",
  name: "Glamping Dome Aurora",
  location: "Area Perkemahan Tawangmangu, Sekipan", 
  rates: [
    { label: "Minggu-Kamis", price: 650000 },
    { label: "Jumat-Sabtu", price: 850000 }
  ],
  units: 4,
  facilities: [
    "Dome transparan bintang",
    "1 King bed orthopedic",
    "Kamar mandi air hangat",
    "Mini pool private",
    "Smart TV 43 inch",
    "Free breakfast for 2",
    "Coffee maker",
    "View sunrise Lawu"
  ],
  capacity: "2-4 orang",
  notes: [
    "Check in jam 15.00",
    "Check out jam 12.00",
    "Khusus dewasa 18+ tahun", 
    "Bukti nikah wajib",
    "No smoking area",
    "Advance booking 3 hari"
  ],
  image: "https://github.com/elfarsaf-dev/lawuscape-/blob/main/Gambar/dome-aurora.jpg?raw=true",
  type: "glamping"
},
```

## 📋 Penjelasan Field

| Field | Keterangan | Contoh |
|-------|------------|--------|
| `id` | ID unik properti (lowercase, gunakan dash) | `"villa-pine"` |
| `name` | Nama properti yang ditampilkan | `"Villa Pine"` |
| `location` | Lokasi properti | `"Sekipan, Tawangmangu"` |
| `rates` | Array harga dengan label dan harga | `[{ label: "Weekday", price: 1500000 }]` |
| `units` | Jumlah unit yang tersedia | `1` atau `3` |
| `facilities` | Array fasilitas yang tersedia | `["Wi-Fi", "Kolam renang"]` |
| `capacity` | Kapasitas maksimal tamu | `"15-20 orang"` |
| `notes` | Catatan syarat & ketentuan | `["Check in jam 14.00"]` |
| `image` | URL gambar utama properti | `"https://..."` |
| `type` | Tipe properti (harus "villa" atau "glamping") | `"villa"` |

## ⚠️ Hal Penting

1. **ID harus unik** - Jangan gunakan ID yang sudah ada
2. **Tanda koma** - Jangan lupa tambahkan koma `,` setelah `}` kecuali ini adalah item terakhir
3. **Format harga** - Gunakan angka tanpa titik/koma (contoh: 1500000 bukan 1.500.000)
4. **Units tersedia** - Angka ini akan tampil di card dan detail modal
5. **Type** - Harus persis "villa" atau "glamping" (huruf kecil)

## 📱 Ganti Nomor WhatsApp

Untuk mengganti nomor WhatsApp:

1. Buka file: `client/src/components/property-modal.tsx`
2. Cari baris: `https://wa.me/6281226374041`
3. Ganti `081226374041` dengan nomor baru
4. Cari juga: `tel:+6281226374041`
5. Ganti dengan nomor telepon baru

## 🔄 Setelah Menambah Properti

1. Simpan file `shared/data.ts`
2. Website akan otomatis update (hot reload)
3. Cek di browser apakah properti baru muncul
4. Test modal detail dan tombol booking

## 💡 Tips

- Gunakan nama singkat tapi deskriptif untuk `name`
- Pastikan gambar berformat JPG/PNG dan accessible via URL
- Fasilitas diurutkan dari yang paling penting
- Harga diurutkan dari weekday ke weekend
- Notes berisi aturan penting untuk tamu