const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolete  pari ni. sada sada kala kala rong jomecw sada kala hoici ami mon pagola bosonto kale ';

console.log(lyrics.length);


const parts = lyrics.split(' ');
// console.log(parts);
const sentences = lyrics.split(".");
// console.log(sentences);

const chars = lyrics.split("");
// console.log(chars);

const partial = lyrics.slice(5, 8);
// console.log(partial);

const partial2 = lyrics.substring(5, 8)
// console.log(partial2);



 const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'Bosonto kale tomai bolete  pari ni',
    'Sada sada kala kala rong jomecw sada kala hoici ami mon pagola bosonto kale '
  ];
const newSong = lines.join(". ")
//   console.log(newSong.trim());