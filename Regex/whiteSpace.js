let string1 = 'this string contains tab whitespace'
let pattern = /\s/g
console.log(string1.match(pattern).length)