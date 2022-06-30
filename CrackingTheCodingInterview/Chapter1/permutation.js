const isPermutation = (string1,string2) => {
    if(string1.length !== string2.length) return false;
    return string1.split('').sort().join('') === string2.split('').sort().join('')
   
}
console.log(isPermutation('aba','aab'))//true 
console.log(isPermutation('aba', 'aaba'))//false

console.log(isPermutation('aba', 'aa'))//false