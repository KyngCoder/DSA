//calculate the sum of even
// number greater than 10 but less than 30

sum = 0
const sumEven = () => {
    for(let i=10; i<30; i+=2){
       sum +=i
    }
    return sum
}

console.log(sumEven())