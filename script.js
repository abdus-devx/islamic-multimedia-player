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