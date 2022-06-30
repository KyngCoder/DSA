//RegExp object takes two parameters: the regular expression and the optional match setting such as:
/*
1. i - perform case-insensitive matching
2. g - perform a global match(find all matches rather than stopping at first match)
3. m - perform multiline matching
 */


//RegExp has two functions:
//1. search() - test for matches in string. return index for match
//2. match() - test for matches. return all matches

//basic Regex rules
// ^ - indicates the start of a string/line
// /d - finds any digit
// [abc] - finds any character not between the brackets
// [^abc] - finds any character not between the brackets
// [0-9] - finds any digit between the brackets
// [^0-9] - finds any digit not between the brackets
// (x|y) - finds any of the alternatives specified

const str = 'javascript datastructure'
const n = str.search('datastructure')
console.log(n)