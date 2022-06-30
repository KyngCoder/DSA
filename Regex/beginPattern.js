//to match the beginning of a string use caret symbol without character class
let string = 'rick is the best'
let pattern = /^rick/
console.log(pattern.test(string))