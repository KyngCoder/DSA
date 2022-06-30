const vowelCounter = (string) => {
   let vowelCount = 0
   for(let i=0; i<string.length; i++){
       if(string[i] === 'a' || string[i] === 'i' || string[i] === 'e' || string[i] === 'o' || string[i] === 'u'){
           vowelCount++
       }
   }
   return vowelCount
}

console.log(vowelCounter('i love rica'))

//or regex

function vowelCount(str){
    return str.match(/[aeiou]/ig || []).length
}
console.log(vowelCount('i love jamaica'))