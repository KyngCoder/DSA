// //check to see that each string is followed by a u
// let string1 = 'quit'
// let string2 = 'qwerty'

// let lookPositive = /q(?=u)/
// let lookNegative = /q(?!u)/

// console.log(lookPositive.test(string2),lookNegative.test(string2))


//match password of length greater than 5,don't start with num but have 2 consecutive num

const password = 'jerry23'
const checker = /^[0-9](?=^\w)/
console.log(checker.test(password))