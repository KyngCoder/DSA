// let string1 = 'big'
// let string2 = 'bug'
// let string3 = 'bog'
// let string4 = 'biug'

// let regex = /b[iuo]g/

// console.log(regex.test(string1),regex.test(string2),regex.test(string3),regex.test(string4))

//find all vowels

let string = 'beware of bugs in the above code; i have only proved it correct not tried it'

let regex = /[aeiou]/gi
const numOfVowel = string.match(regex)
console.log(numOfVowel.length)