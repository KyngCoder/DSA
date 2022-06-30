const summation = (num) => {
    let sum = 0
    for(let i=0; i<=num; i++){
        sum = sum + i
    }
    return sum
}

console.log(summation(10))