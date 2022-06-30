let string1 = 'hug'
let string2 = 'hum'
let string3 = 'hit'

//matches any word that starts with hu
let match = /hu./

console.log(match.test(string1),match.test(string2),match.test(string3))