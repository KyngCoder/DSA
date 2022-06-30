
sum = 0
const sumArray = (array) => {
    for(let i=0; i<array.length;i++){
        sum = sum + array[i]
    }
    return sum
}

console.log(sumArray([1,2,3]))