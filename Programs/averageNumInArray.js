sum = 0
const averageArray = (array) => {
    for(let i=0; i<array.length;i++){
        sum += array[i]
    }
    return sum/array.length
    
}
console.log(averageArray([1,2,3]))