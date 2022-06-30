
// //swapping variable using a temporary variable

// //take input from users

// let a = prompt('enter the first variable')
// let b = prompt('enter the second variable')

// //create a temporary variable
// let temp = a
// a = b
// b = temp
// console.log(`the value of a is ${a}`)
// console.log(`the value of b is ${b}`)

//swapping variable using destructuring

let a = 10
let b = 6

[a, b] = [b, a]

console.log(a,b)