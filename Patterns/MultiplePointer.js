//write a function called sumZero which takes two sorted array.
//the function should find the first pair where the sum is zero
//return the values that sum to zero or the -1 if no pair exist

const sumZero = (array) => {
    let left = 0
    let right = array.length-1
    while(left < right){
        let sum = array[left] + array[right]
        if(sum === 0) {
            return [array[left],array[right]]
        }else if(sum > 0) {
            right --
        }else{
            left ++
        }
       
    }
}

console.log(sumZero([1,2,3,4,-3]))


//counting unique values 
function uniqueValues(array){
    let i = 0
    for(let j=1; i<array.length; i++){
      if(array[j] !== array[i]){
        j++
        array[i] = array[j]
      }
}
return i+1
}

console.log(uniqueValues([1,5,1]))