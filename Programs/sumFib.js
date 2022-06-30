const sumFib = (num) => {
    let a= 1
    let b = 1
    let sum = a + b
    while(sum < num){
        let temp = a
        a = b
        b = temp + b
        sum += (b % 2 != 0)? b : 0
        
    }
    return sum
}

console.log(sumFib(1000))