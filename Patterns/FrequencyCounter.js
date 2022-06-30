/*
write a function called same,which accepts two arrays.
the function should return true if every value in the 
first array has it's corresponding value squared in the second.
the frequency of values must be the same
 */

//  const same = (array1,array2) => {
//     if(array1.length !== array2.length) return false
//     for(let i=0; i<array1.length; i++){
//         let correctIndex = array2.indexOf(array1[i]**2)
//         if(correctIndex === -1){
//             return false
//         }
//         array2.splice(correctIndex,1)
//     }
//     return true
//  }

//  console.log(same([1,2,3],[1,4,9]))

 //this algorithm is an O(nsquare) because indexOf is a innerloop

 //use of frequency patter to get it to O(n)

//  function same(array1,array2){
//      if(array1.length !== array2.length){
//          return false
//      }
//      let frequencyCounter1 = {}
//      let frequencyCounter2 = {}
//      for(let val of array1){
//          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
//      }
//      for(let val of array2){
//          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//      }
//      for(let key in frequencyCounter1){
//          if(!(key ** 2 in frequencyCounter2)){
//              return false
//          }
//          if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
//              return false
//          }
//      }
//      return true
//  }

// console.log(same([1,2,3,2],[9,1,4,4]))


//anagrams
const anagram = (string1,string2) => {
    if(string1.length !== string2.length) return 'not anagram'
    const lookup = {}

    for (let i=0; i<string1.length; i++){
        let letter = string1[i]
        //if letter exist, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1

    }

    for(let i=0; i<string2.length; i++){
        let letter = string2[i]
        //can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter] -=1
        }
    }
    return true
}


console.log(anagram('army','mary'))

