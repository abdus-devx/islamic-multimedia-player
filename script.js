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