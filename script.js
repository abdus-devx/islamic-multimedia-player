const playerTitle = 'Islamic Multimedia Player';
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