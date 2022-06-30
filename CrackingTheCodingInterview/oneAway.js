/*
 There are three types of edits that can be performed on strings: insert a character, 
remove a character, or replace a character. Given two strings, write a function to check if they are 
one edit (or zero edits) away.
*/

const oneAway = (string1,string2) => {

}

console.log(oneAway('pale','ple')) //true
console.log(oneAway('pales','pale')) //true
console.log(oneAway('pale','bale')) //true
console.log(oneAway('pale','bake')) //false