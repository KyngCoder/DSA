const string = '3 blind mice.'

//get rid of numbers and vowels
const ridNumAndVowel = /[^aeiou0-9]/gi

console.log(string.match(ridNumAndVowel).length)