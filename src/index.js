const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const wordLength = 10;

  let arrayOfChars = [];

  for (let i = 0; i < expr.length; i += wordLength) {
    const char = expr.slice(i, i + wordLength);

    arrayOfChars.push(char);
  }

  const arrayOfCharsWithSpace = arrayOfChars.map((char) => {
    if (char === '**********') {
      return ' ';
    } else {
      return char;
    }
  });

  const arrayOfCharsWithoutZeros = arrayOfCharsWithSpace.map((char) => {
    const indexOfOne = char.indexOf('1');
    return char.slice(indexOfOne);
  });

  const arrayOfCharsInMorze = arrayOfCharsWithoutZeros.map((char) => {
    const charWithoutTen = char.replaceAll('10', '.');
    return charWithoutTen.replaceAll('11', '-');
  });

  const arrayOfDecodedWords = arrayOfCharsInMorze.map((char) => {
    if (char === ' ') return char;
    return MORSE_TABLE[char];
  });

  return arrayOfDecodedWords.join('');
}

module.exports = {
  decode,
};

console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010')); // hello world
