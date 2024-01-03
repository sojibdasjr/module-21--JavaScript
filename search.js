const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolete  pari ni. sada sada kala kala ';

// const doseExist = lyrics.includes('pakhi');
// const doseExist = lyrics.includes('pakhi');
const searchString = 'Pakhi';
const lyricsToLowerCase = lyrics.toLowerCase();
const searchStringToLowerCase = searchString.toLowerCase();
const doseExist = lyricsToLowerCase.includes(searchStringToLowerCase);
//oneline Code 
const doseExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doseExistOneLine);
//----------------------------------
//indexOf
console.log(lyrics.indexOf('kailla'));

if(lyrics.indexOf('sada') !== - 1){
    console.log('Éxists inside the string');
}
else{
    console.log("çannot find it");
}

//statsWith

console.log(lyrics.startsWith('2mi'));

//endswith
const fileName = 'mymiodata.pdf';
const otherFile = fileName.endsWith('.pdf');
console.log(otherFile);