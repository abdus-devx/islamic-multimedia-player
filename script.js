/* const playerTitle = 'Islamic Multimedia Player';
let surahName = null;
let isPlaying = false;



if (isPlaying) {
    console.log(`now playing ${surahName}`)
} else if (surahName) {
    console.log(`paused : ${surahName}`)
} else {
    console.log('no surah selected')
}

const status = isPlaying ? 'Currently playing' : 'Ready to play';
console.log(status);

let daftarSurah = ['al-fatihah', 'al-baqoroh', 'ali imaran', 'an-nisa', 'al-maidah'];

for (let i = 0; i < daftarSurah.length; i++) {
    console.log(daftarSurah[i]);
}

function displaySurah(nomor, name = 'Unknown Surah') {
    return 'playing surah:' + nomor + '. ' + name;
}

let result = displaySurah('01', 'al baqoroh');
console.log(result); 

let result1 = displaySurah('01');
console.log(result1);

const playSurah = (nomor, name  = 'Unknown Surah') => 'Playing surah:' + nomor+'. '+ name;

console.log(playSurah('03', 'Ali Imran'));

const buah = [ 'pisang', 'apel', 'jeruk', 'manga', 'nanas'];
buah.forEach((daftarBuah, nomor)=> {
     console.log(`Buah ke-${nomor + 1} : ${daftarBuah}`)
});

const car = ['alphard', 'vellfire', 'lexus', 'staria'];
car.forEach((listCar, number)=> {
    console.log(`My Car ${number + 1} : ${listCar}`)
});

const buahBesar = buah.map((isiBuah)=> {
    const ubahjadiBesar = isiBuah.toUpperCase();
    return ubahjadiBesar;
});

console.log(buahBesar);

const fruits = [ 'apple', 'mango', 'orange', 'avocado', 'watermelon' ];
const longFruits = fruits.map(jadiPanjang => `Fruit: ${jadiPanjang}`);

console.log(longFruits);

const students = [
  { nama: "Budi", umur: 17, nilai: 85 },
  { nama: "Ani", umur: 16, nilai: 92 },
  { nama: "Candra", umur: 17, nilai: 60 },
  { nama: "Dedi", umur: 18, nilai: 78 },
  { nama: "Eka", umur: 16, nilai: 90 }
];

const siswaLulus = students.filter(josPisan => josPisan.nilai > 80);
const ucapan = siswaLulus.map(selamat => `Selamat ${selamat.nama}  kamu lulus!` )

console.log(ucapan);

const products = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Phone", category: "Electronics", price: 800 },
  { name: "Shoes", category: "Clothing", price: 80 },
  { name: "Headphone", category: "Electronics", price: 150 },
  { name: "Jacket", category: "Clothing", price: 120 }
];

const electronicProducts = products.filter(item => item.category === 'Electronics');
const productList = electronicProducts.map(elektro => `Product: ${elektro.name} - Price: $${elektro.price}`);

console.log(productList);

//DAY 6: OBJECT MASTERY

const currentSurah ={ 
    title: 'al-Fatihah',
    reciter: 'Misyari Rashid Alafasy',
    duration: 60,// in second
    // nest object 
    details: {
        ayat: 7,
        place: 'Meccan'
 
   },
   play: function() {
    this.isPlaying = true;
    return 'Now Playing: ' + this.title;
   },
   pause: function() {
    this.isPlaying = false;
    return 'paused: ' + this.title;
   }
}

console.log(currentSurah.title);

const playingSurah = currentSurah.play();
console.log(playingSurah);

const {title, reciter,details} = currentSurah;
console.log(title);
console.log(reciter);
console.log(details.ayat);

const newSurah = {...currentSurah, title: 'al-Baqoroh', duration: 120 };
console.log(newSurah);

// OBJEK 1: Data Awal / Data Lama
const dataLama = {
  nama: "Al-Fatihah",
  durasi: 60,
  jumlahAyat: 7
};

// OBJEK 2: Data Baru / Data Tambahan
const dataBaru = {
  nama: "Al-Baqarah", // ⬅ NAMA PROPERTI SAMA: "nama", tapi isinya beda!
  durasi: 120,        // ⬅ NAMA PROPERTI SAMA: "durasi", isinya beda!
  kategori: "Madaniyah" // ⬅ Ini baru, gak ada di dataLama
};

// 🔽 KITA GABUNGKAN PAKAI SPREAD OPERATOR
const hasilGabungan = { ...dataLama, ...dataBaru };

// 🔽 LIHAT HASILNYA
console.log(hasilGabungan);

for ( let i=2; i<=20; i+=2) {
    console.log(i);
};

let hitungan = 10;

while (hitungan > 0) {
    console.log('mundur:', hitungan);
    hitungan -=1;
    
}

for (let i=5; i<=50; i+=5) {
    console.log(`angka: ${i}`);
}

let angka = 5;
while(angka <=50) {
    console.log(`Angka: ${angka}` );
    angka +=5
}

for ( let i=1 ; i<=20; i++) {
    console.log(i % 2 === 0 ? `Angka ${i} adalah GENAP`:`Angka ${i} adalah GANJIL`);
}

const daftarProduk = [
  { nama: "Sepatu Lari", harga: 250000, stok: 10 },
  { nama: "Baju Kemeja", harga: 120000, stok: 15 },
  { nama: "Tas Ransel", harga: 175000, stok: 8 },
  { nama: "Topi Baseball", harga: 50000, stok: 20 }
];

for (const item of daftarProduk) {
    console.log(`Produk: ${item.nama} | Harga: Rp ${item.harga.toLocaleString('id-ID')} | Sisa Stok: ${item.stok}`)
}

const mobil = {
  merk: "Toyota",
  model: "Avanza",
  tahun: 2023,
  warna: "Hitam"
};

for (const data in mobil) {
 console.log(`${data}:${mobil[data]} `)
}

const productList1 = [
  { id: 1, name: "Laptop", price: 8500000, stock: 15, category: "Electronics" },
  { id: 2, name: "Batik Shirt", price: 175000, stock: 0, category: "Clothing" },
  { id: 3, name: "Smartphone", price: 3200000, stock: 25, category: "Electronics" },
  { id: 4, name: "Jeans", price: 250000, stock: 10, category: "Clothing" },
  { id: 5, name: "Electric Fan", price: 450000, stock: 3, category: "Electronics" },
  { id: 6, name: "Sports Shoes", price: 400000, stock: 0, category: "Clothing" }
];

for (const item of productList1){
    if (item.stock === 0) continue;

    let finalPrice = item.price;
    let note = "(Reguler Price)";
    if (item.category === "Electronics" && item.price > 1000000) {
        finalPrice = finalPrice*0.9;
        note = "(10% Discount Applied)";

    };
    console.log(`${item.name.toUpperCase()} | Price: Rp ${finalPrice.toLocaleString('id-ID')} | Stock: ${item.stock} | ${note}`); //method 1 - variable

    console.log(`${item.name.toUpperCase()} | Price: Rp ${finalPrice.toLocaleString('id-ID')} | Stock: ${item.stock} | ${item.category === "Electronics" && item.price > 1000000 ? "(10% Discount Applied)" : "(Reguler Price)"}`); //method 2 - ternary operator
}; */

const playerContent = {
 mainTitle : document.getElementById('mainTitle')
};