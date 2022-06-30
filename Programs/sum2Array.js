const sum2Array = (array1,array2) => {
    let sum = 0
    for(let i=0; i<array1.length; i++){
        sum = sum + array1[i]
    }
    for(let j=0; j<array2.length; j++){
        sum = sum + array2[j]
    }
    return sum
}

console.log(sum2Array([1,2,3],[0,4,0]))