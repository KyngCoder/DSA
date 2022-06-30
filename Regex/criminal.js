//find one or more criminal hiding in the string,represented by C
let string = 'AAbcDDEJCCpCAJCC'
let pattern = /C+/g
console.log(string.match(pattern))