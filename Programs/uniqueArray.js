/*Create a function that will receive 
two arrays of numbers as arguments 
and return an array composed of 
all the numbers that are either 
in the first array or second array 
but not in both*/

const mergeUniqueArray = (arr1,arr2) => {
    let firstArray = arr1
    for (let i=0; i<arr2.length; i++){
        if(!firstArray.includes(arr2[i])){
            firstArray.push(arr2[i])
        }
    }
    return firstArray
    
}
console.log(mergeUniqueArray([1,2,4,7,3],[4,3,0]))