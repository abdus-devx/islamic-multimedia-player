const playerTitle = 'Islamic Multimedia Player';
let surahName = 'at-Thur';
let isPlaying = true;



if (isPlaying) {
    console.log(`now playing ${surahName}`)
} else if (surahName) {
    console.log(`paused : ${surahName}`)
} else {
    console.log('no surah selected')
}