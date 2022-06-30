const pigLatin = (word) => {
   const regex = /^([^aeiou]+)(.*)/
   if(regex.test(word)){
    word = word.replace(/^([^aeiou]+)(.*)/,'$2$1ay')
   }else{
       word +='way'
   }
   return word
}
console.log(pigLatin('ake'))
