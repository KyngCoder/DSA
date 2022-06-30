/*
1.username can only contain alphanumeric character.
2.numbers must be at the end if any
3.can be lowercase and uppercase
4.must be at least 2 characters long
 */

let password = 'z9'
let pattern = /^[a-zA-Z]([0-9]{2,0})/
console.log(pattern.test(password))