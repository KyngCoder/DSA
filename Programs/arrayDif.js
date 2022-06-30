const arrayDif = (array1,array2) => {
    let combinedArray = array1.concat(array2)
    let newArray = [...new Set(combinedArray)]
    return newArray
}
console.log(arrayDif([1,2,3,4,5,],[4,4,5,6]))