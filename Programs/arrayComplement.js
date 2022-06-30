/*Create a function that will receive 
two arrays and will return an array 
with elements that are in the first 
array but not in the second */

const arrayComplement = (array1,array2) => {
    let secondArray = array2
    let newArray = []
    for (let i=0; i<array1.length; i++){
        if(!array2.includes(array1[i])){
            newArray.push(array1[i])
        }
    }
    return newArray

}
console.log(arrayComplement([1,2,3,4,5,6],[4,5,6,7,8,9]))